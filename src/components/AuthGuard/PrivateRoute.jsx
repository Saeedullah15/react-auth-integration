import { useContext } from 'react';
import { authContext } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);

    if (loading) {
        return "loading...";
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;