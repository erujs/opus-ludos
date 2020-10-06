import React from 'react';
import { CssBaseline,
        Typography,
        Container,
        Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Nav from '../navigation/navigation';
import Cards from '../cards/cards';
import Footer from '../footer/footer';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    }
}));

const Home = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Nav />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Hello Admin
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            GKNB is a web application game launcher prototype... In this page you can modify/add a game to the library
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        <Cards />
                    </Grid>
                </Container>
            </main>
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