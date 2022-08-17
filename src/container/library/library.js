import React, { useEffect } from 'react';
import Layout from '../../hoc/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import AppErr from '../../AppErr';
import { initGenre, initData } from '../../store/actions/index';
import Admin from '../../components/admin/admin';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';

const Library = () => {
    const { status } = useSelector(state => state.status)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initData())
        dispatch(initGenre())
    }, [dispatch])

    let dataRender = () => {
        switch (status) {
            case 200:
                return (
                    <Layout>
                        <Admin />
                        {/* <Users /> */}
                    </Layout>
                )
            case 503:
                return <AppErr errorcode={"[503] Service Unavailable!"}
                    info={"Server is down, kindly refresh the page"} />
            case 204:
                return <AppErr errorcode={"[204] No Response!"}
                    info={"Data cannot find in the server, check URL or contact the administrator"} />
            default:
                return <LinearProgress />
        }
    }
    return dataRender();
}

Library.PropTypes = {
    actions: PropTypes.func,
}

export default Library;