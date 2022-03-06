// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
import React from 'react';
import './App.css';
import Login from "./member/Login";
import Header from "./layouts/Header";
import View from "./layouts/View";

function App() {
    /*// 요청받은 정보를 담아줄 변수 선언
    const [ testStr, setTestStr ] = useState('');

    // 변수 초기화
    function callback(str) {
      setTestStr(str);
    }

    // 첫 번째 렌더링을 마친 후 실행
    useEffect(
        () => {
          axios({
            url: '/home',
            method: 'GET'
          }).then((res) => {
            callback(res.data);
          })
        }, []
    );*/

    return (
        <div className="wrap">
            <div id="pos_scroll">
            </div>
            <div id="container">
                <Header />
                <View />
            </div>
        </div>
    );
}

export default App;
