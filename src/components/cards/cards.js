import React from 'react';
import { Card,
        CardContent,
        CardMedia,
        Grid,
        Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import Add from './add/add';
import moment from 'moment';
import 'aos/dist/aos.css'
import AOS from 'aos';
import './cards.css'
import ActionCard from './cardactions';

const Cards = (props) => {
    AOS.init();
    let cards = props.games.map((card) => (
        <Grid key={card.uuid} xs={12} sm={6} md={4} item data-aos="fade-up">
            <Card className='card'>
                <CardMedia className="cardMedia" image="https://source.unsplash.com/random" />
                    <ActionCard card={card} uuid={card.uuid} />
                    <CardContent className="cardContent">
                        <Typography className="Typography" variant="h5" component="h2">{card.game_name} </Typography>
                        <Typography className="Typography">
                            v{card.version} &nbsp;
                            {moment(card.date_created).format('MMMM Do YYYY')}</Typography>
                        <Typography className="publisher">{card.publisher}</Typography>
                        <Typography className="Typography">Genre: {card.genre}</Typography>
                        <Typography className="Typography">Status: {card.status}</Typography>
                    </CardContent>
            </Card>
        </Grid>
    ))
    return (
        <React.Fragment>
            <Add />
            {cards}
            <div data-aos="fade-up" />
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        games: state.games
    };
}

export default connect(mapStateToProps, null)(Cards);