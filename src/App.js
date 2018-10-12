import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
                apiKey: 'AIzaSyDJMQc7BZ6TCN-ZC4l4albvJhaUb1cchA0',
                authDomain: 'auth-14676.firebaseapp.com',
                databaseURL: 'https://auth-14676.firebaseio.com',
                projectId: 'auth-14676',
                storageBucket: 'auth-14676.appspot.com',
                messagingSenderId: '567061227076'
              });
        }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
