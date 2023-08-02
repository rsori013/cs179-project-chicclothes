import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screens
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/SigningUp/RegisterScreen";
//import GenderScreen from "./screens/SigningUp/GenderScreen";
import BottomTabNavigator from './BottomTabNavigator'; 

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "white" },
                headerTintColor: "grey",
            }}
        >
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerTintColor: "grey" }}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ headerTintColor: "grey" }}
            />
            <Stack.Screen
                name="MainTabs"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
