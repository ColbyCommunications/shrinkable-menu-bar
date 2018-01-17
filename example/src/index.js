import ShrinkableMenu from "../..";

window.addEventListener("load", () => {
  const shrinkableMenu = new ShrinkableMenu();
  if (shrinkableMenu.shouldStart()) {
    shrinkableMenu.start();
  }
});
