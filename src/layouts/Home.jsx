import React, {useState} from 'react';
import '../common.css';
import './Home.css';

class Home extends React.Component {
    construnctor(props) {
        /*super(props);
        this.state = {item: props.item};*/
    }
    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>메인</h1>
            </div>
        );
    }
}
export default Home;