import Handlebars from 'handlebars';
import Block from '../../tools/Block';
import '../../pages/Chat/Chat.scss';

import chatAvatarImage from '../../assets/images/Ellipse 37.png';
import editImage from '../../assets/images/more_horiz_FILL0_wght300_GRAD0_opsz20 1.svg';
import attachImage from '../../assets/images/attach_file_FILL0_wght300_GRAD0_opsz20 1.svg';
import sendImage from '../../assets/images/arrow_forward_FILL0_wght300_GRAD0_opsz20 1.svg';

Handlebars.registerHelper('chatAvatarImage', () => chatAvatarImage);

Handlebars.registerHelper('editImage', () => editImage);

Handlebars.registerHelper('attachImage', () => attachImage);

Handlebars.registerHelper('sendImage', () => sendImage);

export class MessengerComponent extends Block {
  constructor(props) {
    super({
      ...props,
      chatAvatarImage,
      editImage,
      attachImage,
      sendImage,
    });
  }

  render() {
    return `
    <div class='chat-messenger'>
    <div class='chat-messenger__header header'>
      <div class='chat-messenger__selected-chat-info'>
        <div class='chat-messenger__selected-chat-photo'>
          <img src='{{{ chatAvatarImage }}}' alt='Photo' />
        </div>
        <h3 class='chat-messenger__selected-chat-name'>
          Mom
        </h3>
      </div>
      <ul class='chat-messenger__options-container'>
        <li>
          <button class='chat-messenger__options-button'>
            <img src='{{{ searchImage }}}' alt='Search' />
          </button>
        </li>
        <li>
          <button class='chat-messenger__options-button'>
            <img src='{{{ editImage }}}' alt='Edit' />
          </button>
        </li>
      </ul>
    </div>
    <div class='chat-messenger__messages-window'>
      <div class='chat-messenger__message-container'>
        <div class='message'>
          <p class='message__text'>Hi</p>
          <span class='message__time'>4:30 PM</span>
        </div>
      </div>
      <div class='chat-messenger__message-container chat-messenger__message-container_companion'>
        <div class='message message_companion'>
          <p class='message__text message__text_companion'>Hi</p>
          <span class='message__time message__time_companion'>4:30 PM</span>
        </div>
      </div>
    </div>
    <div class='chat-messenger__input-area'>
      <div class='chat-messenger__input-container'>
        <div class='chat-messenger__input'>
          <input type='text' placeholder='Enter your message' />
          <img src='{{{ attachImage }}}' alt='attach' />
        </div>
        <button class='chat-messenger__send-message-button'>
          <img src='{{{ sendImage }}}' alt='send' />
        </button>
      </div>
    </div>
  </div>
`;
  }
}
