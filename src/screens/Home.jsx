import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}> {/* ✅ HERE */}
      <Text style={{ color: "white" }}>Home screen</Text>

      <TouchableOpacity
        style={{ backgroundColor: "blue", padding: 10, marginTop: 20 }}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={{ color: "white" }}>GO TO DETAILS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;