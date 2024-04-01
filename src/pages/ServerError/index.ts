import Handlebars from "handlebars";
import { ConfirmButtonComponent, PageTitleBlock } from "../../components";
import logoImage from "../../assets/images/logo.svg";
import Block from "../../tools/Block";
import "../Auth/Auth.scss";
import "../NotFound/NotFound.scss";

Handlebars.registerHelper("logoImage", () => logoImage);

type ServerErrorComponentProps = {
  logoImage: string;
  pageTitle: PageTitleBlock;
  buttonText: ConfirmButtonComponent;
}

export class ServerErrorComponent extends Block {
  
  constructor(props: ServerErrorComponentProps) {
    super({
      ...props,
      logoImage,
      pageTitle: new PageTitleBlock({
        title: "Ooops....Server Error",
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
