import React from "react";
import { View, Text } from "react-native";

const CalenderWeek = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const currentDate = new Date();

    const weekDates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i - 3); 
        return date;
    });

    return (
        <View className="flex flex-col mt-10 w-full">
            <View className="flex flex-row  items-center py-2 px-5">
                <Text className="text-white text-2xl font-bold">{months[currentDate.getMonth()]}{" "}{currentDate.getFullYear()}</Text>
            </View>

            <View className="flex flex-row items-center justify-center py-4">
                {weekDates.map((date, index) => {
                    const dayName = days[date.getDay()];
                    const dayNum = date.getDate();
                    const isToday = date.toDateString() === currentDate.toDateString();

                    return (
                        <View
                            key={index}
                            className={`flex flex-col items-center justify-center h-16 w-16 mx-[1px] rounded-lg ${isToday ? "bg-blue-500" : ""}`}
                        >
                            <Text className={`text-xl font-bold text-center ${isToday ? "text-white" : "text-slate-300"}`}>
                                {dayNum}
                            </Text>
                            <Text className={`text-xl font-bold text-center ${isToday ? "text-white" : "text-slate-300"}`}>
                                {dayName}
                            </Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

export default CalenderWeek;
