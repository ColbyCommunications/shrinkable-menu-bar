# shrinkable-menu-bar

Collapses a single-line menu bar's overflowing elements into a hamburger. Also handles submenus.

## Install

```
npm install shrinkable-menu-bar
```

OR

```
yarn add shrinkable-menu-bar
```

## Usage

### Javascript

Import the library and instantiate the class. Call the instance's `shouldRun` method to check whether the necessary parts exist on the page, then run its `run` method.

```Javascript
import ShrinkableMenu from 'shrinkable-menu-bar';

window.addEventListener('load', () => {
  const yourOptions = {
    // See below.
  }

  const shrinkableMenu = new ShrinkableMenu(yourOptions);
  if (shrinkableMenu.shouldStart()) {
      shrinkableMenu.start();
  } else {
    // Something went wrong.
  }
});
```

Or use the shorthand `startShrinkableMenu` function.

```Javascript
import { startShrinkableMenu } from 'shrinkable-menu-bar';

window.addEventListener('load', () => {
  const yourOptions = {
    // See below.
  }

  startShrinkableMenu(yourOptions)
});
```

#### Options

##### `selector` (string). Default: `.shrinkable`.

A string to pass to `document.querySelector` to select the menu's root element.

##### `classNamespace` (string). Default: `shrinkable`.

This library uses [BEM-style](http://getbem.com/naming/) naming for CSS classes. The `className` string is prepended to all classes -- e.g. `shrinkable__item`, `shrinkable__button`.

### CSS

To use the default styles, import this library's CSS into your project via a Sass or PostCSS import:

```CSS
@import 'shrinkable-menu-bar/src/css/main.css';
```

Or import this library's PostCSS-processed CSS in with an HTML `link` tag:

```HTML
<link rel="stylesheet" type="text/css" href="node_modules/shrinkable-menu-bar/dist/shrinkable-menu-bar.min.css" />
```

### HTML

The HTML for the menu requires a certain structure. See [this file](example/src/index.html) for an example. In its most basic form, the menu must look like:

```HTML
<nav class="shrinkable">
  <ul class="shrinkable__menu small-5">
      <li class="shrinkable__item">
          <a class="shrinkable__btn" href="#">Staff</a>
      </li>
      <li class="shrinkable__item">
          <a class="shrinkable__btn" href="#">Lorem ipsum dolor sit amet</a>
      </li>
      <li class="shrinkable__item shrinkable__has-submenu">
          <a class="shrinkable__btn" href="#">FAQ</a>
      </li>
      <li class="shrinkable__item">
          <a class="shrinkable__btn" href="#">Nulla magna enim</a>
      </li>
  </ul>
</nav>
```

The relation of the classes to each other is what happens. The HTML elements (`nav`, `ul`, etc.) don't affect the functionality of this library.
