import Handlebars from 'handlebars';
import Block from '../../tools/Block';
import './chatOptionsButton.scss';

type ChatOptionsButtontProps = {
  buttonImage: string;
  buttonClass: string;
  alt: string;
  handleClick: () => void;
};

export class ChatOptionsButton extends Block {
  constructor(props: ChatOptionsButtontProps) {
    super({
      ...props,
      events: {
        click: () => {
          props.handleClick();
          console.log('click');
        },
      },
      image: props.buttonImage,
      buttonClass: props.buttonClass,
      alt: props.alt,
    });
    // Передаем props в конструктор родительского класса Block
  }

  // Переопределяем метод рендеринга
  render() {
    // Используем Handlebars для компиляции шаблона кнопки
    return Handlebars.compile(`
      <button class='chat-options__options-button {{buttonClass}}'>
        <img src='{{image}}' alt='{{alt}}' />
      </button>
          `)(this.props);
  }
}
