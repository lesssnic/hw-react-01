



import React from "react";
import "./LeftMenu.css";

class LeftMenu extends React.Component {
    render(){
        const {menu} = this.props;
        return (
            <div className="left-menu">
                <menu>
                    {menu?.map((item) => <a href={item.href}>{item.item}</a>)}
                </menu>
            </div>
        )
    }
}

export default LeftMenu;