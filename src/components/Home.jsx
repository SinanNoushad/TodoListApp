import React,{useState} from "react";
import { View, Text, TouchableOpacity,Image,Pressable, ScrollView } from "react-native";
import CalenderMonth from "./CalenderMonth";
import CalenderDaily from "./CalenderDaily";
import NewTaskButton from "../Ui/NewTaskButton";
import Header from "../Ui/Header";

const BottomNav=[
    {
        name:"Categories",
        image:require("../../assets/Categories.png")
    },
    {
        name:"Tasks",
        image:require("../../assets/Tasks.png")
    },
    {
        name:"Calender",
        image:require("../../assets/Calender.png")
    },
    {
        name:"Profile",
        image:require("../../assets/Profile.png")
    }
    
]

function Home({navigation}) {
    const [toggleMonthOrDay, setToggleMonthOrDay] = useState(true);

    return (
        <View className="flex-1 bg-zinc-900">
            <Header Title="To do list" />
            <ScrollView className="flex-1">
                <View className="flex flex-row justify-between items-center  w-[80%]  mx-auto mt-10 bg-zinc-700 rounded-lg">
                    <Pressable className={`flex-1 items-center justify-center ${toggleMonthOrDay ? 'bg-zinc-500' : 'bg-zinc-700'}  h-12 rounded-lg`}
                        onPress={() => setToggleMonthOrDay(true)}
                    >
                        <Text className={`text-2xl font-bold text-center ${toggleMonthOrDay ? 'text-blue-400' : 'text-white'} shadow-black`}>MONTHLY</Text>
                    </Pressable>
                    <Pressable className={`flex-1 items-center justify-center ${toggleMonthOrDay ? 'bg-zinc-700' : 'bg-zinc-500'} h-12 rounded-lg`}
                        onPress={() => setToggleMonthOrDay(false)}
                    >
                        <Text className={`text-2xl font-bold text-center ${toggleMonthOrDay ? 'text-white' : 'text-blue-400'} shadow-black`}>DAILY</Text>
                    </Pressable>
                </View>
                { toggleMonthOrDay  ? <CalenderMonth/> : <CalenderDaily/>}
                <NewTaskButton onPress={() => navigation.replace("NewTask")}/>
            </ScrollView>
            <View className="absolute bottom-0 w-full h-20 bg-zinc-800 flex flex-row justify-between items-center">
                    { BottomNav.map((item,index)=>{
                        return(
                            <TouchableOpacity key={index} className="mx-5">
                            <View className="flex-col items-center justify-center">
                            <Image
                                source={item.image}
                                style={{width:40,height:40,tintColor:"white"}}
                            />
                            <Text className="text-white">{item.name}</Text>
                            </View>
                            </TouchableOpacity>
                        )  
                    })
                    }
                
            </View>
        </View>
    );
};

export default Home;