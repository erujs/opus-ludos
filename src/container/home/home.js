import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { initGenre, initData } from '../../store/actions/actions';
import Layout from '../../hoc/Layout/Layout';
import Error from '../error/error';
import Admin from '../../components/admin/admin';
import LinearProgress from '@material-ui/core/LinearProgress';

const Library = () => {
    const { status, error } = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initData());
        dispatch(initGenre());
    }, [dispatch]);

    let dataRender = () => {
        switch (status) {
            case null:
                return <LinearProgress />
            case 200:
                return (
                    <Layout>
                        <Admin />
                        {/* <Users /> */}
                    </Layout>
                )
            case status:
                return <Error errorcode={'ERROR [' + status + ']'} info={error} />
            // below code is not working because of above case
            default:
                break;
        }
    }
    return dataRender();
}

Library.PropTypes = {
    actions: PropTypes.func,
}

export default Library;