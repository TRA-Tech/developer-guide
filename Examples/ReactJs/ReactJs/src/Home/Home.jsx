import React from 'react';
import { Router, Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
                <div>
                    <h2>Welcome to React Examples</h2>
                    <ul>
                        <li><Link to={'/helloworld'}> Hello World </Link></li>
                        <li><Link to={'/hellowithname'}> Hello With Name</Link></li>
                        <li><Link to={'/stateexample'}> State Example </Link></li>
                        <li><Link to={'/virtualdom'}> Virtual Dom </Link></li>
                        <li><Link to={'/fetch'}> Fetch & Key </Link></li>
                        <li><Link to={'/getinputval'}> Get Input Value </Link></li>
                    </ul>
                </div>
        );
    }
}
export { Home }