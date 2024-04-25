import Block from '../../tools/Block';

export { default as SelectedChatList } from './selectedChatList.hbs?raw';

type SelectedChatListComponentProps = {
  activeSelector: string;
  value: string;
}

export class SelectedChatListComponent extends Block {
  constructor(props: SelectedChatListComponentProps) {
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
