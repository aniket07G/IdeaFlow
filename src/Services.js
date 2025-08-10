import AsyncStorage from "@react-native-async-storage/async-storage";

const GetData = async () => {
    try{
        const data = await AsyncStorage.getItem("data");
        const fetchedData = JSON.parse(data);
        return fetchedData || [];
    }catch(e){
        console.log(e);
        return [];
    }
}

const SaveData = async (dataToBeSaved) => {
    try{
        let fetchedData = await GetData();
        fetchedData.push(dataToBeSaved);
        await AsyncStorage.setItem("data", JSON.stringify(fetchedData));
        console.log("Data is saved successfully");
    }catch(e){
        console.log(e);
        console.log("Getting error");
    }
}

const DeleteData = async (id) => {
    try{
        let fetchData = await GetData();
        const modifiedData = fetchData.filter((item)=>{
            return item.id!=id;
        });
        await AsyncStorage.setItem("data", JSON.stringify(modifiedData));
        console.log("YES it gets deleted");
    }catch(e){
        console.loe(e);
    }
}

export {
    SaveData,
    GetData,
    DeleteData
}