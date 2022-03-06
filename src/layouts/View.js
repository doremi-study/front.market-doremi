import React from 'react';
import '../common.css';
import './View.css';
import Login from "../member/Login";

class View extends React.Component {
    render() {
        return (
            <div className="main">
                <Login />
            </div>
        );
    }
}
export default View;