import { StyleSheet } from "react-native";
import { hasSuffix } from "react-native-reanimated/lib/typescript/common";
import { height, width, font } from 'react-native-respix';
import { Color } from "react-native/types_generated/Libraries/Animated/AnimatedExports";

const LeaderBoardStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        width: width(100),
        height: height(8),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#000000',
    },
    headerText: {
        color: "#FFFFFF",
        fontSize: font(4),
        fontFamily: 'Poppins-Bold',
        includeFontPadding: false
    },
    backicon: {
        position: 'absolute',
        left: width(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width(100),
    },
    listsContainer: {
        backgroundColor: "#121212",
        marginVertical: height(1),
        width: width(90),
        height: height(20),
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width(4)
    },
    ratingText: {
        fontFamily: "Poppins-SemiBold",
        fontSize: font(3),
        color: "#FFD700",
        includeFontPadding: false,
    },
    nameText: {
        fontFamily: "Poppins-Bold",
        fontSize: font(2.6),
        color: "#FFFFFF",
        includeFontPadding: false,
    },
    taglineText: {
        fontFamily: "Poppins-Medium",
        fontSize: font(2),
        color: "#9CDCFE",
        includeFontPadding: false,
    },
    disText: {
        fontFamily: "Poppins-Regular",
        fontSize: font(1.7),
        color: "#B0B0B0",
        includeFontPadding: false,
        textAlign: 'center'
    },
    badge: {
        fontSize: font(7),
    },
    badgeFF: {
        fontSize: font(5),
        fontFamily: 'Poppins-Italic',
        color: '#FFFFFF'
    },
    badgeContainer: {
        justifyContent: 'center',
        alignItems: "center",
        position: 'absolute',
        top: -7,
        left: width(4)
    },
    emptyText: {
        color: '#FFFFFF',
        fontFamily: "Poppins-Medium",
        fontSize: font(3),
    }
});

const IdeasListStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        width: width(100),
        height: height(8),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#000000',
    },
    headerText: {
        color: "#FFFFFF",
        fontSize: font(4),
        fontFamily: 'Poppins-Bold',
        includeFontPadding: false
    },
    backicon: {
        position: 'absolute',
        left: width(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    ideasContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width(100),
    },
    listsContainer: {
        backgroundColor: '#00BFFF',
        marginVertical: height(1),
        width: width(90),
        height: height(9),
        flexDirection: 'row',
        borderRadius: 16,
    },
    leftPart: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#121212",
        borderTopLeftRadius: 18,
        borderBottomLeftRadius: 15,
    },
    middlePart: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: "#121212",
    },
    rightPart: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#121212",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 18,
    },
    nameText: {
        color: "#FFFFFF",
        fontSize: font(3),
        fontFamily: 'Poppins-Medium',
        includeFontPadding: false,
    },
    taglineText: {
        color: "#B3B3B3",
        fontSize: font(2),
        fontFamily: 'Poppins-Light',
        includeFontPadding: false,
    },
    ratingText: {
        color: "#00BCD4",
        fontSize: font(3),
        fontFamily: 'Poppins-Light',
        includeFontPadding: false,
    },
    votesText: {
        color: "#CCCCCC",
        fontSize: font(3),
        fontFamily: 'Poppins-Light',
        includeFontPadding: false,
    },
    showMoreContainer: {
        width: width(90),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BFFF',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    showMoreContainer1: {
        width: width(90),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#121212",
        paddingBottom: font(2),
        paddingHorizontal: font(2),
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 18,
    },
    disText: {
        textAlign: 'justify',
        color: "#999999",
        fontFamily: 'Poppins-Light',
        includeFontPadding: false,
    },
    filterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: width(4)
    },
    filterBox: {
        position: 'absolute',
        right: width(4),
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1E90FF",
        padding: font(0.7),
        borderRadius: font(2)
    },
    filterText: {
        fontFamily: 'Poppins-Medium',
        includeFontPadding: false,
        color: "#FFFFFF",
        fontSize: font(2.5),
    },
    emptyText: {
        color: '#FFFFFF',
        fontFamily: "Poppins-Medium",
        fontSize: font(3),
    }
});

const SubmissionStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        width: width(100),
        height: height(8),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    headerText: {
        color: "#FFFFFF",
        fontSize: font(4),
        fontFamily: 'Poppins-Bold',
        includeFontPadding: false
    },
    backicon: {
        position: 'absolute',
        left: width(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    textInput: {
        backgroundColor: "#1E1E1E",
        width: width(80),
        height: height(7),
        borderWidth: 1,
        borderColor: "#FFFFFF",
        borderRadius: font(3),
        fontFamily: 'Poppins-Regular',
        includeFontPadding: false,
        fontSize: font(3),
        paddingHorizontal: width(5),
        color: "#AAAAAA",
        margin: font(1),
    },
    textInputDis: {
        backgroundColor: "#1E1E1E",
        width: width(80),
        height: height(25),
        borderWidth: 1,
        borderColor: "#FFFFFF",
        borderRadius: font(3),
        fontFamily: 'Poppins-Regular',
        includeFontPadding: false,
        fontSize: font(3),
        paddingHorizontal: width(5),
        color: "#AAAAAA",
        margin: font(1),
        textAlignVertical: 'top',
    },
    maintext: {
        color: "#FFFFFF",
        fontSize: font(4),
        fontFamily: 'Poppins-SemiBold',
        marginLeft: width(3),
        includeFontPadding: false,
    },
    submitButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2196F3',
        width: width(45),
        borderRadius: font(6),
        height: height(8),
        alignSelf: 'center',
        marginTop: height(1.5)
    },
    submiText: {
        fontFamily: 'Poppins-SemiBold',
        includeFontPadding: false,
        fontSize: font(4),
        color: "#FFFFFF",
    }
});


const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    header: {
        flexDirection: 'row',
        width: width(100),
        height: height(8),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    hometext: {
        color: "#FFFFFF",
        fontSize: font(4),
        fontFamily: 'Poppins-Bold',
        includeFontPadding: false
    },
    homeicon: {
        position: 'absolute',
        left: width(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: width(90),
        height: height(30),
    },
    appText: {
        fontSize: font(7),
        fontFamily: 'Poppins-SemiBold',
        includeFontPadding: false,
        color: "#FFFFFF",
        marginTop: height(20)
    },
    disText: {
        textAlign: 'center',
        fontFamily: "Poppins-Regular",
        includeFontPadding: false,
        color: "#B3B3B3",
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    bottomBar: {
        flexDirection: 'row',
        backgroundColor: "#121212",
        width: width(100),
        height: height(15),
        gap: width(20),
    },
    bottomBarSectionL: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: width(10)
    },
    bottomBarSectionR: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: width(10)
    },
    icontText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins-SemiBold',
        includeFontPadding: false,
    },
    submitContainer: {
        position: 'absolute',
        backgroundColor: "#121212",
        justifyContent: 'center',
        alignItems: 'center',
        width: width(30),
        height: height(15),
        left: '50%',
        top: height(72),
        transform: [{ translateX: -width(30) / 2 }],
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#000000',
    },
    bttnContainer: {
        backgroundColor: "rgba(255,255,255,0.05)",
        justifyContent: 'center',
        alignItems: 'center',
        width: width(15),
        height: height(7),
        borderRadius: 50,
    },
    seperation: {
        width: width(1),
        height: height(11),
        backgroundColor: '#000000',
        position: 'absolute',
        left: '50%',
        bottom: 0,
        transform: [{ translateX: -width(1) / 2 }],
    }
});

export {
    HomeStyles,
    SubmissionStyles,
    IdeasListStyles,
    LeaderBoardStyles
}
