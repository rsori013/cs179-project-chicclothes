import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import your screens when you have them  ~~Declare it here guys...
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";


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
					options={{
						headerTintColor: "grey",
					}}
			/>
            <Stack.Screen
					name="Register"
					component={RegisterScreen}
					options={{
						headerTintColor: "grey",
					}}
				/>
				{/* <Stack.Screen
					name="Gender"
					component={GenderScreen}
					options={{
						headerTintColor: "#grey",
					}}
				/>
				<Stack.Screen
					name="Age"
					component={AgeScreen}
					options={{
						headerTintColor: "grey",
					}}
				/>
				<Stack.Screen
					name="Height"
					component={HeightScreen}
					options={{
						headerTintColor: "grey",
					}}
				/>
				<Stack.Screen
					name="Weight"
					component={WeightScreen}
					options={{
						headerTintColor: "grey",
					}}
				/> */}
        </Stack.Navigator>
    );
};

export default StackNavigator;
