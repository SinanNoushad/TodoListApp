import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const NewTaskButton = ({onPress}) => {
    return (
        <TouchableOpacity 
            onPress={onPress} 
            className="h-16 bg-blue-500 mx-5 my-5 flex flex-row items-center justify-center gap-5 rounded-lg"
        >
            <Text className="text-white text-3xl font-bold">+</Text>
            <Text className="text-white text-lg font-bold">Create New Task</Text>
        </TouchableOpacity>
    )
}

export default NewTaskButton