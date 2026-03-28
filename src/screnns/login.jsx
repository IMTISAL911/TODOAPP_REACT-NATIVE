import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (email === "123@gmail.com" && password === "123") {
      dispatch(login());
      navigation.replace("Main"); // 🔥 GO TO DRAWER
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Text>Login</Text>

      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;