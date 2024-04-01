import './pageTitle.scss';
import Handlebars from 'handlebars';
import Block from '../../tools/Block';

export { default as PageTitle } from './pageTitle.hbs?raw';

export class PageTitleBlock extends Block {
  props: { [key: string]: any } | undefined; // Определение свойства props

  constructor(props: { [key: string]: any }) {
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
