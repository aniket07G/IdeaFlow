import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    Alert,
    ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackIcon from "react-native-vector-icons/Ionicons";
import { SubmissionStyles } from "../Styles";
import { height, width, font } from "react-native-respix";
import { SaveData } from "../Services";
import { scheduleNotification } from "../notification";

const Submission = ({ navigation }) => {
    const [startupNanme, setStartupName] = useState("");
    const [tagline, setTagline] = useState("");
    const [discription, setDiscription] = useState("");
    const [loading, setLoading] = useState(false);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const submitData = async () => {
        setLoading(true);
        try {
            if (startupNanme.trim() === "") throw new Error("Invalid startup name");
            if (tagline.trim() === "") throw new Error("Invalid tagline");
            if (discription.trim() === "") throw new Error("Invalid discription");

            const DataToBeSubmitted = {
                id: Date.now(),
                name: startupNanme.trim(),
                tagline: tagline.trim(),
                description: discription.trim(),
                rating: getRandomInt(10, 100),
                votes: getRandomInt(10, 1000),
                Liked: false,
            };

            await SaveData(DataToBeSubmitted);
            await new Promise((resolve) => setTimeout(resolve, 1500));

            scheduleNotification(DataToBeSubmitted.id, DataToBeSubmitted.name)
                .then(() => {
                    console.log("Notification scheduled successfully!");
                })
                .catch((error) => {
                    console.error("Failed to schedule notification:", error);
                });

            navigation.replace("IdeasList");
        } catch (e) {
            console.log(e);
            Alert.alert(e.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={SubmissionStyles.container}>
            <View style={SubmissionStyles.header}>
                <TouchableOpacity
                    style={SubmissionStyles.backicon}
                    onPress={() => navigation.goBack()}
                >
                    <BackIcon name="arrow-back" size={font(6)} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={SubmissionStyles.headerText}>Submit Ideas</Text>
            </View>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : height(2)}
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: height(2) }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={SubmissionStyles.inputContainer}>
                        <Text style={[SubmissionStyles.maintext, { marginTop: height(6) }]}>
                            Startup Name
                        </Text>
                        <TextInput
                            style={SubmissionStyles.textInput}
                            value={startupNanme}
                            onChangeText={setStartupName}
                            placeholder="Enter a Startup Name"
                            placeholderTextColor="#AAAAAA"
                        />
                        <Text style={[SubmissionStyles.maintext, { marginTop: height(2) }]}>
                            Tagline
                        </Text>
                        <TextInput
                            style={SubmissionStyles.textInput}
                            value={tagline}
                            onChangeText={setTagline}
                            placeholder="Enter a Tagline"
                            placeholderTextColor="#AAAAAA"
                        />
                        <Text style={[SubmissionStyles.maintext, { marginTop: height(2) }]}>
                            Description
                        </Text>
                        <TextInput
                            style={SubmissionStyles.textInputDis}
                            value={discription}
                            onChangeText={setDiscription}
                            placeholder="Enter a Description"
                            placeholderTextColor="#AAAAAA"
                            multiline
                            textAlignVertical="top"
                        />
                        <TouchableOpacity
                            style={SubmissionStyles.submitButton}
                            onPress={() => submitData()}
                        >
                            {!loading ? (
                                <Text style={SubmissionStyles.submiText}>Submit</Text>
                            ) : (
                                <ActivityIndicator size="large" color="#FFFFFF" />
                            )}
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Submission;
