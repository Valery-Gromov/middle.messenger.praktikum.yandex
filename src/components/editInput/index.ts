import Handlebars from 'handlebars';
import Block from '../../tools/Block';

import penImage from '../../assets/images/PenIng.svg';

export { default as editInput } from './editInput.hbs?raw';

Handlebars.registerHelper('penImage', () => penImage);

type EditInputComponentProps = {
  inputTitle: string;
  inputType: string;
  inputPlaceHolder: string;
  inputName: string;
  penImage: string;
}

export class EditInputComponent extends Block {
  constructor(props: EditInputComponentProps) {
    super({ ...props }); // Передаем props в конструктор родительского класса Block
  }

  // Переопределяем метод рендеринга
  render() {
    // Используем Handlebars для компиляции шаблона кнопки
    return Handlebars.compile(`
    <label class='editForm__input'>
      {{inputTitle}}
      <input type='{{inputType}}' placeholder='{{inputPlaceHolder}}' name='{{inputName}}' />
      <img src='{{penImage}}' alt='edit' />
    </label>
        `)(this.props);
  }
}
