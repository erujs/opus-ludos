import React from 'react';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import {
    AppBar,
    Toolbar,
    Typography,
    Drawer,
    Divider,
    CssBaseline
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: 'maroon',
                backgroundImage: 'linear-gradient(315deg, maroon 0%, #864ba2 74%)'
            }
        }
    }
});

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2)
    },
    root: {
        display: 'flex',
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

const Navigation = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={customTheme}>
            {/* <AppBar position="relative">
                <Toolbar>
                    <VideogameAssetIcon className={classes.icon} />
                    <Typography variant="h6" className={classes.typography} noWrap>novus</Typography>
                </Toolbar>
            </AppBar> */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                {/* <div className={classes.toolbar} /> */}
                <Toolbar>
                    <VideogameAssetIcon className={classes.icon} />
                    <Typography variant="h6" className={classes.typography} noWrap>novus</Typography>
                </Toolbar>
                <Divider />
            </Drawer>
        </ThemeProvider>

    );
};

export default Navigation;