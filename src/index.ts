import * as Pages from './pages';

type PageKey = 'auth' | 'chat' | 'login' | 'editProfile' | 'notFound' | 'serverError';

interface PageComponents {
  [key: string]: HTMLElement| null;
}

const authPage = new Pages.AuthPageComponent({});
const authPageElement = authPage.getContent();

const loginPage = new Pages.LoginPageComponent({});
const loginPageElement = loginPage.getContent();

const chatPage = new Pages.ChatComponent({});
const chatPageElement = chatPage.getContent();

const editProfile = new Pages.EditProfileComponent({});
const editProfileElement = editProfile.getContent();

const notFound = new Pages.NotFoundComponent({});
const notFoundElement = notFound.getContent();

const serverError = new Pages.ServerErrorComponent({});
const serverErrorElement = serverError.getContent();

const pages: PageComponents = {
  auth: authPageElement,
  chat: chatPageElement,
  login: loginPageElement,
  editProfile: editProfileElement,
  notFound: notFoundElement,
  serverError: serverErrorElement,
};

function navigate(page: PageKey) {
  const app = document.getElementById('app');
  const source = pages[page];

  if (app && source) {
    app.innerHTML = '';
    app.appendChild(source);
    console.log('Navigated to page:', page);
  } else {
    console.error('Failed to navigate to page:', page);
  }
}

document.addEventListener('DOMContentLoaded', () => navigate('auth'));

document.querySelector('nav')?.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target as HTMLElement;
  const page = target.getAttribute('page');

  if (page) {
    navigate(page as PageKey);
  }
});
