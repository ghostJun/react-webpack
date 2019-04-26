import React, {Component} from 'react';
import {Button} from 'antd';
// import store from '../../store/store';
import {add, remove} from "../../store/actions/count_action";
import {connect} from 'react-redux';


class ReduxDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
        }
    }

    componentDidMount() {
        const {store} = this.props;
        console.log(store);
    }

    // addItem() {
    //     store.dispatch(add());
    //     this.setState({num: store.getState()})
    // }
    //
    // removeItem() {
    //     store.dispatch(remove());
    //     this.setState({num: store.getState()})
    // }

    render() {
        const {value, ADD} = this.props;
        return (
            <div>
                {/*<h1>{this.state.num}</h1>*/}
                <h1>{value}</h1>
                {/*<Button onClick={this.addItem.bind(this)} type="primary">Add</Button>*/}
                {/*<Button onClick={this.removeItem.bind(this)} type="default">Remove</Button>*/}
                <Button onClick={ADD} type="default">Add</Button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        value: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ADD: () => dispatch({
            type: 'COUNT_ADD',
            payload: {}
        })
    }
}

export default ReduxDemo = connect(mapStateToProps, mapDispatchToProps)(ReduxDemo);
