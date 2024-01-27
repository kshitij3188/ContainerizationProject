import ListItem from "./ListItem";
import React from "react"

class BucketsList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <ListItem
                        key={todo.id}
                        todo={todo}
                        handleChangeProps={this.props.handleChangeProps}
                        deleteTodoProps={this.props.deleteTodoProps}
                    />
                ))}
            </ul>
        )
    }
}

export default BucketsList