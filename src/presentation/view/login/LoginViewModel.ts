import { useEffect } from "react";
import { Linking } from "react-native";
import AuthenticationAPIDataSourceImpl from "../../../data/dataSource/API/AuthenticationAPIDataSourceImpl";
import AuthenticationRepositoryImpl from "../../../data/repository/AuthenticationRepositoryImpl";
import { GetAuthenticationToken } from "../../../domain/useCase/authentication/GetAuthenticationToken";

const CLIENT_ID = 'b666fc8cd91c4f2a952ff2c67b6a81e8';
const URL_CALLBACK = 'spotifysearcher://login/';
const URL_SPOTIFY = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${URL_CALLBACK}&scope=user-read-private`;

const LoginViewModel = () => {

    useEffect(() => {
        Linking.addEventListener('url',handleUrl)
        return () => { Linking.removeAllListeners }
    },[])

    const useCase = new GetAuthenticationToken(new AuthenticationRepositoryImpl(new AuthenticationAPIDataSourceImpl()));

    const handleUrl = async({url = ''}) => {
        const spotifyCode = url.split("code=")[1];
        const responseAPI = await useCase.invoke(spotifyCode);
        console.log("API FINAL RESPONSE ---> ",responseAPI);
    }

    const loginToSpotify = async() => {
        await Linking.openURL(URL_SPOTIFY);
    }

    return {
        loginToSpotify
    }
}

export default LoginViewModel;