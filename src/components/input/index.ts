import './input.scss';
import Handlebars from 'handlebars';
import Block from '../../tools/Block';
import { handleValidation } from '../../utils/handleValidation';

export { default as Input } from './input.hbs?raw';

interface InputProps {
  class: string;
  type: string;
  placeholder: string;
  name: string;
  id: string;
}


export class InputBlock extends Block {

  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        blur: (e: Event) => {
          console.log('blur', e.target);
          handleValidation(e);
        },
      },
    }); // Передаем props в конструктор родительского класса Block
  }

  // Переопределяем метод рендеринга
  render() {
    // Используем Handlebars для компиляции шаблона кнопки
    return Handlebars.compile(`
      <input
        class='form__text-input {{ class }}'
        type='{{ type }}'
        placeholder='{{ placeholder }}'
        name='{{ name }}'
        id='{{ id }}'
      />
      `)(this.props);
  }
}
