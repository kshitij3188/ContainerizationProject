import ListItem from "./ListItem";
import React from "react"
import styled from 'styled-components';

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 20px 0;
`;

class BucketsList extends React.Component {
    render() {
        return (
            <StyledList>
                {this.props.todos.map(todo => (
                    <ListItem
                        key={todo.id}
                        todo={todo}
                        handleChangeProps={this.props.handleChangeProps}
                        deleteTodoProps={this.props.deleteTodoProps}
                    />
                ))}
            </StyledList>
        )
    }
}

export default BucketsList