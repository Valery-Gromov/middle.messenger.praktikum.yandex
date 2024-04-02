import './formBlock.scss';
import Block from '../../tools/Block';
import { InputBlock } from '../input';
import { TermsCheckboxComponent } from '../termsCheckbox';
import { ConfirmButtonComponent } from '../confirmButton';

// interface InputProps {
//   class: string;
//   type: string;
//   placeholder: string;
//   name: string;
//   id: string;
// }

interface FormAuthProps {
  list: InputBlock[];
  checkbox: TermsCheckboxComponent;
  button: ConfirmButtonComponent;
}

interface FormLoginProps {
  lists: InputBlock[];
  button: ConfirmButtonComponent;
}

const handleFormData = (e: Event) => {
  e.preventDefault(); // Отмена отправки формы
  // Получение всех полей формы

  const formData = new FormData(e.target as HTMLFormElement);

  // Создание объекта для сбора данных
  const formDataObject: Record<string, FormDataEntryValue> = {};

  // Проход по каждому полю формы и добавление его в объект
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  // Вывод объекта в консоль
  console.log('formDataObject', formDataObject);
};

export class FormAuthComponent extends Block {
  constructor(props: FormAuthProps) {
    super({
      ...props,
      events: {
        submit: (e: Event) => {
          handleFormData(e);
          console.log('submit');
        },
      },
      list: [
        new InputBlock({
          class: 'form__email',
          type: 'email',
          placeholder: 'Email',
          name: 'email',
          id: 'reg-email',
        }),
        new InputBlock({
          class: 'form__login',
          type: 'text',
          placeholder: 'Login',
          name: 'email',
          id: 'reg-login',
        }),
        new InputBlock({
          class: 'form__password',
          type: 'password',
          placeholder: 'Password',
          name: 'password',
          id: 'reg-password',
        }),
        new InputBlock({
          class: 'form__password',
          type: 'password',
          placeholder: 'Confirm Password',
          name: 'confirm_password',
          id: 'reg-confirm-password',
        }),
        new InputBlock({
          class: 'form__name',
          type: 'text',
          placeholder: 'First Name',
          name: 'first_name',
          id: 'reg-first-name',
        }),
        new InputBlock({
          class: 'form__name',
          type: 'text',
          placeholder: 'Last Name',
          name: 'second_name',
          id: 'reg-last-name',
        }),
      ],
      checkbox: new TermsCheckboxComponent({
        text: 'I accept',
        linkText: 'Terms of Service',
      }),
      button: new ConfirmButtonComponent({
        buttonText: 'Start',
      }),
    });
  }

  // Переопределяем метод рендеринга
  render() {
    return `
      <form class="authorize-section__form form">
       {{{ list }}}
       {{{ checkbox }}}
       {{{ button }}}
      </form>
    `;
  }
}

export class FormLoginComponent extends Block {
  constructor(props: FormLoginProps) {
    super({
      ...props,
      events: {
        submit: (e: Event) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          console.log('submit');
          handleFormData(e);
        },
        click: () => {
          console.log('form click');
        },
      },
      lists: [
        new InputBlock({
          class: 'form__login',
          type: 'text',
          placeholder: 'Login',
          name: 'login',
          id: 'login-login',
        }),
        new InputBlock({
          class: 'form__password',
          type: 'password',
          placeholder: 'Password',
          name: 'password',
          id: 'login-password',
        }),
      ],
      button: new ConfirmButtonComponent({
        buttonText: 'Start',
      }),
    });
  }

  // Переопределяем метод рендеринга
  render() {
    return `
      <form class="authorize-section__form form form-login">
       {{{ lists }}}
       {{{ button }}}
      </form>
    `;
  }
}
