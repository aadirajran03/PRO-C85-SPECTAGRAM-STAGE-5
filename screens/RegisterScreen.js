import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class PostCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() { }

    render() {
      registerUser =(email,password,confirmPassword,firdt_name,last_name) => {
        if(password==confirmPassword){
          firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      Alert.alert("User registed!!");
    });
    .catch(error => {
      Alert.alert(error.message);
    })
        }else{
          Alert.alert("Password don't match!");
        }
      };