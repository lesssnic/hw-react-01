

import React from "react";
import Header from "../Header/Header.js";
import LeftMenu from "../LeftMenu/LeftMenu.js";
import Content from "../Content/Content.js";
import "./App.css";

class App extends React.Component {
    render(){
        const menuPoints = [{item: 'Point1', href: '#'},{item: 'Point2', href: '#'},{item: 'Point3', href: '#'},{item: 'Point4', href: '#'},{item: 'Point5', href: '#'}];
        return (
            <div className='container'>
                <Header menu={menuPoints}/>
                <LeftMenu menu={menuPoints}/>
                <Content/>
            </div>
        )
    }
}

export default App;