import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Details = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details Screen</Text>

      {/* <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
      <TouchableOpacity style={{marginTop:20}} onPress={()=> navigation.goBack()}>
        <Text>GO BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;