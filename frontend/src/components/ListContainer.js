import BucketsList from "./BucketList";
import Header from "./Header"
import InputBucketList from "./InputBucketList"
import React from "react"
import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: 800px; // Or whatever max-width you prefer
    margin: 0 auto; // This will center your container
    padding: 0 20px; // This adds padding on the sides
`;


let base_url = window._env_.REACT_APP_BACKEND_BASE_URI
console.log("Original base_url URI: ")
console.log(base_url)
if (!(base_url.endsWith("/"))){
    base_url = base_url + "/";
}
if (!base_url.startsWith('http')){
    base_url = window.location.protocol + "//" + base_url
}
console.log("Backend API URI: ")
console.log(base_url)

class ListContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        fetch(base_url)
            .then(response => response.json())
            .then(data => this.setState({todos: data})).catch(console.error);
    }

    handleChange = (id) => {
        console.log("clicked", id);

        // Pass previous state and invert it
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id) {

                    let c_todo = {
                        ...todo, checked: !todo.checked,
                    }
                    console.log(JSON.stringify({
                        checked: c_todo.checked,
                    }))
                    // Update checked parameter
                    fetch(base_url + todo.id, {
                        method: "PUT", body: JSON.stringify({
                            checked: c_todo.checked,
                        }) // TODO: ????
                    }).catch(console.error);

                    return c_todo
                }
                return todo
            }),
        }))
    };

    delTodo = id => {
        console.log("deleted", id);
        fetch(base_url + id, {
            method: "DELETE"
        }).then(response => response.json()).catch(console.error);

        this.setState({
            todos: [...this.state.todos.filter(todo => {
                return todo.id !== id;
            })]
        });
    };

    addTodoItem = title => {
        console.log(title);

        console.log("" + JSON.stringify({
            title: title,
            checked: false,
        }))

        // Make request to BE and receive ID
        fetch(base_url, {
            method: "POST", body: JSON.stringify({ // | b'{"title":"Heeeyy","checked":false}'
                title: title,
                checked: false,
            })
        })
            .then(response => response.json())
            .then(newTodo => this.setState(prevState => ({
                todos: [...prevState.todos, newTodo]

            }))).catch(console.error);
    };

    render() {
        return (
            <StyledContainer id="div-BucketsList">
                <Header />
                <InputBucketList addTodoProps={this.addTodoItem} />
                <BucketsList todos={this.state.todos}
                    handleChangeProps={this.handleChange}
                    deleteTodoProps={this.delTodo} />
            </StyledContainer>
        );
    }
}

export default ListContainer