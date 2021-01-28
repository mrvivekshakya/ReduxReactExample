import React, { useRef } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment,decrement,reset,addUser,removerUser } from "./actions/index";

const App = () => {
    const count = useSelector(state => state.counterReducer);
    const users = useSelector(state=> state.userReducer);

    const dispatch = useDispatch();
    const userRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(addUser(userRef.current.value));
        userRef.current.value = "";
    }
    return(
        <>
            <h1>Counter</h1>
            <button onClick={() => dispatch(decrement())}>-</button> {count} <button onClick={() => dispatch(increment())}>+</button>
            <h1>User</h1>

            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Enter Username" ref={userRef} />
            </form>

            <ul>
                {
                    users.map((user,index) => {
                        return(
                            <>
                                <li key={index}>{user.name}&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={() => dispatch(removerUser(index)) }>&times;</button></li>
                                
                            </>
                        );
                    })
                }
            </ul>
        </>
    );
    
}

export default App;