import React from 'react';
import { Button,
        Card,
        CardActions,
        CardContent,
        CardMedia,
        Grid,
        Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Add from './add/add';
import Delete from './delete/delete';

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
    let cards = props.games.map((card) => (
        <Grid key={card.id} xs={12} sm={6} md={4} item>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"/>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {card.game}
                    </Typography>
                    <Typography>
                        {card.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Delete id={card.id} />
                    <Button size="small" color="primary">Edit</Button>
                </CardActions>
            </Card>
        </Grid>
    ))
    return (
        <React.Fragment>
            <Add />
            <div data-aos="fade-up">
            {cards}
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        games: state.games
    };
}

export default connect(mapStateToProps, null)(Cards);