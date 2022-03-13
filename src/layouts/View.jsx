import React from 'react';
import '../common.css';
import './View.css';
import AppRouter from "../AppRouter";

class View extends React.Component {
    render() {
        return (
            <div className="main">
                <AppRouter />
            </div>
        );
    }
}
export default View;