import Handlebars from 'handlebars';
import Block from '../../tools/Block';
import '../Chat/Chat.scss';
import './EditProfile.scss';
import goBackImg from '../../assets/images/Back-Arrow.svg';
import addPhotoImg from '../../assets/images/AddPhotoImg.svg';
import { EditInputComponent, MessengerComponent } from '../../components';

export { default as EditProfile } from './EditProfile.hbs?raw';

Handlebars.registerHelper('goBackImg', () => goBackImg);

Handlebars.registerHelper('addPhotoImg', () => addPhotoImg);

export class EditProfileComponent extends Block {
  constructor(props) {
    super({
      ...props,
      goBackImg,
      addPhotoImg,
      inputList: [
        new EditInputComponent({
          inputTitle: 'Username (will be visible to users)',
          inputType: 'text',
          name: 'display_name',
          inputPlaceHolder: 'Caleb E.',
        }),
        new EditInputComponent({
          inputTitle: 'First Name',
          inputType: 'text',
          name: 'first_name',
          inputPlaceHolder: 'Caleb',
        }),
        new EditInputComponent({
          inputTitle: 'Last Name',
          inputType: 'text',
          name: 'second_name',
          inputPlaceHolder: 'Evans',
        }),
        new EditInputComponent({
          inputTitle: 'Phone number',
          inputType: 'text',
          name: 'phone',
          inputPlaceHolder: '+1 805-999-9700',
        }),
        new EditInputComponent({
          inputTitle: 'Login',
          inputType: 'text',
          name: 'login',
          inputPlaceHolder: 'evansc',
        }),
        new EditInputComponent({
          inputTitle: 'Email',
          inputType: 'text',
          name: 'email',
          inputPlaceHolder: 'calebevans@gmail.com',
        }),
      ],
      messenger: new MessengerComponent({}),
    });
  }

  render() {
    return `<section class='chat-container'>
      <div class='chat-options editProfile'>
    <div class='editProfile__header'>
      <button class='editProfile__button'>
        <img src='{{{ goBackImg }}}' alt='go back' />
      </button>
      <h2 class='editProfile__title'>Profile</h2>
    </div>
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
  </div>
      {{{ messenger }}}
    </section>`;
  }
}
