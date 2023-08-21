import React from "react";
import {View, Text, Button} from 'react-native'
import UpperNavbar from "./UppperNavbar";

const Home = (props) => {

    const goToLogin = () =>{
        props.navigation.navigate('Login')
    }

    return (
        <View>
            <UpperNavbar></UpperNavbar>
        </View>
    )
}

export default Home