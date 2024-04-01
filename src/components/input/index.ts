import './input.scss';
import Handlebars from 'handlebars';
import Block from '../../tools/Block';

export { default as Input } from './input.hbs?raw';

const handleValidation = (e) => {
  const { value } = e.target;
  const nameReg = /^(?:[A-ZА-ЯЁ][a-zа-яё]*)(?:-[A-ZА-ЯЁ][a-zа-яё]*)*$/;
  const loginReg = /^(?![_\d-]*\d[_\d-]*$)[a-zA-Z0-9_-]{3,20}$/;
  const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passReg = /^(?=.*[A-Z])(?=.*\d).{8,40}$/;
  const phoneReg = /^\+?\d{10,15}$/;

  if (e.target.name === 'first_name' || e.target.name === 'second_name') {
    if (!nameReg.test(value)) {
      // Если значение не соответствует ожидаемому формату, отображаем сообщение об ошибке
      console.log('Validation Error');
    } else {
      // Если значение соответствует ожидаемому формату, скрываем сообщение об ошибке (если оно было отображено ранее)
      console.log('Validation success');
    }
  }

  if (e.target.name === 'login') {
    if (!loginReg.test(value)) {
      // Если значение не соответствует ожидаемому формату, отображаем сообщение об ошибке
      console.log('Validation Error');
    } else {
      // Если значение соответствует ожидаемому формату, скрываем сообщение об ошибке (если оно было отображено ранее)
      console.log('Validation success');
    }
  }

  if (e.target.type === 'email') {
    if (!emailReg.test(value)) {
      // Если значение не соответствует ожидаемому формату, отображаем сообщение об ошибке
      console.log('Validation Error');
    } else {
      // Если значение соответствует ожидаемому формату, скрываем сообщение об ошибке (если оно было отображено ранее)
      console.log('Validation success');
    }
  }

  if (e.target.type === 'password') {
    if (!passReg.test(value)) {
      // Если значение не соответствует ожидаемому формату, отображаем сообщение об ошибке
      console.log('Validation Error');
    } else {
      // Если значение соответствует ожидаемому формату, скрываем сообщение об ошибке (если оно было отображено ранее)
      console.log('Validation success');
    }
  }

  if (e.target.name === 'phone') {
    if (!phoneReg.test(value)) {
      // Если значение не соответствует ожидаемому формату, отображаем сообщение об ошибке
      console.log('Validation Error');
    } else {
      // Если значение соответствует ожидаемому формату, скрываем сообщение об ошибке (если оно было отображено ранее)
      console.log('Validation success');
    }
  }

  if (e.target.name === 'message') {
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
        click: () => {
          console.log('click');
        },
        change: (e) => {
          console.log('change', e.target.value);
          // props.onChange(e.target.value)
        },
        blur: (e) => {
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
