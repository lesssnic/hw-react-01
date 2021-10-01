



import React from "react";
import "./Header.css";
import { Button, ButtonGroup } from '@mui/material';

class Header extends React.Component {
    render(){
        const {menu} = this.props;
        return (
            <div className='header'>
            <ButtonGroup sx={{color:"black", border: '1px solid red'}} variant="text" aria-label="text button group" >
                    {menu?.map((item) => 
                                            <Button sx={{color:"black"}} component="a" href={item.href}>{item.item}</Button>
                                        )}
            </ButtonGroup>
            </div>
        )
    }
}

export default Header;