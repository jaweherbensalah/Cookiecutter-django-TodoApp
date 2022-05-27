import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ShowTodo = () => {

    const [todos, setTodo ] = useState([])

    const fetchtodo = async () => {
        const response = await axios.get('http://localhost:8000/todo/crud/');
        console.log(response.data)
        /*this method will state or list all the information of the todo class */
        setTodo(response.data)
    }
    useEffect(() => {
        fetchtodo();
    }, [])
        
    return(
        <div>

        <div className="main-todo-show">
        {
            todos.map((todo, index) => (
                <Card className="m-3 rounded shadow-lg main-todo-show" style={{ width: '22em' }}>

                
                <Card.Body>

                    <Card.Title>{todo.task_title}</Card.Title>
                    <Card.Text> {todo.task_description} </Card.Text>
                    <Card.Text> {todo.created_at} </Card.Text>
                    <Card.Text> {todo.updated_at} </Card.Text>
                    
                    <Link className="btn btn-primary mr-2" to={`/${todo.id}`}>Full Detail</Link>

                </Card.Body>
                </Card>
            ))

        }
        </div>
       
        
    </div>
    );
};

export default ShowTodo;