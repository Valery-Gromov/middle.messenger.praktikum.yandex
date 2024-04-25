import Handlebars from 'handlebars';
import '../Auth/Auth.scss';
import astronautImage from '../../assets/images/astronaut.png';
import logoImage from '../../assets/images/logo.svg';
import {
  ConfirmButtonComponent,
  FormLoginComponent,
  InputBlock,
  PageTitleBlock,
} from '../../components';
import Block from '../../tools/Block';

export { default as Login } from './Login.hbs?raw';

Handlebars.registerHelper('astronautImage', () => astronautImage);

Handlebars.registerHelper('logoImage', () => logoImage);

interface LoginPageProps {
  logoImage: string;
  pageTitle: PageTitleBlock;
  formComponent: FormLoginComponent;
  astronautImage: string;
}

export class LoginPageComponent extends Block {
  constructor(props: LoginPageProps) {
    super({
      ...props,
      logoImage,
      pageTitle: new PageTitleBlock({
        title: 'Create your account',
      }),
      formComponent: new FormLoginComponent({
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
      }),
      astronautImage,
    });
  }

  render() {
    return `<section class='authorize-section'>
    <img class='authorize-section__logo' src='{{{ logoImage }}}' />
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

export const loginPage = new LoginPageComponent({
  logoImage,
  pageTitle: new PageTitleBlock({
    title: 'Create your account',
  }),
  formComponent: new FormLoginComponent({
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
  }),
  astronautImage,
});

console.log(loginPage.show());
