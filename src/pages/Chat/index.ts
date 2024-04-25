import Handlebars from 'handlebars';
import Block from '../../tools/Block';
import './Chat.scss';

import burgerImage from '../../assets/images/menu_FILL0_wght300_GRAD0_opsz201.svg';
import newChatImage from '../../assets/images/edit_square_FILL0_wght300_GRAD0_opsz20 1.svg';
import searchImage from '../../assets/images/mystery_FILL0_wght300_GRAD0_opsz20 1.svg';
import chatAvatarImage from '../../assets/images/Ellipse 37.png';
import editImage from '../../assets/images/more_horiz_FILL0_wght300_GRAD0_opsz20 1.svg';
import attachImage from '../../assets/images/attach_file_FILL0_wght300_GRAD0_opsz20 1.svg';
import sendImage from '../../assets/images/arrow_forward_FILL0_wght300_GRAD0_opsz20 1.svg';
import {
  ChatListItemComponent,
  MessengerComponent,
  SelectedChatListComponent,
} from '../../components';
import { ChatOptionsButton } from '../../components/chatOptionsButton';
import { router } from '../../tools/Router';

export { default as Chat } from './Chat.hbs?raw';

Handlebars.registerHelper('burgerImage', () => burgerImage);

Handlebars.registerHelper('newChatImage', () => newChatImage);

Handlebars.registerHelper('searchImage', () => searchImage);

Handlebars.registerHelper('chatAvatarImage', () => chatAvatarImage);

Handlebars.registerHelper('editImage', () => editImage);

Handlebars.registerHelper('attachImage', () => attachImage);

Handlebars.registerHelper('sendImage', () => sendImage);

Handlebars.registerHelper('chat-list', () => [
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
]);

type ChatComponentProps = {
  burgerImage: string;
  newChatImage: string;
  searchImage: string;
  chatOptionsItem: SelectedChatListComponent[];
  chatListItem: ChatListItemComponent[];
  messenger: MessengerComponent;
};

const handleOptionsButtonClick = () => {
  router.go('/settings');
};

export class ChatComponent extends Block {
  constructor(props: ChatComponentProps) {
    super({
      ...props,
      optionsButton: new ChatOptionsButton({
        buttonImage: burgerImage,
        buttonClass: 'options-button',
        alt: 'Menu button',
        handleClick: handleOptionsButtonClick,
      }),
      newChatImage,
      searchImage,
      chatOptionsItem: [
        new SelectedChatListComponent({
          value: 'All chats',
          activeSelector: 'active-selector',
        }),
        new SelectedChatListComponent({
          value: 'Private',
          activeSelector: '',
        }),
        new SelectedChatListComponent({
          value: 'Group',
          activeSelector: '',
        }),
      ],
      chatListItem: [
        new ChatListItemComponent({
          photoLink: chatAvatarImage,
          photoAlt: 'Photo',
          contactName: 'Mom',
          messageTime: '18:15',
          messageText: 'Hi, honey! Did you forget to put on the floor',
          unreadedMessagesCount: '1',
        }),
        new ChatListItemComponent({
          photoLink: chatAvatarImage,
          photoAlt: 'Photo',
          contactName: 'Mom',
          messageTime: '18:15',
          messageText: 'Hi, honey! Did you forget to put on the floor',
          unreadedMessagesCount: '1',
        }),
        new ChatListItemComponent({
          photoLink: chatAvatarImage,
          photoAlt: 'Photo',
          contactName: 'Mom',
          messageTime: '18:15',
          messageText: 'Hi, honey! Did you forget to put on the floor',
          unreadedMessagesCount: '1',
        }),
        new ChatListItemComponent({
          photoLink: chatAvatarImage,
          photoAlt: 'Photo',
          contactName: 'Mom',
          messageTime: '18:15',
          messageText: 'Hi, honey! Did you forget to put on the floor',
          unreadedMessagesCount: '1',
        }),
      ],
      messenger: new MessengerComponent({
        chatAvatarImage,
        editImage,
        attachImage,
        sendImage,
      }),
    });
  }

  render() {
    return `<section class='chat-container'>
    <div class='chat-options'>
      <div class='chat-container__header header'>
        {{{ optionsButton }}}
        <h3 class='chat-options__options-title'>Messages</h3>
        <div class='chat-options__create-chat-button'>
          <img src='{{{ newChatImage }}}' alt='open new chat' />
        </div>
      </div>
      <div class='chat-options__search'>
        <div class='chat-options__search-container'>
          <input class='chat-options__search-input' type='text' placeholder='Search' />
          <img src='{{{ searchImage }}}' alt='Search' />
        </div>
      </div>
      <ul class='chat-options__group'>
          {{{ chatOptionsItem }}}
      </ul>
      <ul class='chat-list'>
          {{{ chatListItem }}}
      </ul>
    </div>
    {{{ messenger }}}
  </section>`;
  }
}

export const chatPage = new ChatComponent({
  burgerImage,
  newChatImage,
  searchImage,
  chatOptionsItem: [
    new SelectedChatListComponent({
      value: 'All chats',
      activeSelector: 'active-selector',
    }),
    new SelectedChatListComponent({
      value: 'Private',
      activeSelector: '',
    }),
    new SelectedChatListComponent({
      value: 'Group',
      activeSelector: '',
    }),
  ],
  chatListItem: [
    new ChatListItemComponent({
      photoLink: chatAvatarImage,
      photoAlt: 'Photo',
      contactName: 'Mom',
      messageTime: '18:15',
      messageText: 'Hi, honey! Did you forget to put on the floor',
      unreadedMessagesCount: '1',
    }),
    new ChatListItemComponent({
      photoLink: chatAvatarImage,
      photoAlt: 'Photo',
      contactName: 'Mom',
      messageTime: '18:15',
      messageText: 'Hi, honey! Did you forget to put on the floor',
      unreadedMessagesCount: '1',
    }),
    new ChatListItemComponent({
      photoLink: chatAvatarImage,
      photoAlt: 'Photo',
      contactName: 'Mom',
      messageTime: '18:15',
      messageText: 'Hi, honey! Did you forget to put on the floor',
      unreadedMessagesCount: '1',
    }),
    new ChatListItemComponent({
      photoLink: chatAvatarImage,
      photoAlt: 'Photo',
      contactName: 'Mom',
      messageTime: '18:15',
      messageText: 'Hi, honey! Did you forget to put on the floor',
      unreadedMessagesCount: '1',
    }),
  ],
  messenger: new MessengerComponent({
    chatAvatarImage,
    editImage,
    attachImage,
    sendImage,
  }),
});
