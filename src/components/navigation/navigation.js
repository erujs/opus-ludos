import React from 'react';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import { AppBar,
        Toolbar,
        Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: '#7500C0'
            }
        }
    }
});

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2)
    }
}));

const Navigation = (props) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={customTheme}>
            <AppBar position="relative">
                <Toolbar>
                    <VideogameAssetIcon className={classes.icon}/>
                    <Typography variant="h6" className={classes.typography} noWrap>GKNB</Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Navigation;