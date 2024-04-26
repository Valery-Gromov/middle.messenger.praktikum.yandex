import Handlebars from "handlebars";
import Block from "../../tools/Block";
import "../Chat/Chat.scss";
import "./EditProfile.scss";
import goBackImg from "../../assets/images/Back-Arrow.svg";
import addPhotoImg from "../../assets/images/AddPhotoImg.svg";
import chatAvatarImage from "../../assets/images/Ellipse 37.png";
import editImage from "../../assets/images/more_horiz_FILL0_wght300_GRAD0_opsz20 1.svg";
import attachImage from "../../assets/images/attach_file_FILL0_wght300_GRAD0_opsz20 1.svg";
import penImage from "../../assets/images/PenIng.svg";
import sendImage from "../../assets/images/arrow_forward_FILL0_wght300_GRAD0_opsz20 1.svg";
import { EditInputComponent, MessengerComponent } from "../../components";
import { ChatOptionsButton } from "../../components/chatOptionsButton";
import { router } from "../../tools/Router";
import { editForm, EditFormComponent } from "../../components/editFormBlock";
import { getUserController } from "../../controllers/userControllers";
import { store, StoreEvents } from "../../tools/Store";
import isEqual from "../../utils/isEqual";

export { default as EditProfile } from "./EditProfile.hbs?raw";

Handlebars.registerHelper("goBackImg", () => goBackImg);

Handlebars.registerHelper("addPhotoImg", () => addPhotoImg);

type EditProfileComponentProps = {
  goBackButton: ChatOptionsButton;
  editForm: EditFormComponent;
  messenger: MessengerComponent;
};

const handleGoBackButtonClick = () => {
  router.go("/messenger");
};

export class EditProfileComponent extends Block {
  constructor(props: EditProfileComponentProps) {
    super({ ...props })
  }

  render() {
    console.log("EditProfileComponent", this);

    return `<section class='chat-container'>
      <div class='chat-options editProfile'>
    <div class='editProfile__header'>
      {{{ goBackButton }}}
      <h2 class='editProfile__title'>Profile</h2>
    </div>
     {{{ editForm }}}
    </div>
      {{{ messenger }}}
    </section>`;
  }
}

export const editProfile = new EditProfileComponent({
  goBackButton: new ChatOptionsButton({
    buttonImage: goBackImg,
    buttonClass: "options-button",
    alt: "Go back",
    handleClick: handleGoBackButtonClick,
  }),
  editForm: editForm,
  messenger: new MessengerComponent({
    chatAvatarImage,
    editImage,
    attachImage,
    sendImage,
  }),
});

// let userData: any;

// setTimeout(() => {
//   console.log('store.getState()', store.getState());

// }, 1500);
