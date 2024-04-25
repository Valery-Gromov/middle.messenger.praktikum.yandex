import { userApi } from '../api/UserApi';
import { RequestOptions } from '../tools/HTTPTransport';
import { router } from '../tools/Router';

// email
// :
// "Asdfcs12341@asd.ru"
// first_name
// :
// "ADaf"
// login
// :
// "Asdfcs12341"
// password
// :
// "aSd13dAD"
// phone
// :
// "890317612321"
// second_name
// :
// "Aadasf"

type FormDataObjectType = Record<string, FormDataEntryValue>;

export const createUserController = (formDataObject: FormDataObjectType) => {
  const requestOptions = {
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include', // Нужно подставлять куки
    mode: 'cors', // Работаем с CORS
    method: 'POST',
    data: JSON.stringify(formDataObject),
  };

  console.log(formDataObject);

  userApi
    .createUser(requestOptions as RequestOptions)
    .then(() => router.go('/messenger'))
    .catch((err) => console.log(err));
};

export const getUserController = async () => {
  const requestOptions = {
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include', // Нужно подставлять куки
    mode: 'cors', // Работаем с CORS
    method: 'GET', // В этой функции должен быть GET-запрос, а не POST
  };

  try {
    const response = await userApi.getUser(requestOptions as RequestOptions);
    const userData = JSON.parse(response.response);
    console.log(userData);
    return userData;
  } catch (error) {
    console.log(error);
    return null; // Обработка ошибки, возвращение null или другого значения по умолчанию
  }
};

export const loginUserController = (formDataObject: FormDataObjectType) => {
  const requestOptions = {
    headers: {
      'content-type': 'application/json',
      credentials: 'include', // Нужно подставлять куки
      mode: 'cors', // Работаем с CORS
    },
    method: 'POST',
    data: JSON.stringify(formDataObject),
  };

  userApi
    .login(requestOptions as RequestOptions)
    .then(() => router.go('/messenger'))
    .catch((err) => console.log(err));
};
