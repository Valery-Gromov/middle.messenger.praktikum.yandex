import Handlebars from 'handlebars';

import '../Auth/Auth.scss';
export { default as Login } from './Login.hbs?raw';
import astronautImage from '../../assets/images/astronaut.png';
import logoImage from '../../assets/images/logo.svg';

Handlebars.registerHelper('astronautImage', () => {
    return astronautImage;
  });
  
  Handlebars.registerHelper('logoImage', () => {
      return logoImage;
    });
    