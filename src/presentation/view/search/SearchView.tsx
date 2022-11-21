import { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchView = () => {

    useEffect(() => {
        getTokenAsyn()
    },[])

    const getTokenAsyn = async() => {
        const value = await AsyncStorage.getItem('@storage_Key')
        console.log("TOKEN FROM STORAGE ---> ",value)
    }

    return(
        <SafeAreaView>
            <Text>Search Screen!!</Text>
        </SafeAreaView>
    )
}

export default SearchView;