import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";

class ListItem extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem', marginBottom: '10px' }}>
            <Card.Body>
                <Card.Title>{this.props.todo.title}</Card.Title>
                <input type="checkbox"
                checked={this.props.todo.checked}
                onChange={() => this.props.handleChangeProps(this.props.todo.id)}
                /> Completed
                <Button variant="danger" onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
                    Delete
                </Button>
            </Card.Body>
            </Card>
        )
    }
}

export default ListItem