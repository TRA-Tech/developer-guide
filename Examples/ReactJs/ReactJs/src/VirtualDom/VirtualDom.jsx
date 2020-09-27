import React from 'react';

const DateTime = () => {
let currentDate = new Date();

return (
    <span>{currentDate.getDay()}.{currentDate.getMonth()}.{currentDate.getFullYear()} {currentDate.getHours()}:{currentDate.getMinutes()}:{currentDate.getSeconds()}</span>);
}
class VirtualDom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: DateTime()
        }
    }
    componentDidMount() {

        var intertval = setInterval(() => {
            this.setState({time: DateTime()});
        }, 1000);

    }
    render() {
        return (
            <ul>
                <li>Date Time : {this.state.time}</li>
            </ul>
        );
    }
}

export {VirtualDom }