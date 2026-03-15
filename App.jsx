



import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const App = () => {
  const [text, setText] = useState("");
  const [display, setDisplay] = useState("");

  const ADD = () => {
    if (text.trim() === "") return; // Prevent adding empty strings
    setDisplay(text);
    setText("");
  };

  return (
    <View style={styles.container}>
      {/* Fixed: Use inputContainer style here */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="type something..."
          placeholderTextColor="#888"
          value={text}
          // Fixed: Use onChangeText to get the string directly
          onChangeText={(value) => setText(value)}
        />
        <TouchableOpacity style={styles.butn} onPress={ADD}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultView}>
        <Text style={styles.label}>Typing..</Text>
        <Text style={styles.liveText}>{text || "Waiting for Input..."}</Text>
        
        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>Last Added :</Text>
          <Text style={styles.liveText}>{display || "nothing added yet"}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: "center",
    backgroundColor: "black",
  },
  inputContainer: {
    flexDirection: 'row', // This aligns input and button horizontally
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
  butn: {
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
});

export default App;