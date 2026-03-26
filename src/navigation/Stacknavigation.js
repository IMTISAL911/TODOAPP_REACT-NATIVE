import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screnns/home"
import Details from "../screnns/details"
import Login from "../screnns/login"
import Splash from "../screnns/splashscreen"

const Stack = createNativeStackNavigator();

const StackNavigation = () =>{
    return(
<Stack.Navigator screenOptions={{ headerShown: false}}>
        {/* <Stack.Screen name="home" component={Home} /> */}
        {/* <Stack.Screen name="details" component={Details} /> */}
        <Stack.Screen name="splashscreen" component={Splash} />
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>


    )
    
}

export default StackNavigation