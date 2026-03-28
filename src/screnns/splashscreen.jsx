import React, { useEffect } from "react";
import { View, Text } from "react-native";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login"); // ALWAYS go to login
    }, 2000);
  }, []);

  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;