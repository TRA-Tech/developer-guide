import React from 'react';


const ItemRow = (props) => {
    return (
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.firstName}</td>
            <td>{props.data.lastName}</td>
            <td>{props.data.username}</td>
            <td>{props.data.password}</td>
            <td>{props.data.email}</td>
            <td>{props.data.status}</td>
        </tr>
    );
}

const Rows = (props) => {

    if (props.data.length == 0)
        return (<tr></tr>);

    let rows = props.data.map(item => {
        return <ItemRow key={item.id} data={item} />
    });

    return rows;
}

class Fetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: []
        }
    }
    handleClick(e) {

        fetch("https://localhost:44317/api/users/getall",
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json'  }
            }).then((response) => response.json()).then((json) => {
                this.setState({ itemList: json });
            });

    }
    render() {
        return (
            <div>
                <button onClick={(e) => this.handleClick(e)}> Load Data </button>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Username</td>
                            <td>Password</td>
                            <td>E-Mail</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <Rows data={this.state.itemList} />
                    </tbody>
                </table>
            </div>
        );
    }
}
export { Fetch }; 