// g++ -g HelloWorld.cpp -o HelloWorld.exe
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from "../signup";
import Wellcome from "../wellcome";
import LoginScreen from "../login";
import HomeTabs from '../../components/home';
import Navlist from '../../components/navlist';
import Notification from '../../components/notification';
import Account from '../../components/account';

const Stack = createStackNavigator();

export default function AppStackUser () {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Wellcome"
          component={Wellcome}
          options={{ title: "Trang chủ" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="navlist"
          component={Navlist}
          options={{ title: "Menu" }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ title: "Thông báo" }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{ title: "account" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
