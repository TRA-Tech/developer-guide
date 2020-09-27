import React from 'react';

class HelloWithName extends React.Component {
    render() {
        return (<h1>Hello {this.props.name}</h1>);
    }
}
export { HelloWithName }; 
