import ShrinkableMenu from './ShrinkableMenu';

export const startShrinkableMenu = (args = {}) => {
  const shrinkableMenu = new ShrinkableMenu(args);
  if (shrinkableMenu.shouldStart()) {
    shrinkableMenu.start();
  }
};
