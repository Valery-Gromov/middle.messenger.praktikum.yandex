import Handlebars from 'handlebars';
import Block from '../../tools/Block';

export { default as ChatListItem } from './chatListItem.hbs?raw';

type ChatListItemComponentProps = {
  photoLink: string;
  photoAlt: string;
  contactName: string;
  messageTime: string;
  messageText: string;
  unreadedMessagesCount: number;
}

export class ChatListItemComponent extends Block {

  constructor(props: ChatListItemComponentProps) {
    super({ ...props }); // Передаем props в конструктор родительского класса Block
  }

  // Переопределяем метод рендеринга
  render() {
    // Используем Handlebars для компиляции шаблона кнопки
    return Handlebars.compile(`
      <li class='chat-list-item'>
      <div class='chat-list-item__imgbx'>
        <img src='{{photoLink}}' alt={{photoAlt}} />
      </div>
      <div class='chat-list-item__text-container'>
        <div class='chat-list-item__top-content'>
          <h3 class='chat-list-item__contact-name'>{{contactName}}</h3>
          <span class='chat-list-item__time'>{{messageTime}}</span>
        </div>
        <div class='chat-list-item__bottom-content'>
          <p class='chat-list-item__text'>{{messageText}}</p>
          <span class='chat-list-item__notification'>{{unreadedMessagesCount}}</span>
        </div>
      </div>
    </li>
          `)(this.props);
  }
}
