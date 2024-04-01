// @ts-nocheck

import Handlebars from 'handlebars';
import './Auth.scss';
import astronautImage from '../../assets/images/astronaut.png';
import logoImage from '../../assets/images/logo.svg';
import Block from '../../tools/Block';
import { PageTitleBlock, FormAuthComponent} from '../../components';

export { default as AuthPage } from './Auth.hbs?raw';

Handlebars.registerHelper('astronautImage', () => astronautImage);

Handlebars.registerHelper('logoImage', () => logoImage);

export class AuthPageComponent extends Block {
  constructor(props) {
    super({
      ...props,
      logoImage,
      pageTitle: new PageTitleBlock({
        title: 'Create your account',
      }),
      formComponent: new FormAuthComponent(),
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
