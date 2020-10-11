import React from 'react';
import classes from './cardstatus.module.css';
import { Box, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import UpdateIcon from '@material-ui/icons/Update';

const CardStatus = (props) => {
    let Switchcase = () => {
        switch(props.status){
            case 'Active' : 
                return (
                    <Box key={props.key} className={classes.box}>
                        <CheckCircleIcon className={classes.active} />
                        <Typography className={classes.Typography}>{props.status}</Typography>
                    </Box>
                );
            case 'Beta' :
                return (
                    <Box key={props.key} className={classes.box}>
                        <CheckCircleIcon className={classes.beta} />
                        <Typography className={classes.Typography}>{props.status}</Typography>
                    </Box>
                );
            case 'Under Maintenance' :
                return (
                    <Box key={props.key} className={classes.box}>
                        <UpdateIcon className={classes.maintenance} />
                        <Typography className={classes.Typography}>{props.status}</Typography>
                    </Box>
                );
            case 'Inactive' : 
                return (
                    <Box key={props.key} className={classes.box}>
                        <ErrorIcon className={classes.inactive} />
                        <Typography className={classes.Typography}>{props.status}</Typography>
                    </Box>
                );
            default: return null
        }
    }
    return(
        <Switchcase />
    );
};

export default CardStatus;