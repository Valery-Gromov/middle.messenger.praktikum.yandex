import Block from '../../tools/Block';
import { InputBlock } from '../input';
import './editFormBlock.scss';
import { getUserController } from '../../controllers/userControllers';
import { getFormData } from '../../utils/getFormData';
import { EditInputComponent } from '../editInput';
import penImage from '../../assets/images/PenIng.svg';
import addPhotoImg from '../../assets/images/AddPhotoImg.svg';

interface EditFormComponentnProps {
  addPhotoImg: string;
  inputList: InputBlock[];
}

const handleEditFormData = (e: Event) => {
  e.preventDefault();
  // const data = getFormData(e);
  // console.log("formDataObject", data);

  console.log(getUserController());
  // getUserController();
};

export class EditFormComponent extends Block {
  constructor(props: EditFormComponentnProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => {
          handleEditFormData(e);
          console.log('form click');
        },
      },
      addPhotoImg,
      userData: getUserController(),
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
    });
  }

  // Переопределяем метод рендеринга
  render() {
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
