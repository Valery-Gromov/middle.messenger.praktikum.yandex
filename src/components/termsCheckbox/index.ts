import Handlebars from 'handlebars';
import Block from '../../tools/Block';
import './termsCheckbox.scss';

export { default as termsCheckbox } from './termsCheckbox.hbs?raw';

type TermsCheckboxComponentProps = {
  text: string;
  linkText: string;
};

export class TermsCheckboxComponent extends Block {
  constructor(props: TermsCheckboxComponentProps) {
    super({ ...props }); // Передаем props в конструктор родительского класса Block
  }

  // Переопределяем метод рендеринга
  render() {
    // Используем Handlebars для компиляции шаблона кнопки
    return Handlebars.compile(`
        <label class="form__checkbox-container">
            <input type="checkbox" name="" id="" />
            {{ text }}
            <a>{{ linkText }} </a>
        </label>
        `)(this.props);
  }
}
