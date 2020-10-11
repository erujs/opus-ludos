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
                backgroundColor: '#bf3a30',
                backgroundImage: 'linear-gradient(315deg, #bf3a30 0%, #864ba2 74%)'

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
                    <Typography variant="h6" className={classes.typography} noWrap>gknb</Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Navigation;