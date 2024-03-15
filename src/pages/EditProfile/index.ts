import Handlebars from 'handlebars';

import '../Chat/Chat.scss';
import './EditProfile.scss';
import goBackImg from '../../assets/images/Back-Arrow.svg';
import addPhotoImg from '../../assets/images/AddPhotoImg.svg';
export { default as EditProfile } from './EditProfile.hbs?raw';

Handlebars.registerHelper('goBackImg', () => {
  return goBackImg;
});

Handlebars.registerHelper('addPhotoImg', () => {
    return addPhotoImg;
  });
