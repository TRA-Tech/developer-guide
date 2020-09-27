import React, { Component } from 'react'
import './UserList.css'

const UserDataList = (props) => {

    let rows = props.data.map(item => {
        return (
            <tr key={item.uuid}>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
            </tr>
        )
    });

    return rows;
}

class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: []
        }
    }
    componentDidMount() {
        
        let localData = JSON.parse(localStorage.getItem("userData"));

        if (localData != null) {
            this.setState({ userData: localData })
        }

    }
    render() {
        return (
            <div>
                <h3>All User</h3>
                <div>
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>E-Mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <UserDataList data={this.state.userData} />
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default UserList;