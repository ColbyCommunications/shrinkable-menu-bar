import { hamburger } from './hamburger';
import { handleSubmenus } from './handleSubmenus';

/**
 * Adds a hamburger icon and a togglable submenu when the given menu is wider
 * than the page.
 */
class ShrinkableMenu {
  onResize = this.onResize.bind(this);
  onHamburgerClick = this.onHamburgerClick.bind(this);

  constructor(args = {}) {
    this.args = Object.assign({}, args, {
      selector: '.shrinkable',
      classNamespace: 'shrinkable',
    });
    this.container = document.querySelector(this.args.selector);
    this.list = document.querySelector(`${this.args.selector}__menu`);
    this.windowSize = 0;
    this.classNamespace = this.args.classNamespace;
    this.hamburger = null;
    this.extraMenu = null;
  }

  shouldStart = () => this.container && this.list && this.classNamespace;

  start() {
    this.onShrink();
    window.addEventListener('resize', this.onResize);
    handleSubmenus({
      hasSubmenuSelector: `.${this.classNamespace}__has-submenu`,
      togglerSelector: `.${this.classNamespace}__submenu-toggler`,
      submenuSelector: `.${this.classNamespace}__submenu`,
      activeClass: `${this.classNamespace}__active`,
    });
  }

  getButtonsWidth = () =>
    (this.hamburger ? this.hamburger.clientWidth : 0) +
    [...this.list.children].reduce(
      (sum, element) => sum + element.clientWidth,
      0
    );

  getListLastLink = () =>
    [...this.list.children].filter(child => child.tagName === 'LI').pop();

  addHamburger() {
    this.hamburger = document.createElement('BUTTON');
    this.hamburger.innerHTML = hamburger;
    this.hamburger.classList.add(`${this.classNamespace}__btn`);
    this.hamburger.classList.add(`${this.classNamespace}__theme`);
    this.hamburger.classList.add(`${this.classNamespace}__hamburger`);
    this.container.appendChild(this.hamburger);
    this.hamburger.addEventListener('click', this.onHamburgerClick);
  }

  addExtraMenu() {
    this.extraMenu = document.createElement('UL');
    this.extraMenu.classList.add(`${this.classNamespace}__submenu`);
    this.extraMenu.classList.add(`${this.classNamespace}__theme`);
    this.container.appendChild(this.extraMenu);
  }

  initExtraMenu() {
    this.addHamburger();
    this.addExtraMenu();
    this.onShrink();
  }

  killExtraMenu() {
    this.hamburger.removeEventListener('click', this.onHamburgerClick);
    this.container.removeChild(this.hamburger);
    this.container.removeChild(this.extraMenu);
    this.hamburger = null;
    this.extraMenu = null;
  }

  onHamburgerClick() {
    if (this.hamburger.classList.contains(`${this.classNamespace}__active`)) {
      this.hamburger.classList.remove(`${this.classNamespace}__active`);
      this.extraMenu.classList.remove(`${this.classNamespace}__active`);
    } else {
      this.hamburger.classList.add(`${this.classNamespace}__active`);
      this.extraMenu.classList.add(`${this.classNamespace}__active`);
    }
  }

  onResize() {
    if (window.innerWidth > this.windowSize) {
      this.onGrowth();
    } else if (window.innerWidth < this.windowSize) {
      this.onShrink();
    }
  }

  onShrink() {
    this.windowSize = window.innerWidth;

    while (this.getButtonsWidth() > this.windowSize) {
      if (!this.hamburger) {
        this.initExtraMenu();
        return;
      }

      const lastItem = this.list.removeChild(this.getListLastLink());
      this.extraMenu.prepend(lastItem);
    }
  }

  onGrowth() {
    this.windowSize = window.innerWidth;

    while (
      this.extraMenu &&
      this.extraMenu.children.length &&
      this.getButtonsWidth() + this.extraMenu.children[0].clientWidth <
        this.windowSize
    ) {
      const firstItem = this.extraMenu.removeChild(this.extraMenu.children[0]);
      this.list.append(firstItem);

      if (!this.extraMenu.children.length) {
        this.killExtraMenu();
        return;
      }
    }
  }
}

export default ShrinkableMenu;
