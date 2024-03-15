import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

type PageKey = 'auth' | 'chat' | 'login' | 'editProfile' | 'notFound' | 'serverError';

type Pages = {
  auth: String;
  chat: String;
  login: String;
  editProfile: String;
  notFound: String;
  serverError: String;
};

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
  let app = document.getElementById('app');
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
