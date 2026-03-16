import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";



const PAGESCOROLVIEW =() =>{
    return(

       <ScrollView>

        {[1,2,3,4,5,6].map((item)=>
        
         <View key={item} style={styles.container}>
            <Text style={styles.textStyle}>Category {item}</Text>

            <ScrollView horizontal={true} contentContainerStyle={styles.tileContainner}>
                {[1,2,3,4,5,6].map((tile)=>
                
                <View key={tile} style={styles.tileStyle}>
                    <Text>tile {tile}</Text>
                </View>
                
                )}
                
            </ScrollView>
        </View>
        
        )}


        
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container :{
        backgroundColor:"#ddd",
        marginBottom:5,
        height:250,
        padding:20,
       
    },
    textStyle:{
        fontSize:20,
        color:"#000"
    },
    tileContainner:{
alignItems:"center"
    },
    tileStyle:{
        width:150,
        height:100,
        backgroundColor:"#f90",
        marginRight:10,
        alignItems:'center',
        justifyContent:"center",
    }
})

export default PAGESCOROLVIEW