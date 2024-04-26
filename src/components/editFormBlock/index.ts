import Block from "../../tools/Block";
import Handlebars from "handlebars";
import "./editFormBlock.scss";
import { getUserController } from "../../controllers/userControllers";
import { getFormData } from "../../utils/getFormData";
import { EditInputComponent } from "../editInput";
import penImage from "../../assets/images/PenIng.svg";
import addPhotoImg from "../../assets/images/AddPhotoImg.svg";
import { store, StoreEvents } from "../../tools/Store";

// avatar
// :
// null
// display_name
// :
// null
// email
// :
// "Asdfcs12341@asd.ru"
// first_name
// :
// "ADaf"
// id
// :
// 267
// login
// :
// "Asdfcs12341"
// phone
// :
// "890317612321"
// second_name
// :
// "A"

interface EditFormComponentProps {
  addPhotoImg: string;
  userData: {};
  inputList: EditInputComponent[];
}

const handleEditFormData = (e: Event) => {
  e.preventDefault();
};

export class EditFormComponent extends Block {
  constructor(props: EditFormComponentProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => {
          handleEditFormData(e);
          console.log("form click");
        },
      },
    });
    store.on(StoreEvents.Updated, () => {
      // вызываем обновление компонента, передав данные из хранилища
      this.setProps(store.getState());
    });

  }

  componentDidUpdate(
    oldProps: EditFormComponentProps,
    newProps: EditFormComponentProps
  ) {

    // Проверяем, изменился ли список inputList
    if (oldProps !== newProps) {
      console.log("component updated");
      console.log(oldProps, newProps);
    }
    return true;
  }

  // Переопределяем метод рендеринга
  render() {
    console.log("EditFormComponent", this.props.userData);
    return `
      <form class='editProfile__form editForm' action=''>
        <div class='editForm__addPhotoElement'>
          <button>
            <img src='{{{ addPhotoImg }}}' alt='Add photo' />
            <span>Add a photo</span>
          </button>
        </div>
        <div class='editForm__container'>
          {{{ inputList }}}
        </div>
      </form>
    `;
  }
}

const userData = store.getState();

export const editForm = new EditFormComponent({
  addPhotoImg: addPhotoImg,
  userData: {},
  inputList: [
    new EditInputComponent({
      inputTitle: "Username (will be visible to users)",
      inputType: "text",
      inputName: "display_name",
      inputPlaceHolder: "",
      // inputPlaceHolder: "Caleb E.",
      penImage,
      userData: userData,
    }),
    new EditInputComponent({
      inputTitle: "First Name",
      inputType: "text",
      inputName: "first_name",
      inputPlaceHolder: "",
      // inputPlaceHolder: "Caleb",
      penImage,
      userData: userData,
    }),
    new EditInputComponent({
      inputTitle: "Last Name",
      inputType: "text",
      inputName: "second_name",
      inputPlaceHolder: "",
      // inputPlaceHolder: "Evans",
      penImage,
      userData: userData,

    }),
    new EditInputComponent({
      inputTitle: "Phone number",
      inputType: "text",
      inputName: "phone",
      inputPlaceHolder: "",
      // inputPlaceHolder: "+1 805-999-9700",
      penImage,
      userData: userData,

    }),
    new EditInputComponent({
      inputTitle: "Login",
      inputType: "text",
      inputName: "login",
      inputPlaceHolder: "",
      // inputPlaceHolder: "evansc",
      penImage,
      userData: userData,

    }),
    new EditInputComponent({
      inputTitle: "Email",
      inputType: "text",
      inputName: "email",
      inputPlaceHolder: "",
      // inputPlaceHolder: "calebevans@gmail.com",
      userData: userData,
      penImage,
    }),
  ],
});

setTimeout( () => {
  getUserController();
}, 1500)
