import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
    
        <View style={styles.curve} />
        <Text style={{fontWeight:"bold",fontSize:40 }}>MY_APP</Text>
      </View>
       
       <ScrollView style={{marginTop:10}}>
{[1,2,3,4,5,6,7,8,9,10].map((items) =>

<View key={items} style={styles.cartscontainer}>
            <Text>catergy{items}</Text>

     <ScrollView horizontal={true} contentContainerStyle={styles.tilesScrollview}>
        {[1,2,3,4,5,6].map((tiles) =>
        
        <View key={tiles} style={styles.tylescontainer}>
          <Text>tiles{tiles}</Text>
        </View>
        
        )}
        
     </ScrollView>

        </View>

)}

        
       </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    backgroundColor: "red",
    height: 220,
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
  },

  curve: {
    width: 300,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 150,
    position: "absolute",
    bottom: -75,
  },
  cartscontainer:{
   marginBottom:5,
        height:250,
        padding:20,
   backgroundColor:"#ddd",
  },

  tilesScrollview:{
 
alignItems:"center"
    },
  

  tylescontainer:{
    width:150,
    height:100,
    backgroundColor:"#f90",
        marginRight:10,
        alignItems:'center',
        justifyContent:"center",
  }

});

export default App;