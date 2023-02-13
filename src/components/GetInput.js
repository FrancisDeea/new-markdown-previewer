import React from 'react';

class GetInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    this.handleChange = this.handleChange.bind(this);
    }

    // add methods here
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <div>
                <textarea id="editor" onChange={this.handleChange} value={this.state.input}></textarea>
            </div>
        )
    }
}

export default GetInput