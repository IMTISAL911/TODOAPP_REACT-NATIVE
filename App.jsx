



import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>HELLO WORLD</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black", // added background
  },
  heading: {
    color: "white",
    fontSize: 24, // optional for better visibility
    fontWeight: "bold",
  },
});

export default App;