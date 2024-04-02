import Handlebars from "handlebars";
import EventBus from "./EventBus";

interface Props {
  // eslint-disable-next-line
  [key: string]: any;
}

type ChildBlock = Block | string;

type Children = {
  [key: string]: ChildBlock;
};

type Lists = {
  [key: string]: ChildBlock[];
};

export default class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  } as const;

  private _element: HTMLElement | null = null;
  private _id: number;

  props: Props;
  children: Children;
  lists: Lists;
  eventBus: () => EventBus;

  // eslint-disable-next-line
  constructor(propsWithChildren: { [key: string]: any } = {}) {
    const eventBus = new EventBus();
    const { props, children, lists } =
      this._getChildrenPropsAndProps(propsWithChildren);
    this.props = this._makePropsProxy({ ...props });
    this.children = children;
    this.lists = lists;
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
    this._id = Math.floor(100000 + Math.random() * 900000);
  }

  private _addEvents(): void {
    const { events = {} } = this.props;

    Object.entries(events).forEach(([eventName, eventHandler]) => {
      this._element?.addEventListener(eventName as string, eventHandler as EventListener);
    });
  }

  private _removeEvents(): void {
    const { events } = this.props;
    console.log('remove Element', events);

    if (events) {
      Object.entries(events).forEach(([eventName, eventHandler]) => {
        this._element?.removeEventListener(eventName as string, eventHandler as EventListener);
      });
    }
  }

  private _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
    Object.values(this.children).forEach((child) => {
      if (child instanceof Block) {
        child.dispatchComponentDidMount();
      }
    });
  }

  componentDidMount(): void {}

  dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: Props, newProps: Props): void {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this._render();
    }
  }

  componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    console.log(oldProps, newProps);
    return true;
  }

  // eslint-disable-next-line
  private _getChildrenPropsAndProps(propsAndChildren: { [key: string]: any }) {
    const children: Children = {};
    const props: Props = {};
    const lists: Lists = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (Array.isArray(value)) {
        lists[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props, lists };
  }

  private _makePropsProxy(props: Props): Props {
    // eslint-disable-next-line
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[String(prop)];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldTarget = { ...target };
        target[String(prop)] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error("No access");
      },
    });
  }

  private _createDocumentElement(tagName: string): HTMLTemplateElement {
    return document.createElement(tagName) as HTMLTemplateElement;
  }

  protected render(): string {
    return "";
  }

  private _render(): void {
    const propsAndStubs = { ...this.props };
    const _tmpId = Math.floor(100000 + Math.random() * 900000);
    Object.entries(this.children).forEach(([key, child]) => {
      if (child instanceof Block) {
        propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
      }
    });

    Object.entries(this.lists).forEach(([key]) => {
      propsAndStubs[key] = `<div data-id="__l_${_tmpId}"></div>`;
    });

    const fragment = this._createDocumentElement("template");
    fragment.innerHTML = Handlebars.compile(this.render())(propsAndStubs);

    Object.values(this.children).forEach((child) => {
      if (child instanceof Block) {
        const stub = fragment.content.querySelector(`[data-id="${child._id}"]`) as HTMLTemplateElement;
        if (stub) {
          stub.replaceWith(child.getContent() as HTMLTemplateElement);
        }
      }
    });

// eslint-disable-next-line
    Object.entries(this.lists).forEach(([key, child]) => {
      console.log(key);
      const listCont = this._createDocumentElement("template");
      child.forEach((item) => {
        if (item instanceof Block) {
          listCont.content.append(item.getContent() as HTMLTemplateElement);
        } else {
          listCont.content.append(`${item}`);
        }
      });
      const stub = fragment.content.querySelector(`[data-id="__l_${_tmpId}"]`) as HTMLTemplateElement;
      if (stub) {
        stub.replaceWith(listCont.content);
      }
    });

    this._removeEvents();

    const newElement = fragment.content.firstElementChild as HTMLTemplateElement;
    if (this._element) {
      this._element.replaceWith(newElement);
    }
    this._element = newElement;
    this._addEvents();
  }

  getContent(): HTMLTemplateElement | null {
    return this._element as HTMLTemplateElement;
  }

  show(): void {
    const content = this.getContent();
    if (content) {
      content.style.display = "block";
    }
  }

  hide(): void {
    const content = this.getContent();
    if (content) {
      content.style.display = "none";
    }
  }
}
