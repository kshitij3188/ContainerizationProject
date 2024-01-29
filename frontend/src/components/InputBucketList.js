import React, {Component} from "react"
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const StyledInput = styled.input`
    padding: 10px;
    font-size: 1rem;
    border: 2px solid #1a5dab;
    border-radius: 5px;
    margin-right: 10px;
    flex-grow: 2;
`;

const StyledButton = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #1a5dab;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0e4377;
    }
`;

class InputBucketList extends Component {
    state = {
        title: "",
    };

    onChange = e => {
        // console.log("hello");

        this.setState({
            // title: e.target.value
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault(); //  preventing the default behaviour of the form submission.
        console.log(this.state.title);
        this.props.addTodoProps(this.state.title, this.state.description);
        this.setState({
            title: "",
        });
    };

    render() {
        return (
            <StyledForm onSubmit={this.handleSubmit}>
                <StyledInput 
                    type="text"
                    placeholder="Add item to your Bucket List.."
                    value={this.state.title}
                    name="title"
                    onChange={this.onChange}
                />
                <StyledButton>ADD</StyledButton>
            </StyledForm>
        )
    }
}

export default InputBucketList