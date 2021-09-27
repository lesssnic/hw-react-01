



import React from "react";
import "./Header.css";

class Header extends React.Component {
    render(){
        const {menu} = this.props;
        return (
            <div className="header">
                <menu>
                    {menu?.map((item) => <a href={item.href}>{item.item}</a>)}
                </menu>
            </div>
        )
    }
}

export default Header;