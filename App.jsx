import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";

const App = () => {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const ADD = () => {
    // This updates the bottom text only when you click ADD
    setDisplayText(text);
    setText(""); 
  };

  return (
    <View style={styles.container}>
      {/* Input Row */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          placeholderTextColor="#888"
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <TouchableOpacity style={styles.button} onPress={ADD}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>

      {/* Real-time display (shows as you type) */}
      <View style={styles.resultView}>
        <Text style={styles.label}>Typing:</Text>
        <Text style={styles.liveText}>{text || "Waiting for input..."}</Text>
        
        {/* Submitted display (shows after clicking ADD) */}
        <Text style={[styles.label, {marginTop: 20}]}>Last Added:</Text>
        <Text style={styles.addedText}>{displayText || "Nothing added yet"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100, // Move it down from the top
    alignItems: "center",
    backgroundColor: "black",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginBottom: 30,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 15,
    color: "black",
  },
  button: {
    height: 50,
    backgroundColor: "#1E90FF",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
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
    textTransform: "uppercase",
  },
  liveText: {
    color: "yellow",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 5,
  },
  addedText: {
    color: "white",
    fontSize: 18,
    marginTop: 5,
  }
});

export default App;