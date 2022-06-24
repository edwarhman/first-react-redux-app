import React from "react";
import { connect } from "react-redux";
import { addMessage, messageReducer } from "./MessagerReducer";

class Presentational extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
        this.handleChanges = this.handleChanges.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    handleChanges(event) {
        this.setState({
            input: event.target.value
        });
    }

    submitMessage() {
        this.props.submitNewMessage(this.state.input);
        this.setState({
            input: '',
        });
    }

    render() {
        return (
            <div>
                <h2>Type in a new message</h2>
                <input value={this.state.input} onChange={this.handleChanges} />
                <br />
                <button onClick={this.submitMessage}>Submit</button>
                <ul> {
                    this.props.messages.map((message, idx) => {
                        return (
                            <li key={idx}>{message}</li>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }

}

// React Redux 
//

const mapStateToProps = (state) => {
    return {messages: state};
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => {
            dispatch(addMessage(message));
        }
    }
}

export const Messager = connect(mapStateToProps, mapDispatchToProps)(Presentational);
