import Handlebars from "handlebars";
import Block from "../../tools/Block";

import penImage from "../../assets/images/PenIng.svg";
import { store, StoreEvents } from "../../tools/Store";

export { default as editInput } from "./editInput.hbs?raw";

Handlebars.registerHelper("penImage", () => penImage);

type EditInputComponentProps = {
  inputTitle: string;
  inputType: string;
  inputPlaceHolder: string;
  inputName: string;
  penImage: string;
  userData: any;
};

export class EditInputComponent extends Block {
  constructor(props: EditInputComponentProps) {
    super({
      ...props,
      inputPlaceHolder: props.userData[props.inputName] || '',
      events: {
        click: () => {
          console.log("click on input");
          console.log(store);

        },
        onchange: (e: Event) => {
          console.log(e.target);
        }
      },
    });
  }

  handleUpdateData() {
    console.log(this);
  }

  componentDidUpdate(
    oldProps: EditInputComponentProps,
    newProps: EditInputComponentProps
  ) {
    if (oldProps !== newProps) {
      console.log("EditInputComponentOldProps", oldProps);
      console.log("EditInputComponentNewProps", newProps);

      const { inputName } = this.props;
      const inputValue = newProps.userData[inputName];
      this.setProps({ inputPlaceHolder: inputValue });
    }

    return true;
  }

  render() {
    console.log(this);

    return `
      <label class='editForm__input'>
        ${this.props.inputTitle}
        <input type='${this.props.inputType}' value='${this.props.inputPlaceHolder}' name='${this.props.inputName}' />
        <img src='${this.props.penImage}' alt='edit' />
      </label>
    `;
  }
}
