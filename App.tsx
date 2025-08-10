import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Submission from "./src/screens/Submission";
import IdeasList from "./src/screens/IdeaListing";
import LeaderBoard from "./src/screens/LeaderBoard";

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Submission' component={Submission} options={{animation: 'fade_from_bottom'}}/>
        <Stack.Screen name='IdeasList' component={IdeasList} options={{animation: 'slide_from_right'}}/>
        <Stack.Screen name='LeaderBoard' component={LeaderBoard} options={{animation: 'slide_from_left'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;