import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';


type PageKey = 'auth' | 'chat';

type Pages = {
  auth: String;
  chat: String;
};

const pages: Pages = {
  auth: Pages.AuthPage,
  chat: Pages.Chat,
};

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: PageKey) {
  console.log(page);

  const source = pages[page];

  const handlebarsFunct = Handlebars.compile(source);

  document.body.innerHTML = handlebarsFunct(page);
}

document.addEventListener('DOMContentLoaded', () => navigate('auth'));

// document.addEventListener('click', e => {
//   let page
//   if (e.target) {
//     page =  e.target.getAttribute('page');
//   }
//   if (page) {
//     navigate(page);

//     e.preventDefault();
//     e.stopImmediatePropagation();
//   }
// });
