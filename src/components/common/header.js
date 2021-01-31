import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from "@material-ui/core/CssBaseline";
import * as commonStyle from '../../styling/commonStyling'

export default function Header() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="absolute" color="default" style={commonStyle.getStyling().header}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Fine Dishes
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

