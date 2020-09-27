import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    handleChange(event) {

        this.setState({
            value: event.target.value
        }, () => {
            this.props.saveState(this.props.name, this.state.value);
        });

    }
    render() {
        return (
            <input type={this.props.type} placeholder={this.props.placeholder} autoComplete={this.props.autoComplete} className="form-control" value={this.props.value || this.state.value} onChange={(e) => this.handleChange(e)} />
        );
    }
}

class GetInputVal extends React.Component {
    constructor() {
        super();
        this.state = {
            formData: {}
        };
        this.saveState = this.saveState.bind(this);
    }
    saveState(key, value) {

        var stateFormData = this.state.formData;

        stateFormData[key] = value;

        this.setState({
            formData: stateFormData
        });
    }
    onClickHandler(e) {
        alert(JSON.stringify(this.state.formData));
    }
    render() {
        return (
            <ul>
                <li><Input placeholder="item1" type="text" name="item1" saveState={this.saveState} /></li>
                <li><Input placeholder="item2" type="text" name="item2" saveState={this.saveState} /></li>
                <li><button onClick={(e) => this.onClickHandler(e)} >Alert Val</button></li>
            </ul>
        );
    }
}
export { GetInputVal }; 