import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {View, Text} from 'react-native';
import reducer from './reducers'
import firebase from 'firebase';
import {Header} from './components/common'
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router'

class App extends Component {

    componentWillMount()
    {
        var config = {
            apiKey: "AIzaSyC9VewegaI4_ehz5UylwKgPY7kMjsdueis",
            authDomain: "manager-647b0.firebaseapp.com",
            databaseURL: "https://manager-647b0.firebaseio.com",
            projectId: "manager-647b0",
            storageBucket: "manager-647b0.appspot.com",
            messagingSenderId: "398079252504"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducer, {}, applyMiddleware(ReduxThunk))}>

                <Router></Router>

            </Provider>
        )
    }
}

export default App;