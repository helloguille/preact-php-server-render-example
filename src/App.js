import { h, render, Component } from 'preact';
import Link from './Link.js';

export default class App extends Component {
    render(props, state) {
        return <Link href="https://preactjs.com/">This link was {props.var} rendered</Link>;
    }
}
