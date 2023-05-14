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

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }
    render() {
        return (
           
            sigIn = asyn (email, password) => {
              firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => {
                this.props.navigation.replace("Dashboard");
              })
      .catch(error => {
        Alert.alert(error.message);
      });
            };

            const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.07,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(28)
    },
    postContainer: {
        flex: 1
    },
    postCard: {
        margin: RFValue(20),
        backgroundColor: "#2a2a2a",
        borderRadius: RFValue(20)
    },
    actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: RFValue(10)
    },
    likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        flexDirection: "row",
        backgroundColor: "#eb3948",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(30)
    },
    likeText: {
        color: "white",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
    },
    authorContainer: {
        height: RFPercentage(10),
        padding: RFValue(10),
        flexDirection: "row"
    },
    authorImageContainer: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    profileImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: RFValue(100)
    },
    authorNameContainer: {
        flex: 0.85,
        padding: RFValue(10),
        justifyContent: "center"
    },
    authorNameText: {
        color: "white",
        fontSize: RFValue(20)
    },
    postImage: {
        width: "100%",
        alignSelf: "center",
        height: RFValue(200),
        borderTopLeftRadius: RFValue(20),
        borderTopRightRadius: RFValue(20),
        resizeMode: "contain"
    },
    captionContainer: {
        padding: RFValue(10)
    },
    captionText: {
        fontSize: 13,
        color: "white",
        paddingTop: RFValue(10)
    },
});

