import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { IdeasListStyles } from "../Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import BackIcon from 'react-native-vector-icons/Ionicons';
import { font } from 'react-native-respix';
import IdeasIcon from 'react-native-vector-icons/Ionicons';
import HeartIcon from 'react-native-vector-icons/EvilIcons';
import HeartIconLiked from 'react-native-vector-icons/AntDesign';
import FilterIcon from 'react-native-vector-icons/Ionicons';
import { GetData, DeleteData, SaveData } from "../Services";

const IdeasList = ({ navigation }) => {
    const [ideas, setIdeas] = useState([]);
    const [show, setShow] = useState(true);
    const [key, setKey] = useState(null);
    const [filter, setFilter] = useState(false);
    const [filterKey, setFilterKey] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            let fetchedData = await GetData();
            fetchedData.sort((first, second) => first.id - second.id);
            if (filterKey !== "") {
                fetchedData = filterBy(filterKey, fetchedData);
            }
            setIdeas(fetchedData);
        } catch (e) {
            console.log(e);
            setIdeas([]);
        }
    }

    const handleVotes = async (dataToBeSaved) => {
        try {
            dataToBeSaved.votes++;
            dataToBeSaved.Liked = true;
            await DeleteData(dataToBeSaved.id);
            await SaveData(dataToBeSaved);
            await fetchData();
            console.log("vote added successfully");
        } catch (e) {
            console.log(e);
        }
    }

    const filterBy = (key, data) => {
        if (key === "Ratings") {
            let dataToBeFiltered = data !== null ? data : [...ideas];
            dataToBeFiltered.sort((first, second) => {
                if (first.rating != second.rating) {
                    return second.rating - first.rating;
                }
                return second.votes - first.votes;
            });
            if (data != null) return dataToBeFiltered;
            setIdeas(dataToBeFiltered);
        } else if (key === "Votes") {
            let dataToBeFiltered = data !== null ? data : [...ideas];
            dataToBeFiltered.sort((first, second) => {
                if (first.votes != second.votes) {
                    return second.votes - first.votes;
                }
                return second.rating - first.rating;
            })
            if (data != null) return dataToBeFiltered;
            setIdeas(dataToBeFiltered);
        }
    }

    return (
        <SafeAreaView style={IdeasListStyles.container}>
            <View style={IdeasListStyles.mainContainer}>
                <View style={IdeasListStyles.header}>
                    <TouchableOpacity style={IdeasListStyles.backicon} onPress={() => navigation.goBack()}>
                        <BackIcon name="arrow-back" size={font(6)} color={"#FFFFFF"} />
                    </TouchableOpacity>
                    <Text style={IdeasListStyles.headerText}>Ideas</Text>
                    {!filter && (
                        <TouchableOpacity
                            style={IdeasListStyles.filterContainer}
                            onPress={() => setFilter(true)}>
                            <FilterIcon name="filter-circle" size={font(5.5)} color={"#FFFFFF"} />
                        </TouchableOpacity>
                    )}
                    {filter && (
                        <View style={IdeasListStyles.filterBox}>
                            <TouchableOpacity
                                style={[IdeasListStyles.filterButton, filterKey === "Ratings" && { backgroundColor: '#3A3A3A' }]}
                                onPress={() => {
                                    filterBy("Ratings", null);
                                    setFilterKey("Ratings")
                                    setFilter(false);
                                }}>
                                <Text style={[IdeasListStyles.filterText, filterKey === "Ratings" && { color: '#A0A0A0' }]}>
                                    Ratings
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[IdeasListStyles.filterButton, filterKey === "Votes" && { backgroundColor: '#3A3A3A' }]}
                                onPress={() => {
                                    filterBy("Votes", null);
                                    setFilterKey("Votes");
                                    setFilter(false);
                                }}>
                                <Text style={[IdeasListStyles.filterText, filterKey === "Votes" && { color: '#A0A0A0' }]}>
                                    Votes
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
                <View style={IdeasListStyles.ideasContainer}>
                    {ideas.length !== 0 ? (
                        <FlatList
                            data={ideas}
                            keyExtractor={(item) => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            onScroll={() => setFilter(false)}
                            scrollEventThrottle={16}
                            renderItem={({ item }) => (
                                <>
                                    <View style={[IdeasListStyles.listsContainer, show && item.id === key && { marginVertical: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }]}>
                                        <View style={[IdeasListStyles.leftPart, show && item.id === key && { borderBottomLeftRadius: 0 }]}>
                                            <IdeasIcon name="bulb" size={font(5)} color={"#FFD700"} />
                                            <Text style={IdeasListStyles.ratingText}>{item.rating}</Text>
                                        </View>
                                        <TouchableOpacity style={IdeasListStyles.middlePart} activeOpacity={1}
                                            onPress={() => {
                                                if (show && key === item.id) {
                                                    setShow(false);
                                                    setKey(null);
                                                } else if ((show && key !== item.id) || !show) {
                                                    setShow(true);
                                                    setKey(item.id);
                                                }
                                            }}
                                        >
                                            <Text
                                                style={IdeasListStyles.nameText}
                                                numberOfLines={1}
                                                ellipsizeMode="tail">
                                                {item.name}
                                            </Text>
                                            <Text
                                                style={IdeasListStyles.taglineText}
                                                numberOfLines={2}
                                                ellipsizeMode="tail">
                                                {item.tagline}
                                            </Text>
                                        </TouchableOpacity>
                                        <View style={[IdeasListStyles.rightPart, show && item.id === key && { borderBottomRightRadius: 0 }]}>
                                            <TouchableOpacity
                                                disabled={item.Liked ? true : false}
                                                onPress={() => handleVotes(JSON.parse(JSON.stringify(item)))}
                                            >
                                                {item.Liked ? (
                                                    <HeartIconLiked name="heart" size={font(4.7)} color={"#FFFFFF"} />
                                                ) : (
                                                    <HeartIcon name="heart" size={font(7)} color={"#FFFFFF"} />
                                                )}
                                            </TouchableOpacity>
                                            <Text style={IdeasListStyles.votesText}>{item.votes}</Text>

                                        </View>
                                    </View>
                                    {(show && item.id === key) && (
                                        <View style={IdeasListStyles.showMoreContainer}>
                                            <View style={IdeasListStyles.showMoreContainer1}>
                                                <Text style={IdeasListStyles.disText}>{item.description}</Text>
                                            </View>
                                        </View>
                                    )}
                                </>
                            )}
                        />
                    ) : (
                        <Text style={IdeasListStyles.emptyText}>No Ideas Yet</Text>
                    )}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default IdeasList;