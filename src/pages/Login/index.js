import React, {Component} from 'react';
import {Button} from 'antd';
import classNames from 'classnames';
import styles from './styles.less';

class Login extends Component {
    render() {
        return (
            <div className={styles.font}>Hello World <Button type='primary'>测试</Button></div>
        );
    }
}

export default Login;
