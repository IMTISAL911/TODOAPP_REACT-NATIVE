import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screnns/home"
import Details from "../screnns/details"

const Stack = createNativeStackNavigator();

const StackNavigation = () =>{
    return(
<Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>


    )
    
}

export default StackNavigation