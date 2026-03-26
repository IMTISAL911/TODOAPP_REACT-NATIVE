import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("login"); // move to Login screen
    }, 3000); // 3 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My App</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});