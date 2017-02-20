'use strict';

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
