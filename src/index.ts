import * as Pages from "./pages";

type PageKey =
  | "auth"
  | "chat"
  | "login"
  | "editProfile"
  | "notFound"
  | "serverError";

interface PageComponents {
  [key: string]: HTMLElement | null;
}

const authPageElement = Pages.authPage.getContent();
const loginPageElement = Pages.loginPage.getContent();
const chatPageElement = Pages.chatPage.getContent();
const editProfileElement = Pages.editProfile.getContent();
const notFoundElement = Pages.notFound.getContent();
const serverErrorElement = Pages.serverError.getContent();

const pages: PageComponents = {
  auth: authPageElement,
  chat: chatPageElement,
  login: loginPageElement,
  editProfile: editProfileElement,
  notFound: notFoundElement,
  serverError: serverErrorElement,
};

function navigate(page: PageKey) {
  const app = document.getElementById("app");
  const source = pages[page];

  if (app && source) {
    app.innerHTML = "";
    app.appendChild(source);
    console.log("Navigated to page:", page);
  } else {
    console.error("Failed to navigate to page:", page);
  }
}

document.addEventListener("DOMContentLoaded", () => navigate("auth"));

document.querySelector("nav")?.addEventListener("click", (e) => {
  e.preventDefault();

  const target = e.target as HTMLElement;
  const page = target.getAttribute("page");

  if (page) {
    navigate(page as PageKey);
  }
});
