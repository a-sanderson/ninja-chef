import React from "react"
import {ImageBackground, Text, TextInput, StyleSheet, TouchableOpacity, Image,View} from "react-native"

export default AuthScreen = props => {
    return (
        <ImageBackground source={require("../assets/images/authImage.jpeg")} style={{width: "100%", height:"100%", opacity: ".7"}}>
            <View> 
                <TouchableOpacity >
                    <Text>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>No Account? Sign Up Now</Text>
                </TouchableOpacity>
            </View>
                
        </ImageBackground>
    )
}