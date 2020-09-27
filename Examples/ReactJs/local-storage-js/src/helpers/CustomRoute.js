import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from '../layout';

const CustomRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={routeProps => (
        <Layout>
            <Component {...routeProps} />
        </Layout>
    )} />


)
export default CustomRoute 