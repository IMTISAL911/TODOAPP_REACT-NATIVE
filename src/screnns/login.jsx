import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  const handleLogin = () => {
    if (email === "123@gmail.com" && password === "123") {
      alert("Login Successful ✅");
      navigation.replace("home"); // move to Home
    } else {
      alert("Invalid Email or Password ❌");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN SCREEN</Text>

      <View style={styles.formContainer}>
        
        {/* Email */}
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        {/* Password with Eye Icon */}
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#aaa"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secure}
            style={styles.passwordInput}
          />

          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Icon
              name={secure ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
            />
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 24,
    marginBottom: 30,
    fontWeight: "bold",
  },

  formContainer: {
    width: "80%",
  },

  input: {
    backgroundColor: "#222",
    color: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  passwordInput: {
    flex: 1,
    color: "white",
    paddingVertical: 12,
  },

  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});