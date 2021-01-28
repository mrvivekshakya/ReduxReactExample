import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser, decrement, increment, removerUser, reset,userChanged } from './actions';
import counterReducer from './reducers/counter';
import userReducer from './reducers/user';

class App extends React.Component{
    constructor(props){
        super(props);
    }
    changeHandler = (event) => {
        this.props.changedU(event.target.value);
    }

    submitHandler(e){
        e.preventDefault();

        this.props.addU(this.props.userChanged);       
    }
    render() {
        return (
             <>
                <h1>Counter</h1>
                <button onClick={() => this.props.dec()}>-</button>
                    {this.props.counter}
                <button onClick={() => this.props.inc()}>+</button>

                <h2>Users</h2>
                <form onSubmit={e => this.submitHandler(e)}>
                    <input type="text" placeholder="Enter the User Name" name="username" onChange={(event) => this.changeHandler(event)} />
                </form>
                
                <ul>
                    {
                        this.props.users.map((user,index) => {
                            return(
                                <li key={index}>{user.name} <button onClick={() => this.props.removeU(index)}>&times;</button> </li>
                            );
                        })
                    }
                </ul>
             </>
        );
    }
}

function mapStateToProps(state){
    return {
        counter: state.counterReducer,
        users : state.userReducer,
        userChanged : state.changeUserReducer
    }
}

function matchDispatchToProps(dispatch){
    return {
        inc: () => dispatch(increment()),
        dec: () => dispatch(decrement()),
        reset: () => dispatch(reset()),
        addU: (data) => dispatch(addUser(data)),
        changedU: (data) => dispatch(userChanged(data)),
        removeU: (index) => dispatch(removerUser(index))
    };
    // return bindActionCreators({
    //     inc:increment,
    //     dec:decrement,
    //     reset:reset,
    //     addU:addUser,
    //     removeU:removerUser
    // },dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(App);