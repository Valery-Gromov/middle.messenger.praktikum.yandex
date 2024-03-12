import Handlebars from 'handlebars';
import './Auth.scss';
export { default as AuthPage } from './Auth.hbs?raw';
import astronautImage from '../../assets/images/astronaut.png';
import logoImage from '../../assets/images/logo.svg';

Handlebars.registerHelper('astronautImage', () => {
  return astronautImage;
});

Handlebars.registerHelper('logoImage', () => {
    return logoImage;
  });