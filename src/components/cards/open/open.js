import React, { useState } from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import classes from './open.module.css';
import {
    Link,
    CardMedia
} from '@material-ui/core';

const Open = () => {
    const [isHovered, setIsHovered] = useState(false);
    const hoverHandler = () => setIsHovered(!isHovered)

    return(
        <Link href="#" onMouseEnter={hoverHandler.bind(this)} onMouseLeave={hoverHandler.bind(this)}>
            <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" >
                <OpenInNewIcon className={isHovered ? classes.open : classes.hidden} />
            </CardMedia>
        </Link>
    );
}

export default Open;