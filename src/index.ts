import * as Pages from "./pages";
import { router } from "./tools/Router";

router
  .use("/", Pages.loginPage)
  .use("/sign-up", Pages.authPage)
  .use("/settings", Pages.editProfile)
  .use("/messenger", Pages.chatPage)
  .start();
