
import { h, render, Component } from 'preact';
import renderToString from 'preact-render-to-string';

import App from './App.js';

module.exports = {
  render_client: function (props) {
	let el = document.getElementById('app');
	render(
		h(App, props,null), el, el.firstElementChild
	);
  }
};