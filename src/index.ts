// @ts-nocheck

import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

type PageKey = 'auth' | 'chat' | 'login' | 'editProfile' | 'notFound' | 'serverError';

type Pages = {
  auth: string;
  chat: string;
  login: string;
  editProfile: string;
  notFound: string;
  serverError: string;
};

const authPage = new Pages.AuthPageComponent();
const authPageElement = authPage.getContent();
document.body.appendChild(authPageElement);

const loginPage = new Pages.LoginPageComponent();
const loginPageElement = loginPage.getContent();
document.body.appendChild(loginPageElement);

const chatPage = new Pages.ChatComponent();
const chatPageElement = chatPage.getContent();
document.body.appendChild(chatPageElement);

const editProfile = new Pages.EditProfileComponent({});
const editProfileElement = editProfile.getContent();
document.body.appendChild(editProfileElement);

console.log('chatPageElement', chatPageElement);

const pages: Pages = {
  auth: Pages.AuthPage,
  chat: Pages.Chat,
  login: Pages.Login,
  editProfile: Pages.EditProfile,
  notFound: Pages.NotFound,
  serverError: Pages.ServerError,
};

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: PageKey) {
  const source = pages[page];

  const handlebarsFunct = Handlebars.compile(source);

  const app = document.getElementById('app');
  app!.innerHTML = handlebarsFunct(page);
}

document.addEventListener('DOMContentLoaded', () => navigate('auth'));

document.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();

  const target = e.target as HTMLElement;
  let page;

  if (e.target) {
    page = target.getAttribute('page');
  }

  if (page) {
    navigate(page as PageKey);
  }
});
