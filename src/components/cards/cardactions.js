import React, {useState} from 'react';
import { CardActions,
        Checkbox, 
        FormControlLabel } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Delete from './delete/delete';
import Edit from './edit/edit';
import './cardactions.css'

const ActionCard = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const checkboxHandler = (event) =>{
        event.target.checked ? setIsChecked(true) : setIsChecked(false)
    }
    return (
        <React.Fragment>
            <FormControlLabel
                control={<Checkbox color="primary" icon={<MoreHorizIcon />} checkedIcon={<MoreHorizIcon />} onChange={checkboxHandler.bind(this)} />}
                className="formControlLabel"
            />
            <CardActions className={isChecked ? "cardActions" : "hidden"}>
                <Delete uuid={props.uuid} />
                <Edit card={props.card} />
            </CardActions>
        </React.Fragment>
    );
}

export default ActionCard;