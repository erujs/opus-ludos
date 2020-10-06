import React, { Component } from 'react';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6)
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="subtitle1" align="center" color="textPrimary" component="p">
                "If you're not being challenged, you're not learning" ~ Christopher R. Perez
            </Typography>
            <Typography variant="body2" color="textPrimary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="#">
                    CollabSF
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    )
}

export default Footer;