import clickOutside from 'click-outside';

const onTogglerClick = ({ toggler, menu, activeClass }) => {
  toggler.classList.toggle(activeClass);
  menu.classList.toggle(activeClass);
};

const startListener = ({
  container,
  togglerSelector,
  submenuSelector,
  activeClass,
}) => {
  const toggler = container.querySelector(togglerSelector);
  const menu = container.querySelector(submenuSelector);

  toggler.addEventListener('click', () => {
    onTogglerClick({ toggler, menu, activeClass });
  });

  clickOutside(container, () => {
    toggler.classList.remove(activeClass);
    menu.classList.remove(activeClass);
  });
};

export const handleSubmenus = ({
  hasSubmenuSelector,
  togglerSelector,
  submenuSelector,
  activeClass,
}) => {
  [...document.querySelectorAll(hasSubmenuSelector)].forEach(container => {
    startListener({ container, togglerSelector, submenuSelector, activeClass });
  });
};
