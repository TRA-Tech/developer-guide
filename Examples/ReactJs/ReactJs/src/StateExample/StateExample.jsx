import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    handleClick(e) {
        this.setState({value: this.state.value + 1});
    }
    render() {
        return (
            <li> {this.props.name}: <input type="text" value={this.state.value} /><button onClick={(e) => this.handleClick(e)}>Add</button> </li>
        );
    }
}


class StateExample extends React.Component {
    render() {
        return (
            <ul>
                <Item name="Item 1" />
                <Item name="Item 2" />
                <Item name="Item 3" />
                <Item name="Item Erdem" />
            </ul>
        );
    }
}
export { StateExample }; 