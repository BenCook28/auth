import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCaz1MOOEfSv-XQldeabjgMydYO47pXdEA",
            authDomain: "auth-3c5a3.firebaseapp.com",
            databaseURL: "https://auth-3c5a3.firebaseio.com",
            projectId: "auth-3c5a3",
            storageBucket: "auth-3c5a3.appspot.com",
            messagingSenderId: "992761254120"
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>);

    }
}
export default App;