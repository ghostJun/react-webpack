import React, {Component} from 'react';
import {Button} from 'antd';
import store from '../../store/store';
import {add, remove} from "../../store/actions/count_action";

class ReduxDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
        }
    }

    componentDidMount() {
    }

    addItem() {
        store.dispatch(add());
        this.setState({num: store.getState()})
    }

    removeItem() {
        store.dispatch(remove());
        this.setState({num: store.getState()})
    }

    render() {
        return (
            <div>
                <h1>{this.state.num}</h1>
                <Button onClick={this.addItem.bind(this)}>Add</Button>
                <Button onClick={this.removeItem.bind(this)}>Remove</Button>
            </div>
        );
    }
}

export default ReduxDemo;
