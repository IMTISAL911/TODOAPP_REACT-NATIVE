import React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";


const Login = () => {
    return(
        <View style={styles.containner}>
            <Text style={styles.text}>LOGIN SCREEN</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containner:{
        flex:1,
        backgroundColor:"black",
        alignItems:"center",
        
    },
    text:{
        color:"white",
        marginTop:"60%"
    }
})

export default Login;