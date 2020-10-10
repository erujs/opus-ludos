import React from 'react';
import { CssBaseline,
        Typography,
        Container,
        Grid,
        Box } from '@material-ui/core';
import { connect } from 'react-redux';
import Nav from '../navigation/navigation';
import Cards from '../cards/cards';
import Footer from '../footer/footer';
import './admin.css'

const Home = (props) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Nav />
            <Box className="adminBox">
                <Container maxWidth="sm" className="heroContent">
                    <Typography component="h1" variant="h2">
                        Hello Admin
                    </Typography>
                    <Typography variant="h5" paragraph>
                        GKNB is a web application game launcher prototype... In this page you can modify/add a game to the library
                    </Typography>
                </Container>
                <Container className="cardGrid" maxWidth="md">
                    <Grid container spacing={4}>
                        <Cards page={"view"}/>
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