import Handlebars from 'handlebars';
import './Chat.scss';
export { default as Chat } from './Chat.hbs?raw';

import burgerImage from '../../assets/images/menu_FILL0_wght300_GRAD0_opsz201.svg';
import newChatImage from '../../assets/images/edit_square_FILL0_wght300_GRAD0_opsz20 1.svg';
import searchImage from '../../assets/images/mystery_FILL0_wght300_GRAD0_opsz20 1.svg';
import chatAvatarImage from '../../assets/images/Ellipse 37.png';
import editImage from '../../assets/images/more_horiz_FILL0_wght300_GRAD0_opsz20 1.svg';
import attachImage from '../../assets/images/attach_file_FILL0_wght300_GRAD0_opsz20 1.svg';
import sendImage from '../../assets/images/arrow_forward_FILL0_wght300_GRAD0_opsz20 1.svg';





console.log(newChatImage);

Handlebars.registerHelper('burgerImage', () => {
  return burgerImage
});

Handlebars.registerHelper('newChatImage', () => {
  return newChatImage
});

Handlebars.registerHelper('searchImage', () => {
  return searchImage
});

Handlebars.registerHelper('chatAvatarImage', () => {
  return chatAvatarImage
});

Handlebars.registerHelper('editImage', () => {
  return editImage
});

Handlebars.registerHelper('attachImage', () => {
  return attachImage
});

Handlebars.registerHelper('sendImage', () => {
  return sendImage
});


Handlebars.registerHelper('chat-list', () => {
  return [
    {
      photoLink: chatAvatarImage,
      photoAlt: 'Photo',
      contactName: 'Mom',
      messageTime: '18:15',
      messageText: 'Hi, honey! Did you forget to put on the floor',
      unreadedMessagesCount: '1',
    },
    {
      photoLink: chatAvatarImage,
      photoAlt: 'Photo',
      contactName: 'Dad',
      messageTime: '02:45',
      messageText: 'Hi, honey! Did you forget to put on the floor',
      unreadedMessagesCount: '1',
    },
    {
      photoLink: chatAvatarImage,
      photoAlt: 'Photo',
      contactName: 'John Cena',
      messageTime: '21:34',
      messageText: 'How about restlin tonight?',
      unreadedMessagesCount: '1',
    },
    {
      photoLink: chatAvatarImage,
      photoAlt: 'Photo',
      contactName: 'Mom',
      messageTime: '08:30',
      messageText: 'Hi, honey! Did you forget to put on the floor',
      unreadedMessagesCount: '1',
    },
    {
      photoLink: chatAvatarImage,
      photoAlt: 'Photo',
      contactName: 'Yossi',
      messageTime: '18:15',
      messageText: 'I coocked a Humus',
      unreadedMessagesCount: '1',
    },
  ];
});
