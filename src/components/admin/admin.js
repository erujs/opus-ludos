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
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    Typography: {
        color: 'white'
    },
    heroContent: {
        // background: 'linear-gradient(90deg, #CC99FF 0%, #7500C0 50%)',
        background: 'url("https://source.unsplash.com/fGEEJ7Z8cIA")',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        padding: theme.spacing(8, 0, 6),
        height: '100vh'
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
                        <Typography component="h1" variant="h2" align="center" className={classes.Typography}>
                            Hello Admin
                        </Typography>
                        <Typography variant="h5" align="center" paragraph className={classes.Typography}>
                            GKNB is a web application game launcher prototype... In this page you can modify/add a game to the library
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        <Cards page={"view"}/>
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