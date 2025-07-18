import React,{useState} from "react";
import { View, Text,Image, TouchableOpacity, TextInput, TextInputBase } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from "../Ui/Header";
function NewTask({navigation}) {
    const [selectedValue, setSelectedValue] = useState("Home");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    return(
        <View className="flex-1 bg-zinc-900">
            <Header Title={"Add/Edit Task"} onBackPress={"Home"} navigation={navigation}/>
            <View className="bg-white mt-10 mx-5">
                <Text>Task name</Text>
                <TextInput className="bg-zinc-500 mt-3 rounded-md"/>
                <Text className="mt-5">description</Text>
                <TextInput 
                    className="bg-zinc-500 mt-3 h-24 rounded-md"
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                />
                <View className="flex-row   mt-5 bg-red-500">
                <TextInput 
                    className="bg-zinc-500 rounded-md h-full w-full px-3"
                    placeholder="Date"
                    value={selectedDate.toLocaleDateString()}
                />
                <TouchableOpacity className="relative"
                    onPress={() => setShowDatePicker(true)}
                >
                <Image 
                        source={require('../../assets/Calender.png')} 
                        className="absolute top-3 right-3 w-6 h-6"
                />
                </TouchableOpacity>
                </View>
                  {showDatePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={selectedDate}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={(event, date) => {
                            setShowDatePicker(false);
                            if (date) {
                                setSelectedDate(date);
                            }
                        }}
                    />
                )}
                
                <View className="flex-row   mt-5 bg-red-500">
                <TextInput 
                    className="bg-zinc-500 rounded-md h-full w-full px-3"
                    placeholder="Time"
                    value={selectedTime.toLocaleTimeString()}
                />
                <TouchableOpacity className="relative"
                    onPress={() => setShowTimePicker(true)}
                >
                <Image 
                        source={require('../../assets/Calender.png')} 
                        className="absolute top-3 right-3 w-6 h-6"
                />
                </TouchableOpacity>
                </View>
                 {showTimePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={selectedTime}
                        mode={'time'}
                        is24Hour={true}
                        display="default"
                        onChange={(event, time) => {
                            setShowTimePicker(false);
                            if (time) {
                                setSelectedTime(time);
                            }
                        }}
                    />
                )}

                <TouchableOpacity className="bg-blue-500 mt-5 py-4 rounded-lg">
                    <Text className="text-white text-center font-semibold text-base">Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NewTask
