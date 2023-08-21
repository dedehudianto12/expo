import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import {SearchBar} from 'react-native-elements'

const UpperNavbar = () =>{
    return (
        <View style={styles.navbar}>
            <View style={styles.leftContainer}>
                <TextInput style={styles.searchInput} placeholder="Search" />
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity style={styles.iconContainer}>
                    <Image source={require('../assets/cart-icon.png')} style={styles.icon} />
                    <Text style={styles.notification}>12</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.avatarContainer}>
                    <Image source={require('../assets/avatar.png')} style={styles.avatar} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    navbar:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'white',
        elevation: 5,
    },
    notification:{
        position:"absolute",
        backgroundColor: "#ff0000",
        color: "#ffffff",
        borderRadius: 10,
        padding: 2,
        top: -12,
        right: -10
    },
    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 0.4 * windowWidth
    },
    searchInput: {
      flex: 1,
      height: 30,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        marginHorizontal: 10,
        position: "relative",
    },
    icon: {
        width: 24,
        height: 24,
    },
    avatarContainer: {
        marginLeft: 10,
        borderRadius: 20,
        overflow: 'hidden',
    },
    avatar: {
        width: 40,
        height: 40,
    }
})

export default UpperNavbar