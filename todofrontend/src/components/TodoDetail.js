import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const TodoDetail = () => {

const [todo, setTodo] = useState([])

const {id} = useParams();
const history = useNavigate();

useEffect(() => {
    getSingleTodo();
},[])


const getSingleTodo = async () => {
  const  { data } = await axios.get(`http://127.0.0.1:8000/todo/crud/${id}/`)
  console.log(data);
  setTodo(data);
  

}

const deleteTodo = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/todo/crud/${id}/`)
    history("/")
}



    return (
        <div>
            <h2>Detail of Single Todos </h2>
            <hr></hr>
            <div className="full-todo-detail">
              {/*  <img src={todo.image} height="300" width="500"/> */}
                <div className="todo-detail">
                    <p>{todo.id}</p>
                    <p>{todo.task_title}</p>
                    <p>{todo.task_description}</p>
                    <p>{todo.created_at}</p>
                    <p>{todo.updated_at}</p>
                </div> 
            </div>
           

          

            <Link className="btn btn-outline-primary mr-2" to={`/${todo.id}/update`}>Update</Link>
            {/* <Link className="btn btn-danger" onClick={() => deleteTodo(todo.id)}> Delete</Link>  */}

          
        </div>
    );
};

export default TodoDetail;