import './selectedChatList.scss';
import Block from '../../tools/Block';

export { default as SelectedChatList } from './selectedChatList.hbs?raw';

export class SelectedChatListComponent extends Block {
  props: { [key: string]: any } | undefined; // Определение свойства props

  constructor(props: { [key: string]: any }) {
    super({ ...props }); // Передаем props в конструктор родительского класса Block
  }

  // Переопределяем метод рендеринга
  render() {
    console.log('listItem', this.props);

    // Используем Handlebars для компиляции шаблона кнопки
    return `
      <li>
        <button class='chat-options__group-selector {{{ activeSelector }}}'>
            {{{ value }}}
        </button>
      </li>
    `;
  }
}
