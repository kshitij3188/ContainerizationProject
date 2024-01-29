import React from "react"
import "./ListItem.css";


class ListItem extends React.Component {
    render() {
        return (
            <li className="list-item">
                <input
                    type="checkbox"
                    checked={this.props.todo.checked}
                    onChange={() => this.props.handleChangeProps(this.props.todo.id)}
                />
                <span className="list-item-text">{this.props.todo.title}</span>
                <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
                    Delete
                </button>
            </li>
        );
    }
}

export default ListItem