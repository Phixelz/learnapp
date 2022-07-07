import React from "react";
import { ThemeProvider } from "styled-components";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import theme from "./src/global/styles/theme";

import { SignIn } from "./src/pages/SignIn";
import { Home } from "./src/pages/Home";
import { Perfil } from "./src/pages/Perfil";
import { Search } from "./src/pages/Search";
import { LearnProgram } from "./src/pages/LearnProgram";
import { Suggestions } from "./src/pages/Suggestions";
import { Course } from "./src/pages/Course";
import { Cart } from "./src/pages/Cart";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="SignIn"
        >
          <Stack.Screen
            name="SignIn"
            component={SignIn}
          />
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Perfil"
            component={Perfil}
          />
          <Stack.Screen
            name="Search"
            component={Search}
          />
          <Stack.Screen
            name="LearnProgram"
            component={LearnProgram}
          />
          <Stack.Screen
            name="Suggestions"
            component={Suggestions}
          />
          <Stack.Screen
            name="Course"
            component={Course}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;