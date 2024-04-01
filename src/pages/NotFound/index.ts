import Handlebars from "handlebars";
import { ConfirmButtonComponent, PageTitleBlock } from "../../components";
import logoImage from "../../assets/images/logo.svg";
import Block from "../../tools/Block";
import "../Auth/Auth.scss";
import "./NotFound.scss";

export { default as NotFound } from "./NotFound.hbs?raw";

Handlebars.registerHelper("logoImage", () => logoImage);

type NotFoundComponentProps = {
  logoImage: string;
  pageTitle: PageTitleBlock;
  buttonText: ConfirmButtonComponent;
}

export class NotFoundComponent extends Block {

  constructor(props: NotFoundComponentProps) {
    super({
      ...props,
      logoImage,
      pageTitle: new PageTitleBlock({
        title: "Ooops....Page not found",
      }),
      buttonText: new ConfirmButtonComponent({
        buttonText: "Back Home",
      }),
    }); // Передаем props в конструктор родительского класса Block
  }

  // Переопределяем метод рендеринга
  render() {
    // Используем Handlebars для компиляции шаблона кнопки
    return `
        <section class='authorize-section notFound'>
        <img class='authorize-section__logo' src='{{{ logoImage }}}' />
        <div class='authorize-section__form-container notFound__container'>
          {{{ pageTitle }}}
          {{{ buttonText }}}
        </div>
        <h2 class="notFound__title">
            404
        </h2>
      </section>
        `;
  }
}
