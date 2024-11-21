import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../../context/AuthContextApi";
import Wellcome from "../wellcome";
// import AppStackUser from "./homeStackNav";
import TabUser from "./tabUser";

const Stack = createNativeStackNavigator();

function AppNav() {
  const { authState } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState?.authenticated ? (
          <Stack.Screen
            name="TabUser"
            component={TabUser}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="wellcome"
            component={Wellcome}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default AppNav;