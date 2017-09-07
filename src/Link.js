import { h, render, Component } from 'preact';

export default class Link extends Component {
    render(props, state) {
        return <a  onMouseOver={ e => console.log("onMouseOver event fired. If you see this, event handling via Preacts is working OK.") } href={props.href}>{ props.children }</a>;
    }
}
