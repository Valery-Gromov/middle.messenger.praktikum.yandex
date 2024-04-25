import Handlebars from 'handlebars';
import './Auth.scss';
import astronautImage from '../../assets/images/astronaut.png';
import logoImage from '../../assets/images/logo.svg';
import Block from '../../tools/Block';
import {
  PageTitleBlock,
  FormAuthComponent,
  InputBlock,
  TermsCheckboxComponent,
  ConfirmButtonComponent,
} from '../../components';

export { default as AuthPage } from './Auth.hbs?raw';

Handlebars.registerHelper('astronautImage', () => astronautImage);

Handlebars.registerHelper('logoImage', () => logoImage);

interface AuthPageProps {
  logoImage: string;
  pageTitle: PageTitleBlock;
  formComponent: FormAuthComponent;
  astronautImage: string;
}

export class AuthPageComponent extends Block {
  constructor(props: AuthPageProps) {
    super({
      ...props,
      logoImage,
      pageTitle: new PageTitleBlock({
        title: 'Create your account',
      }),
      formComponent: new FormAuthComponent({
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
      }),
      astronautImage,
    });
  }

  render() {
    return `<section class='authorize-section'>
    <img class='authorize-section__logo' alt='Logo' src='{{{ logoImage }}}' />
    <div class='authorize-section__form-container'>
      {{{ pageTitle }}}
      <p class='authorize-section__form-decription'>Start chat with your friends today</p>
      {{{ formComponent }}}
    </div>
    <div class='authorize-section__image-container'>
      <img src='{{{ astronautImage }}}' alt='astronaut' />
    </div>
  </section>`;
  }
}

export const authPage = new AuthPageComponent({
  logoImage,
  pageTitle: new PageTitleBlock({
    title: 'Create your account',
  }),
  formComponent: new FormAuthComponent({
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
  }),
  astronautImage,
});
