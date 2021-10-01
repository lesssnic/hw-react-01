



import React from "react";
import "./LeftMenu.css";
import {ListItemButton, ListItemText, Divider, List, ListItem, Box} from '@mui/material';

class LeftMenu extends React.Component {
    render(){
        const {menu} = this.props;
        return (
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className='left-nav'>
                <nav aria-label="secondary folders">
                    <List>
                    {menu?.map((item) => 
                                        <>
                                        <ListItem disablePadding>
                                            <ListItemButton component="a" href={item.href}>
                                            <ListItemText primary={item.item} />
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider />
                                        </>
                                        )}
                    </List>
                </nav>
                </Box>
        )
    }
}

export default LeftMenu;