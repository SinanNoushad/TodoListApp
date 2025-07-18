import React,{useEffect, useState} from "react";
import { View, Text,Image, Pressable } from "react-native";
const perWeek=7;


const weeks=[
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

const months=[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

const today=new Date();

function CalendarMonth() {
    const [date, setDate] = useState(new Date());
    const [prevMonthDays, setPrevMonthDays] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        getPrevMonthDays();
        FirstDay();
    }, [date]);

    const handleNextMonth = () => {
        setDate(new Date(date.getFullYear(),date.getMonth()+1,1))
    }

    const handlePrevMonth = () => {
        setDate(new Date(date.getFullYear(),date.getMonth()-1,1))
    }
    
    const Today=() => {
        setDate(new Date())
    }
    
    const getPrevMonthDays =()=>{
        setPrevMonthDays(new Date(date.getFullYear(),date.getMonth(),0).getDate())
    }

    const FirstDay=()=>{
        const day = new Date(date.getFullYear(),date.getMonth(),1).getDay();
        return day;
    }

    const currentMonthDays = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();

    const days = [];
    for (let i = 1; i <= currentMonthDays; i++) {
        days.push(i);
    }

    for (let i = 0; i < FirstDay(); i++) {
        days.unshift(prevMonthDays-i);
    }

    let j = 1;
    for (let i = days.length; i < 42; i++) {  
        days.push(j++);
    }

    

    const weeksInChunks=[];
    for (let i = 0; i < days.length; i += perWeek) {
        weeksInChunks.push(days.slice(i, i + perWeek));
    }
    
    console.log("weeksInChunks",weeksInChunks);

    const PrevAndNextMonthDays=(day,i)=>{
        return(
            <View key={i} className="flex-1 items-center ">
                <Text className="text-red-500 text-center flex-1 h-10">
                    {day}
                </Text>
            </View>
        )
    }

    const CurrentMonthDays=(day,i)=>{
        return(
            <View key={i} className="flex-1 items-center">
                <Text className="text-white text-center flex-1 h-10">
                    {day}
                </Text>
            </View>
        )
    }

    return (
        <View className=" flex mt-10">
            <View className="flex flex-row w-full h-16 items-center">
            <Pressable className="relative left-3 h-10 flex items-center justify-center"
                onPress={handlePrevMonth}
            >
                <Image
                source={require("../../assets/BackArrow.png")}
                className="w-[30px] h-[30px]"
                style={{tintColor:"white"}}
                />
            </Pressable>
            <Text className="flex-1 text-center text-2xl font-bold text-white">{months[date.getMonth()]}{" "}{date.getFullYear()}</Text>
            <Pressable className="relative right-3 h-10 flex items-center justify-center"
                onPress={handleNextMonth}
            >
                <Image
                source={require("../../assets/ForwardArrow.png")}
                className="w-[30px] h-[30px]"
                style={{tintColor:"white"}}
                />
            </Pressable>
            {(today.getFullYear()!=date.getFullYear() || today.getMonth()!=date.getMonth()) && (
               <Pressable className="absolute right-20 bg-blue-500 h-10 w-20 rounded-lg flex items-center justify-center"
                onPress={Today}
            >
                <Text className="text-white">Today</Text>
            </Pressable>
            ) }
            </View>
            <View className="flex flex-row w-full h-10 border-b-2 border-blue-200 items-center">
                {weeks.map((week,i)=>
                    <Text key={i} className="text-white text-center flex-1 ">
                        {week}
                    </Text>
                )}
            </View>
            <View className="mt-3">
                {
                    weeksInChunks.map((week,weekIndex)=>
                        <View key={weekIndex} className="flex flex-row">
                        {week.map((day, i) => {
                            const globalIndex = weekIndex * perWeek + i;

                            if (globalIndex < FirstDay() || globalIndex >= FirstDay() + currentMonthDays) {
                            return PrevAndNextMonthDays(day, globalIndex);
                            } else {
                            return CurrentMonthDays(day, globalIndex);
                            }
                        })}
                        </View>
                    )
                }
            </View>
        </View>
    );
}

export default CalendarMonth;