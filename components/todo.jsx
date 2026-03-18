import React,{useState} from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



const Todo = () =>{
    const [text, setTxt] = useState("");
    const [display, setDisplay]= useState([])
    // const [display, setDisplay]= useState("")

    const add =() =>{
    // console.warn("hello buddy");
    if(text.trim() === "") return;
    setDisplay([...display,text])
    setTxt("");
    }

    const dleet = () =>{
        setDisplay([""]);
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

            {/* <View style={{width:"90%", backgroundColor:"#222" ,padding: 20, borderRadius: 10,}}> */}
   {/* {display.map((item,index)=>(
    <Text key={index} style={{color:"white"}}>{item}</Text>
   ))} */}

   {/* <Text>Typing...</Text>
   <Text>{text || "waiting for input..."}</Text>

   <View>
    <Text>last added:</Text>
    <Text>{display || "nothing added yet"}</Text>
   </View>
                
            </View> */}
<ScrollView
style={{flex:1}}
contentContainerStyle={{flexGrow: 1,  paddingHorizontal:20}}
showsVerticalScrollIndicator={false}
>
<View style={[styles.resultView,{width:"100%"}]}>
       <Text style={styles.label}>Typing..</Text>
         <Text style={styles.liveText}>{text || "Waiting for Input..."}</Text>
                 <View style={{ marginTop: 20 }}>
           <Text style={styles.label}>Last Added :</Text>
           {display.map((item,index)=>(
            <Text key={index} style={styles.liveText}>{item || "nothing added yet"}</Text>
           ))}
           {/* <Text style={styles.liveText}>{display || "nothing added yet"}</Text> */}
         </View>
       </View>
</ScrollView>
<TouchableOpacity style={styles.delete} onPress={dleet}>
    <Text style={styles.dlettext}>DLEET</Text>
</TouchableOpacity>
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
    },
    resultView: {
    width: "90%",
    padding: 20,
    backgroundColor: "#222",
    borderRadius: 10,
  },
  label: {
    color: "#888",
    fontSize: 12,
    // textTransf,
  },

  liveText: {
    color: "yellow",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 5,
  },
  delete:{
    backgroundColor:"red",
    height:50,
    paddingHorizontal:20,
    // alignItems:"center",
    justifyContent:'center',
    marginBottom:10,
    marginTop:10,
    borderRadius:10,
    
  },
  dlettext:{
   
color:"white",
fontWeight:"bold"
  },
})

export default Todo