import './pageTitle.scss';
import Handlebars from 'handlebars';
import Block from '../../tools/Block';

export { default as PageTitle } from './pageTitle.hbs?raw';

type PageTitleBlockProps = {
  title: string;
}

export class PageTitleBlock extends Block {

  constructor(props: PageTitleBlockProps) {
    super({ ...props }); // Передаем props в конструктор родительского класса Block
  }

  // Переопределяем метод рендеринга
  render() {
    // Используем Handlebars для компиляции шаблона кнопки
    return Handlebars.compile(`
    <h2 class='authorize-section__form-title'>
      {{{ title }}}
    </h2>
    `)(this.props);
  }
}
