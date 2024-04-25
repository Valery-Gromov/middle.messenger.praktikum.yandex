// @ts-nocheck
import isEqual from '../utils/isEqual';

export default class Route {
  constructor(pathname: string, blockClass: any, props: object) {
    this._pathname = pathname;
    this._blockClass = blockClass;
    this._block = null;
    this._props = props;
  }

  navigate(pathname) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    console.log('this._blockClass', this._blockClass);
    console.log('this._props', this._props);

    if (!this._block) {
      this._block = this._blockClass;
    }

    this._props.rootQuery.append(this._block.getContent());
    this._block.show();
  }
}
