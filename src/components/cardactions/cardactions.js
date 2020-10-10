import React, {useState} from 'react';
import { CardActions,
        Checkbox, 
        FormControlLabel } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Delete from '../cards/delete/delete';
import Edit from '../cards/edit/edit';
import classes from './cardactions.module.css'

const ActionCard = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const checkboxHandler = (event) =>{
        event.target.checked ? setIsChecked(true) : setIsChecked(false)
    }
    return (
        props.page === 'admin' ?
        <React.Fragment>
            <FormControlLabel
                control={<Checkbox color="primary" icon={<MoreHorizIcon />} checkedIcon={<MoreHorizIcon />} onChange={checkboxHandler.bind(this)} />}
                className={classes.formControlLabel}
            />
            <CardActions className={isChecked ? classes.cardActions : classes.hidden}>
                <Delete uuid={props.uuid} />
                <Edit card={props.card} />
            </CardActions>
        </React.Fragment>
        : null
    );
}

export default ActionCard;