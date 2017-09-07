
import { h, render, Component } from 'preact';
import renderToString from 'preact-render-to-string';

import App from './App.js';



module.exports = {
  render: function (props) {
	let str = renderToString(h(App, props, null) );
	print(str + "<p>Ready! You successfully pre-rendered this on the server using Preact and PHP.<p>");
  }
};