import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HomeStyles } from "../Styles";
import { createNotificationChannel } from "../notification";
import { font } from "react-native-respix";
import HomeIcon from "react-native-vector-icons/MaterialCommunityIcons";
import LeaderBoardIcon from "react-native-vector-icons/MaterialIcons";
import IdeasIcon from "react-native-vector-icons/FontAwesome5";
import SubmitIcon from "react-native-vector-icons/Entypo";

const AppDis = "Spark your creativity, let AI refine your vision, and watch the best ideas rise through the power of community votes";

const Home = ({ navigation }) => {

    const initialize = async () => {
        try {
            const value = await AsyncStorage.getItem("data");
            if (value === null) {
                await AsyncStorage.setItem("data", JSON.stringify([]));
                console.log("Key is generated");
            } else {
                console.log("Key exists already");
            }
        } catch (e) {
            console.log("Error initializing data:", e);
        }
    };

    useEffect(() => {
        createNotificationChannel();
        initialize();
    }, []);

    return (
        <SafeAreaView style={HomeStyles.container}>
            <View style={HomeStyles.header}>
                <View style={HomeStyles.homeicon}>
                    <HomeIcon name="home-circle" size={font(7)} color="#FFFFFF" />
                </View>
                <Text style={HomeStyles.hometext}>Home</Text>
            </View>
            <View style={HomeStyles.middleContainer}>
                <Text style={HomeStyles.appText}>IdeaFlow</Text>
                <Text style={HomeStyles.disText}>{AppDis}</Text>
            </View>
            <View style={HomeStyles.bottomContainer}>
                <View style={HomeStyles.bottomBar}>
                    <View style={HomeStyles.bottomBarSectionL}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity
                                style={HomeStyles.bttnContainer}
                                onPress={() => navigation.navigate("LeaderBoard")}
                            >
                                <LeaderBoardIcon
                                    name="leaderboard"
                                    size={font(7)}
                                    color="#FFFFFF"
                                />
                            </TouchableOpacity>
                            <Text style={HomeStyles.icontText}>LeaderBoard</Text>
                        </View>
                    </View>
                    <View style={HomeStyles.bottomBarSectionR}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity
                                style={HomeStyles.bttnContainer}
                                onPress={() => navigation.navigate("IdeasList")}
                            >
                                <IdeasIcon name="lightbulb" size={font(7)} color="#FFFFFF" />
                            </TouchableOpacity>
                            <Text style={HomeStyles.icontText}>IdeasList</Text>
                        </View>
                    </View>
                </View>
                <View style={HomeStyles.seperation}>
                    <Text>{null}</Text>
                </View>
            </View>
            <View style={HomeStyles.submitContainer}>
                <TouchableOpacity
                    style={HomeStyles.bttnContainer}
                    onPress={() => navigation.navigate("Submission")}
                >
                    <SubmitIcon
                        name="upload-to-cloud"
                        size={font(7)}
                        color="#FFFFFF"
                    />
                </TouchableOpacity>
                <Text style={HomeStyles.icontText}>Submit</Text>
            </View>
        </SafeAreaView>
    );
};

export default Home;
