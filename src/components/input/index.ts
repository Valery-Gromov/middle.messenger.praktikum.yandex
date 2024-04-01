import './input.scss';
import Handlebars from 'handlebars';
import Block from '../../tools/Block';

export { default as Input } from './input.hbs?raw';

const handleValidation = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const { value, name, type } = target;

  const nameReg = /^(?:[A-ZА-ЯЁ][a-zа-яё]*)(?:-[A-ZА-ЯЁ][a-zа-яё]*)*$/;
  const loginReg = /^(?![_\d-]*\d[_\d-]*$)[a-zA-Z0-9_-]{3,20}$/;
  const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passReg = /^(?=.*[A-Z])(?=.*\d).{8,40}$/;
  const phoneReg = /^\+?\d{10,15}$/;

  if (name === 'first_name' || name === 'second_name') {
    if (!nameReg.test(value)) {
      console.log('Validation Error');
    } else {
      console.log('Validation success');
    }
  }

  if (name === 'login') {
    if (!loginReg.test(value)) {
      console.log('Validation Error');
    } else {
      console.log('Validation success');
    }
  }

  if (type === 'email') {
    if (!emailReg.test(value)) {
      console.log('Validation Error');
    } else {
      console.log('Validation success');
    }
  }

  if (type === 'password') {
    if (!passReg.test(value)) {
      console.log('Validation Error');
    } else {
      console.log('Validation success');
    }
  }

  if (name === 'phone') {
    if (!phoneReg.test(value)) {
      console.log('Validation Error');
    } else {
      console.log('Validation success');
    }
  }

  if (name === 'message') {
    if (value.trim() === '') {
      console.log('Validation Error');
    } else {
      console.log('Validation success');
    }
  }
};


export class InputBlock extends Block {
  props: { [key: string]: any } | undefined; // Определение свойства props

  constructor(props: { [key: string]: any }) {
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
