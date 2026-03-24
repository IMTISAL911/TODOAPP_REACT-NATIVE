import React from "react";
import { Text, View } from "react-native";

const Details = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}> {/* ✅ HERE */}
      <Text style={{ color: "white" }}>Details screen</Text>
    </View>
  );
};

export default Details;