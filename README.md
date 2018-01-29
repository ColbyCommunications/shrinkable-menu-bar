# shrinkable-menu

Collapses a single-line menu bar's overflowing elements into a hamburger. Also handles submenus. [See the demo](https://colbycommunications.github.io/shrinkable-menu-bar/example/).

## Install

```
npm install shrinkable-menu
```

OR

```
yarn add shrinkable-menu
```

## Usage

### Javascript

Create an instance of `ShrinkableMenu`. Call the instance's `shouldStart` method to check whether the necessary parts exist on the page, then run its `start` method.

```Javascript
import ShrinkableMenu from 'shrinkable-menu';

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
import { startShrinkableMenu } from 'shrinkable-menu';

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

##### `outerContainerSelector` (string) Default: `html`

A string to pass to `document.querySelector`. The found element will be the basis on which the shrinkable menu's width is determined. By default, the document's HTML element is used.

### CSS

To use the default styles, import this library's CSS into your project via a Sass or PostCSS import:

```CSS
@import 'shrinkable-menu/src/css/main.css';
```

Or import this library's PostCSS-processed CSS with an HTML `link` tag:

```HTML
<link rel="stylesheet" href="node_modules/shrinkable-menu/dist/shrinkable-menu.min.css" />
```

### HTML

The HTML for the menu requires a certain structure. See [this file](example/src/index.html) for an example. In its most basic form, the menu must look like:

```HTML
<nav class="shrinkable">
  <ul class="shrinkable__menu">
      <li class="shrinkable__item">
          <a class="shrinkable__btn" href="#">Staff</a>
      </li>
      <li class="shrinkable__item">
          <a class="shrinkable__btn" href="#">Lorem ipsum dolor sit amet</a>
      </li>
      <li class="shrinkable__item">
          <a class="shrinkable__btn" href="#">FAQ</a>
      </li>
      <li class="shrinkable__item">
          <a class="shrinkable__btn" href="#">Nulla magna enim</a>
      </li>
  </ul>
</nav>
```

The relation of the classes to each other is what matters. The HTML elements (`nav`, `ul`, etc.) don't.
