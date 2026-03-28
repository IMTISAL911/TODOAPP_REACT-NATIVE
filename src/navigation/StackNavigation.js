import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../screnns/splashscreen";
import Login from "../screnns/login";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen 
        name="splashscreen" 
        component={Splash} 
        options={{ headerShown:false }} 
      />

      <Stack.Screen name="login" component={Login} />

      {/* 🔥 THIS IS "Main" */}
      <Stack.Screen 
        name="Main" 
        component={DrawerNavigation} 
        options={{ headerShown:false }} 
      />

    </Stack.Navigator>
  );
};

export default StackNavigation;