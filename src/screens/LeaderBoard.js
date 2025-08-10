import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { LeaderBoardStyles } from "../Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import BackIcon from 'react-native-vector-icons/Ionicons';
import { height, width, font } from 'react-native-respix';
import LinearGradient from "react-native-linear-gradient";
import { GetData } from "../Services";

const LeaderBoard = ({ navigation }) => {
    const [topData, setTopData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            let fetchedData = await GetData();
            const sortedTopData = fetchedData.sort((first, second) => {
                if (first.rating !== second.rating) {
                    return second.rating - first.rating;
                }
                return second.votes - first.votes;
            }).slice(0, 5);
            setTopData(sortedTopData);
        } catch (e) {
            console.log(e);
            setTopData([]);
        }
    }

    const decideBadge = (index) => {
        if (index === 0) return "🥇";
        else if (index === 1) return "🥈";
        else if (index === 2) return "🥉";
        else if (index === 3) return `#4`;
        else return `#5`;
    }

    return (
        <SafeAreaView style={LeaderBoardStyles.container}>
            <View style={LeaderBoardStyles.mainContainer}>
                <View style={LeaderBoardStyles.header}>
                    <TouchableOpacity style={LeaderBoardStyles.backicon} onPress={() => navigation.goBack()}>
                        <BackIcon name="arrow-back" size={font(6)} color={"#FFFFFF"} />
                    </TouchableOpacity>
                    <Text style={LeaderBoardStyles.headerText}>LeaderBoard</Text>
                </View>
                <View style={LeaderBoardStyles.cardContainer}>
                    {topData.length !== 0 ? (
                        <FlatList
                            data={topData}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <LinearGradient
                                    style={LeaderBoardStyles.listsContainer}
                                    colors={['#121212', '#1E1E2F', '#2A2A40']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                >
                                    <View style={[LeaderBoardStyles.badgeContainer, index >= 3 && { top: height(0.7) }]}>
                                        <Text
                                            style={index <= 2 ? LeaderBoardStyles.badge : LeaderBoardStyles.badgeFF}
                                        >
                                            {decideBadge(index)}
                                        </Text>
                                    </View>
                                    <Text style={LeaderBoardStyles.ratingText} numberOfLines={1}>Ratings {item.rating}</Text>
                                    <Text style={LeaderBoardStyles.nameText} numberOfLines={1}>{item.name}</Text>
                                    <Text style={LeaderBoardStyles.taglineText} numberOfLines={1}>{item.tagline}</Text>
                                    <Text style={LeaderBoardStyles.disText} numberOfLines={4}>{item.description}</Text>
                                </LinearGradient>
                            )}
                        />
                    ) : (
                        <Text style={LeaderBoardStyles.emptyText}>No Data Yet</Text>
                    )}
                </View>
            </View>
        </SafeAreaView>

    )
}

export default LeaderBoard;