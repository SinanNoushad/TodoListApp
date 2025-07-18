import React, { useEffect,useState } from "react";
import { View,Image,Animated } from "react-native";

function Intro({navigation}) {
    const fadeAnim = new Animated.Value(0);

    useEffect(() => {
        fadeIn();
        const timer = setTimeout(() => {
            navigation.replace("Tutorial");    
            
        },3500);
        return () => clearTimeout(timer);
    }, []);
    
    const fadeIn=()=>{
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }).start();
    }
    const ExitIntro=()=>{
        Animated.decay(fadeAnim, {
            velocity: 3,
            useNativeDriver: true,
          }).start();
    }

    return (
        <View className="flex-1 items-center justify-center">
            <Animated.Image
                source={require("../../assets/Logo.png")}
                style={{opacity:fadeAnim,height:100,width:100}}
            />
        </View>
    );
}

export default Intro;