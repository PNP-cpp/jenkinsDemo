import React, { Component } from 'react';
import './App.css';
import './common.css';
import "antd/dist/antd.css"; // 要引入ant 样式
import {SiderIOT} from'./components/sider';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className='APP'>
      <SiderIOT></SiderIOT>  
      </div>
    );
  }
}

export default App;
