import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";



const Home = ({navigation}) =>{
    return(
<View style={{flex:1,  justifyContent:"center", alignItems:"center"}}>
    <Text style={{color:"Black"}}>HOME SCREEN</Text>
    <TouchableOpacity style={{marginTop:20}} onPress={()=>navigation.navigate("details")}>
        <Text>GO TO DETAILS SCREEN</Text>
    </TouchableOpacity>
</View>
    )
}

export default Home;