import React from 'react';
import { CssBaseline,
        Typography,
        Container,
        Grid,
        Box,
        CardMedia, requirePropFactory } from '@material-ui/core';
import { connect } from 'react-redux';
import Nav from '../navigation/navigation';
import Cards from '../cards/cards';
import Footer from '../footer/footer';
import classes from './admin.module.css'

const Home = (props) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Nav />
            <Box className={classes.adminBox}>
                <Container maxWidth="md" className={classes.heroContent}>
                    <Box className={classes.headerText}>
                        <Typography variant="h1" className={classes.title}>Novus</Typography>
                        <Typography className={classes.description}>
                            Novus is a web application game launcher(prototype). Where you can submit and share your game while having fun.
                        </Typography>
                    </Box>
                    <Box className={classes.headerImage}>
                        <Box className={classes.imageContainer}>
                            <CardMedia className={classes.image} image={require('../../assets/undraw.svg')} />
                        </Box>
                    </Box>
                </Container>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        <Cards page={"admin"} />
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        games: state.games
    };
}

export default connect(mapStateToProps, null)(Home);