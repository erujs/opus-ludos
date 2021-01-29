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
                backgroundColor: 'maroon',
                backgroundImage: 'linear-gradient(315deg, maroon 0%, #864ba2 74%)'

            }
        }
    }
});

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2)
    }
}));

const Navigation = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={customTheme}>
            <AppBar position="relative">
                <Toolbar>
                    <VideogameAssetIcon className={classes.icon}/>
                    <Typography variant="h6" className={classes.typography} noWrap>novus</Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Navigation;