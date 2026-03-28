import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screnns/home";
import Details from "../screnns/details";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  const dispatch = useDispatch();

  return (
    <View style={{ flex:1, padding:20 }}>
      <Text style={{ fontSize:20 }}>Menu</Text>

      <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("Details")}>
        <Text>Details</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          dispatch(logout());
          props.navigation.replace("Login");
        }}
      >
        <Text style={{ color:"red", marginTop:20 }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Details" component={Details} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;