import Handlebars from 'handlebars';
import Block from '../../tools/Block';
import './confirmButton.scss';

export { default as ConfirmButton } from './confirmButton.hbs?raw';

export class ConfirmButtonComponent extends Block {
  props: { [key: string]: any } | undefined; // Определение свойства props

  constructor(props: { [key: string]: any }) {
    super({
      ...props,
    }); // Передаем props в конструктор родительского класса Block
  }

  // Переопределяем метод рендеринга
  render() {
    // Используем Handlebars для компиляции шаблона кнопки
    return Handlebars.compile(`
      <button class='form__button' type="submit" >{{buttonText}}</button>
          `)(this.props);
  }
}
