import React, {Component} from 'react';
import {Button} from 'antd';
import styles from './styles.less';

class Login extends Component {
    render() {
        return (
            <div className={styles.bg}>Hello World <Button type='primary'>测试</Button></div>
        );
    }
}

export default Login;
