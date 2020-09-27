import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';



class Layout extends Component {

    render() {
        return (
            <div>
                <header id="site-header">
                    <div className="menu-item float-left">
                        <Link to="user-list">User List</Link>
                    </div>
                    <div className="menu-sperator float-left"></div>
                    <div className="menu-item float-left">
                        <Link to="add-user">Add User</Link>
                    </div>
                </header>
                <div id="content">
                    {this.props.children}
                </div>
            </div>
        )
    }

}

export { Layout };