import Handlebars from 'handlebars';
import './editInput.scss';
export { default as editInput } from './editInput.hbs?raw';

import penImage from '../../assets/images/PenIng.svg';



Handlebars.registerHelper('penImage', () => {
    return penImage;
  });
  