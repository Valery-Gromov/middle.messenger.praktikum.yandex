import Handlebars from 'handlebars';
import Block from '../../tools/Block';
import './confirmButton.scss';

export { default as ConfirmButton } from './confirmButton.hbs?raw';

type ConfirmButtonComponentProps = {
  buttonText: string;
}

export class ConfirmButtonComponent extends Block {

  constructor(props: ConfirmButtonComponentProps) {
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
