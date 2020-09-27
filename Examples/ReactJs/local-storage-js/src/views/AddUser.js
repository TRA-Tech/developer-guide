import React, { Component } from 'react'
import './AddUser.css'

const uuid = require('uuid/v1');

class AddUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            uuid: uuid(),
            name: "ddd",
            surname: "",
            email: ""
        }
    }
    handleChange(event) {
        let stateName = event.target.name,
            stateValue = event.target.value;

        this.setState({
            [stateName]: stateValue
        });
    }

    handleClick(e) {

        let localData = JSON.parse(localStorage.getItem("userData"));

        if (localData != null) {
            localData.push(this.state)
        } else {
            localData = [];
            localData.push(this.state)
        }

        localStorage.setItem("userData", JSON.stringify(localData))

        this.setState({
            uuid: uuid()
        });

        this.userForm.reset();

        e.preventDefault();

    }
    render() {
        return (
            <div>
                <h3>Add New User</h3>
                <div>
                    <form ref={(el) => this.userForm = el}>
                        <table className="add-user-table">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td><input type="text" name="name" onChange={(e) => this.handleChange(e)} /></td>
                                </tr>
                                <tr>
                                    <td>Surname</td>
                                    <td><input type="text" name="surname" onChange={(e) => this.handleChange(e)} /></td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td><input type="text" name="email" onChange={(e) => this.handleChange(e)} /></td>
                                </tr>
                                <tr>
                                    <td colSpan="2">
                                        <button onClick={(e) => this.handleClick(e)}>Add User</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        )
    }

}

export default AddUser;