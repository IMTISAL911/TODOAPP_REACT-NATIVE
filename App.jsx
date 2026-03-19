

// todolist code

// import React, { useState } from "react";
// import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// const App = () => {
//   const [text, setText] = useState("");
//   const [display, setDisplay] = useState("");

//   const ADD = () => {
//     if (text.trim() === "") return; // Prevent adding empty strings
//     setDisplay(text);
//     setText("");
//   };

//   return (
//     <View style={styles.container}>
//       {/* Fixed: Use inputContainer style here */}
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="type something..."
//           placeholderTextColor="#888"
//           value={text}
//           // Fixed: Use onChangeText to get the string directly
//           onChangeText={(value) => setText(value)}
//         />
//         <TouchableOpacity style={styles.butn} onPress={ADD}>
//           <Text style={styles.buttonText}>ADD</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.resultView}>
//         <Text style={styles.label}>Typing..</Text>
//         <Text style={styles.liveText}>{text || "Waiting for Input..."}</Text>
        
//         <View style={{ marginTop: 20 }}>
//           <Text style={styles.label}>Last Added :</Text>
//           <Text style={styles.liveText}>{display || "nothing added yet"}</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 100,
//     alignItems: "center",
//     backgroundColor: "black",
//   },
//   inputContainer: {
//     flexDirection: 'row', // This aligns input and button horizontally
//     alignItems: "center",
//     width: "90%",
//     marginBottom: 30,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     backgroundColor: "white",
//     borderTopLeftRadius: 10,
//     borderBottomLeftRadius: 10,
//     paddingHorizontal: 15,
//     color: "black",
//   },
//   butn: {
//     height: 50,
//     backgroundColor: "#1E90FF",
//     justifyContent: "center",
//       borderTopRightRadius: 10,
//     borderBottomRightRadius: 10,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//   },
//   resultView: {
//     width: "90%",
//     padding: 20,
//     backgroundColor: "#222",
//     borderRadius: 10,
//   },
//   label: {
//     color: "#888",
//     fontSize: 12,
//     textTransform: "uppercase",
//   },
//   liveText: {
//     color: "yellow",
//     fontSize: 20,
//     fontWeight: "600",
//     marginTop: 5,
//   },
// });

// export default App; paddingHorizontal: 20,
//  

// todolist code





import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PageScrolview from "../TODOAPP_REACT-NATIVE/components/pagescrollview"
import Flatelistpage from "../TODOAPP_REACT-NATIVE/components/flatelist"
import Todo from "../TODOAPP_REACT-NATIVE/components/todo"
import DESIGN from "../TODOAPP_REACT-NATIVE/components/design"
const App =() =>{
  return(
<View style={styles.containner}>
  {/* <Text style={styles.heading}>Flex box</Text>
  <View style={styles.boxCntainer}>
    <View style={styles.box1}><Text style={styles.boxtext}>1</Text></View>
    <View style={styles.box2}><Text style={styles.boxtext}>2</Text></View>
    <View style={styles.box3}><Text style={styles.boxtext}>3</Text></View>
  </View> */}


  {/* <PageScrolview /> */}
  {/* <Flatelistpage /> */}

     {/* <Todo /> */} 
     <DESIGN />
</View>
  )
}

const styles = StyleSheet.create({
  containner:{
    flex:1,
    // justifyContent:"center"
    // alignItems:"center",
    backgroundColor:"black"
  },
//   heading:{
//     color:"white",
//     fontSize:20,
//     fontWeight:"bold"
//   },
//   boxCntainer:{
//     width:"90%",
//     flexDirection:"row",
//     alignItems:"center",
//     // justifyContent:"space-between",
//     justifyContent:"space-around",
//     // justifyContent:"flex-end",
   
//     marginTop: 20,
//   },
//   box1:{
//     backgroundColor:"red",
//     width:80,
//     height:60
//   },
//   box2:{
// backgroundColor:"aqua",
//     width:80,
//     height:60
//   },
//   box3:{
//     backgroundColor:"green",
//     width:80,
//     height:60
//   },
//   boxtext:{
//     color:"white",
//     textAlign:"center"
//   }
  
})
export default App