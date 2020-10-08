import React from 'react';
import { Card,
        CardActions,
        CardContent,
        CardMedia,
        Grid,
        Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Add from './add/add';
import Delete from './delete/delete';
import Edit from './edit/edit';


const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    }
}));

const Cards = (props) => {
    const classes = useStyles();
    console.log(props.games)
    let cards =
        props.games.map((card) => (
        <Grid key={card.uuid} xs={12} sm={6} md={4} item data-aos="fade-up">
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"/>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" component="h2">
                        {card.game_name} {card.version}
                    </Typography>
                    <Typography>
                        {card.publisher} {card.date_created}
                    </Typography>
                    <Typography>
                        {card.genre} {card.status}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Delete uuid={card.uuid} />
                    <Edit />
                </CardActions>
            </Card>
        </Grid>
    ))
    // const { window } = props;
    // const trigger = {target: window ? window() : undefined};
    return (
        <React.Fragment>
            <Add />
            {/* <Slide appear={false} direction="down" in={!trigger}> */}
                {cards}
            {/* </Slide> */}
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        games: state.games
    };
}

export default connect(mapStateToProps, null)(Cards);