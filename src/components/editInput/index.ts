import Handlebars from 'handlebars';
export { default as editInput } from './editInput.hbs?raw';

import penImage from '../../assets/images/PenIng.svg';

Handlebars.registerHelper('penImage', () => {
  return penImage;
});
