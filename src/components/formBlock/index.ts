import './formBlock.scss';
import Block from '../../tools/Block';
import { InputBlock } from '../input';
import { TermsCheckboxComponent } from '../termsCheckbox';
import { ConfirmButtonComponent } from '../confirmButton';
import { createUserController, getUserController, loginUserController } from '../../controllers/userControllers';
import { getFormData } from '../../utils/getFormData';

interface FormAuthProps {
  list: InputBlock[];
  checkbox: TermsCheckboxComponent;
  button: ConfirmButtonComponent;
}

interface FormLoginProps {
  lists: InputBlock[];
  button: ConfirmButtonComponent;
}

const handleRegisterFormData = (e: Event) => {
  e.preventDefault();

  const data = getFormData(e);
  console.log('formDataObject', data);

  createUserController(data);
  getUserController();
};

const handleLoginFormData = (e: Event) => {
  e.preventDefault();
  const data = getFormData(e);
  console.log('formDataObject', data);

  loginUserController(data)
    .then(() => {

    });

  getUserController();
};

export class FormAuthComponent extends Block {
  constructor(props: FormAuthProps) {
    super({
      ...props,
      events: {
        submit: (e: Event) => {
          handleRegisterFormData(e);
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
          name: 'login',
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
          type: 'tel',
          placeholder: 'Phone',
          name: 'phone',
          id: 'reg-phone',
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
          console.log('submit');
          handleLoginFormData(e);
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
