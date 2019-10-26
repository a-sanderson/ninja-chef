import React from "react"
import {Platfrom, StatusBar} from "react-native"
import {createStackNavigator, createSwitchNavigator, createAppContainer} from "react-navigation"
import HomeScreen from "../screens/HomeScreen"
import AuthScreen from "../screens/AuthScreen"

const AppStack = createStackNavigator({Auth: AuthScreen})
const AppContainer = createAppContainer(AppStack)
export default AppContainer