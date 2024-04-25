import Handlebars from 'handlebars';
import Block from '../../tools/Block';
import '../Chat/Chat.scss';
import './EditProfile.scss';
import goBackImg from '../../assets/images/Back-Arrow.svg';
import addPhotoImg from '../../assets/images/AddPhotoImg.svg';
import chatAvatarImage from '../../assets/images/Ellipse 37.png';
import editImage from '../../assets/images/more_horiz_FILL0_wght300_GRAD0_opsz20 1.svg';
import attachImage from '../../assets/images/attach_file_FILL0_wght300_GRAD0_opsz20 1.svg';
import penImage from '../../assets/images/PenIng.svg';
import sendImage from '../../assets/images/arrow_forward_FILL0_wght300_GRAD0_opsz20 1.svg';
import { EditInputComponent, MessengerComponent } from '../../components';
import { ChatOptionsButton } from '../../components/chatOptionsButton';
import { router } from '../../tools/Router';
import { EditFormComponent } from '../../components/editFormBlock';
import { getUserController } from '../../controllers/userControllers';

export { default as EditProfile } from './EditProfile.hbs?raw';

Handlebars.registerHelper('goBackImg', () => goBackImg);

Handlebars.registerHelper('addPhotoImg', () => addPhotoImg);

type EditProfileComponentProps = {
  goBackImg: string;
  addPhotoImg: string;
  inputList: EditInputComponent[];
  messenger: MessengerComponent;
};

const handleGoBackButtonClick = () => {
  router.go('/messenger');
};

let userData: {};

getUserController()
  .then((data) => {
    userData = data;
  });

export class EditProfileComponent extends Block {
  constructor(props: EditProfileComponentProps) {
    super({
      ...props,
      goBackButton: new ChatOptionsButton({
        buttonImage: goBackImg,
        buttonClass: 'options-button',
        alt: 'Go back ',
        handleClick: handleGoBackButtonClick,
      }),
      editForm: new EditFormComponent({
        addPhotoImg,
        inputList: [
          new EditInputComponent({
            inputTitle: 'Username (will be visible to users)',
            inputType: 'text',
            inputName: 'display_name',
            inputPlaceHolder: 'Caleb E.',
            penImage,
          }),
          new EditInputComponent({
            inputTitle: 'First Name',
            inputType: 'text',
            inputName: 'first_name',
            inputPlaceHolder: 'Caleb',
            penImage,
          }),
          new EditInputComponent({
            inputTitle: 'Last Name',
            inputType: 'text',
            inputName: 'second_name',
            inputPlaceHolder: 'Evans',
            penImage,
          }),
          new EditInputComponent({
            inputTitle: 'Phone number',
            inputType: 'text',
            inputName: 'phone',
            inputPlaceHolder: '+1 805-999-9700',
            penImage,
          }),
          new EditInputComponent({
            inputTitle: 'Login',
            inputType: 'text',
            inputName: 'login',
            inputPlaceHolder: 'evansc',
            penImage,
          }),
          new EditInputComponent({
            inputTitle: 'Email',
            inputType: 'text',
            inputName: 'email',
            inputPlaceHolder: 'calebevans@gmail.com',
            penImage,
          }),
        ],

      }),
      messenger: new MessengerComponent({
        chatAvatarImage,
        editImage,
        attachImage,
        sendImage,
      }),
    });
  }

  render() {
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
  goBackImg,
  addPhotoImg,
  inputList: [
    new EditInputComponent({
      inputTitle: 'Username (will be visible to users)',
      inputType: 'text',
      inputName: 'display_name',
      inputPlaceHolder: 'Caleb E.',
      penImage,
    }),
    new EditInputComponent({
      inputTitle: 'First Name',
      inputType: 'text',
      inputName: 'first_name',
      inputPlaceHolder: 'Caleb',
      penImage,
    }),
    new EditInputComponent({
      inputTitle: 'Last Name',
      inputType: 'text',
      inputName: 'second_name',
      inputPlaceHolder: 'Evans',
      penImage,
    }),
    new EditInputComponent({
      inputTitle: 'Phone number',
      inputType: 'text',
      inputName: 'phone',
      inputPlaceHolder: '+1 805-999-9700',
      penImage,
    }),
    new EditInputComponent({
      inputTitle: 'Login',
      inputType: 'text',
      inputName: 'login',
      inputPlaceHolder: 'evansc',
      penImage,
    }),
    new EditInputComponent({
      inputTitle: 'Email',
      inputType: 'text',
      inputName: 'email',
      inputPlaceHolder: 'calebevans@gmail.com',
      penImage,
    }),
  ],
  messenger: new MessengerComponent({
    chatAvatarImage,
    editImage,
    attachImage,
    sendImage,
  }),
});
