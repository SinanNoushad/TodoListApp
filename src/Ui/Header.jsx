import React from "react";
import { View, Text,Image, TouchableOpacity } from "react-native";
function Header({Title, onBackPress, navigation}) {
    return (
        <View className="w-full h-16 bg-zinc-900 flex flex-row justify-between items-center">
                <TouchableOpacity className="ml-5" onPress={() => onBackPress && navigation.replace(onBackPress)}>
                <Image
                    source={require("../../assets/Back.png")}
                    className=" w-[30px] h-[30px]"
                    style={{tintColor:"white"}}
                />
                </TouchableOpacity>
                <Text className="text-white w-[70%] text-2xl font-bold text-center">{Title}</Text>
                <TouchableOpacity className="mr-5">
                <Image
                    source={require("../../assets/Notification.png")}
                    className=" w-[30px] h-[30px]"
                    style={{tintColor:"white"}}
                />
                </TouchableOpacity>
            </View>
    )
}

export default Header;