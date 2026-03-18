import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



const Todo = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="type here..."
                placeholderTextColor="#888"
                
                />
                <TouchableOpacity style={styles.button}>
                    <Text>ADD</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        paddingTop:100
    },
    inputContainer :{
        flexDirection:"row",
        alignItems:"center",
        width: "90%",
    marginBottom: 30,
    },
    input :{
        flex:1,
        height:50,
        backgroundColor:"white",
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        paddingHorizontal:15,
        color:"black"
    },
    button:{

        height:50,
        backgroundColor: "#1E90FF",
    }
})

export default Todo