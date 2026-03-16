import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const PAGESCOROLVIEW = () => {

const categories = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const tiles = [1,2,3,4,5,6];

return (

<FlatList
data={categories}
keyExtractor={(item) => item.toString()}

renderItem={({item}) => (

<View style={styles.container}>

<Text style={styles.textStyle}>Category {item}</Text>

<FlatList
data={tiles}
horizontal
keyExtractor={(tile) => tile.toString()}

renderItem={({item}) => (
<View style={styles.tileStyle}>
<Text>Tile {item}</Text>
</View>
)}

/>

</View>

)}

/>

);

};

const styles = StyleSheet.create({

container:{
backgroundColor:"#ddd",
marginBottom:5,
height:250,
padding:20
},

textStyle:{
fontSize:20
},

tileStyle:{
width:150,
height:100,
backgroundColor:"#f90",
marginRight:10,
justifyContent:"center",
alignItems:"center"
}

});

export default PAGESCOROLVIEW;