import React,{useState} from "react";
import { Text,View,Image,TouchableOpacity, Modal, Pressable } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides=[
    {
        key:"1",
        title:"Organize your tasks easily.",
        text:"With to do you can add elements and tags to find and complete your tasks efficiently.",
        image: require("../../assets/TutorialSec1.png"),
        backgroundColor:"bg-blue-900",
        imageBackground:"bg-blue-500"
    },
    {
        key:"2",
        title:"Complete your life goal",
        text:"to do helps you to achieve your goals, showing your progress and the sub-goals.",
        image: require("../../assets/TutorialSec2.webp"),
        backgroundColor:"bg-violet-900",
        imageBackground:"bg-violet-500"
    },
    {
        key:"3",
        title:"Show your achievements",
        text:"You should be proud of the goals you have completed. that's can take a look at them or share them to your friends.",
        image: require("../../assets/TutorialSec3.png"),
        backgroundColor:"bg-blue-950",
        imageBackground:"bg-blue-900",
        hasButton:true
    }

];


function Tutorial({navigation}) {
    const [currentBackground,setCurrentBackground]=useState(slides[0].backgroundColor);
    const [isModalVisible, setModalVisible] = useState(false);
    const handleGetStarted = () => {
        console.log("Get Started pressed");
        navigation.replace("Home");
      };

    const handleSkipButton = () => {
        console.log("Skip button pressed");
        setModalVisible(prev => !prev);
        return(
            <View>
                <Text className="text-white">Skidp</Text>
            </View>
        )
      };

    const handleSlideChange = (index) => {
        setCurrentBackground(slides[index].backgroundColor);
      };

    const renderItem = ({item})=>{
        return(
            <View className={`flex-1 `}>
            
            <View className="flex-1 items-center px-5">
            <View className="flex justify-center items-center mt-20">
            <View className={`absolute flex ${item.imageBackground}  h-[350px] w-[350px] rounded-full`}/>
            <Image 
                source={item.image}
                className=" w-[300px] h-[300px]  mx-auto"
            />
            </View>
            <View className="flex justify-center items-center mt-20">
                <Text className="text-white text-3xl font-bold w-[300px] text-center mt-10">{item.title}</Text>
                <Text className="text-white text-xl w-[300px] text-center mt-8">{item.text}</Text>
            </View>
            </View>

            {item.hasButton && (
                <TouchableOpacity
                    onPress={handleGetStarted}
                    className="bg-blue-600 mx-5 mb-36 py-4 rounded-lg"
                    >
                    <Text className="text-white text-center font-semibold text-base">
                        Get started
                    </Text>
                </TouchableOpacity>
                )}
            </View>);
                };
                console.log("tutorial");

    return (
        <View className={`flex-1 ${currentBackground}`}>
            <View className="flex flex-row mt-2 items-center">
                <Text className="text-3xl text-white p-2 ml-2">To do list</Text>
                <TouchableOpacity className="ml-auto mr-2" onPress={() => console.log("skip")}>
                    <Text className="text-xl text-white p-2 font-bold" onPress={handleSkipButton}>Skip</Text>
                </TouchableOpacity>
            </View>
            <AppIntroSlider
                data={slides}
                renderItem={renderItem}
                onDone={handleGetStarted}
                onSkip={handleGetStarted}
                onSlideChange={handleSlideChange}
                showSkipButton={false}
                renderNextButton={() => null}
                renderDoneButton={() => null}
                dotStyle={{backgroundColor:"white"}}
                activeDotStyle={{backgroundColor:"#3b82f6"}}
            />
            <Modal
                animationType="fade"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                console.log("Modal has been closed.");
                }}
            >
                <View className="absolute top-0 left-0 right-0 bottom-0 flex-1 items-center justify-center">
                    <Pressable className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70" 
                    onPress={() => setModalVisible(false)}
                    />
                <View className="bg-blue-600 h-52 w-80 rounded-3xl py-5 px-4 flex flex-col items-center">
                    <Text className="text-3xl text-white font-bold">Do you want to Skip?</Text>
                    <View className="flex flex-row mt-10  gap-10">
                        <TouchableOpacity className="bg-green-500 w-20 h-14 rounded-lg flex justify-center items-center">
                            <Text className="text-3xl" 
                            onPress={handleGetStarted}
                            >Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-red-500 w-20 h-14 rounded-lg flex justify-center items-center"
                            onPress={handleSkipButton}
                        >
                            <Text className="text-3xl">No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>

            </Modal>
        </View>
    );
}

export default Tutorial