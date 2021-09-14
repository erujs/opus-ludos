import React, { useState } from 'react';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Drawer,
    Divider,
    Hidden
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: 'white',
                color: 'black'
            }
        }
    }
});

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    root: {
        display: 'flex',
        color: 'black'
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

const Layout = (props) => {
    const [drawer, setDrawer] = useState(false);
    const classes = useStyles();
    const mobile = ['xs', 'sm'];
    const laptop = ['md', 'lg', 'xl'];
    return (
        <ThemeProvider theme={customTheme}>
            <Hidden only={laptop}>
                <AppBar position="relative">
                    <Toolbar>
                        <VideogameAssetIcon className={classes.icon} />
                        <Typography variant="h6" className={classes.icon}noWrap>novus</Typography>
                    </Toolbar>
                </AppBar>
                {/* <Drawer anchor={'top'}>
                </Drawer> */}
            </Hidden>
            <Hidden only={mobile}>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor="left"
                >
                    <Toolbar>
                        <VideogameAssetIcon className={classes.icon} />
                        <Typography variant="h6" className={classes.typography} noWrap>novus</Typography>
                    </Toolbar>
                    <Divider />
                </Drawer>
            </Hidden>
            <main>
                {props.children}
            </main>
        </ThemeProvider>
    )
};

export default Layout;