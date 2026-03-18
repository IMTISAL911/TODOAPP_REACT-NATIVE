import React,{useState} from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



const Todo = () =>{
    const [text, setTxt] = useState("");
    const [display, setDisplay]= useState([])

    const add =() =>{
    // console.warn("hello buddy");
    if(text.trim() === "") return;
    setDisplay([...display,text])
    setTxt("");
    }
    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="type here..."
                placeholderTextColor="#888"
                value={text}
                onChangeText={(value) => setTxt(value)}
                />
                <TouchableOpacity style={styles.button} onPress={add}>
                    <Text style={styles.textbtn}>ADD</Text>
                </TouchableOpacity>
            </View>

            <View style={{width:"90%", backgroundColor:"#222" ,padding: 20, borderRadius: 10,}}>
   {display.map((item,index)=>(
    <Text key={index} style={{color:"white"}}>{item}</Text>
   ))}
                
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
        justifyContent:"center",
        justifyContent: "center",
        paddingHorizontal:"15",
      borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    },
    textbtn:{
        color:"white",
        fontWeight:"bold"
    }
})

export default Todo