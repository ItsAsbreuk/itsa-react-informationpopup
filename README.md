[![Build Status](https://travis-ci.org/ItsAsbreuk/itsa-react-informationpopup.svg?branch=master)](https://travis-ci.org/ItsAsbreuk/itsa-react-informationpopup)

Beautiful iOS-stylisch checkbox for react.

Lightweight, focussable and responses to the spacebar.

## How to use:

```js
const React = require('react'),
    ReactDOM = require('react-dom'),
    Component = require('./lib/component-styled.jsx');

const props = {
    popup: 'Here is something incredably awesome I want to show. its is a long sentence, but that is the idea to show how it will break inside the popup.'
};

ReactDOM.render(
    <Component {...props}>?</Component>,
    document.getElementById('component-container')
);
```

## About the css

You need the right css in order to make use of `itsa-react-informationpopup`. There are 2 options:

1. You can use the css-files inside the `css`-folder.
2. You can use: `Component = require("itsa-react-informationpopup/lib/component-styled.jsx");` and build your project with `webpack`. This is needed, because you need the right plugin to handle a requirement of the `scss`-file.


[View live example](http://projects.itsasbreuk.nl/react-components/itsa-informationpopup/component.html)

[API](http://projects.itsasbreuk.nl/react-components/itsa-informationpopup/api/)