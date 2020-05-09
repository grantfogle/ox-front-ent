import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { clientId, clientSecret, token } from '../../secret';
// import { AuthSession } from 'expo';

const scopesArr = [
    'user-read-currently-playing',
    'app-remote-control',
    'playlist-modify-public',
]
const scopes = scopesArr.join(' ');

// async function getSpotifyCredentials() {
//     // Connect to server api
//     // const url = '/get-authorization';
//     // fetch(url, {
//     //     method: 'GET',
//     //     body: {
//     //         client_id: clientId,
//     //         secret: clientSecret,
//     //     }
//     // })
//     //     .then(res => res.json())
//     //     .then(data => {
//     //         const spotifyCredentials = data.token;
//     //         return spotifyCredentials;
//     //     })
//     return obj;
// };

// async function getAuthorizationCode() {
//     // const credentials = await getSpotifyCredentials();
//     try {
//         const credentials = {
//             clientId: clientId,
//             secret: clientSecret,
//         }
//         const redirectUrl = AuthSession.getRedirectUrl();
//         const result = await AuthSession.startAsync({
//             authUrl:
//                 'https://accounts.spotify.com/authorize' +
//                 '?response_type=code' +
//                 '&client_id=' +
//                 credentials.clientId +
//                 '&scope=' + encodeURIComponent(scopes) +
//                 '&redirect_uri=' + encodeURIComponent(redirectUrl)
//         })
//         console.log(result);
//     }
//     catch (err) {
//         console.error(err)
//     }
//     return result.params.code
// }

// async function getAccessToken() {
//     try {
//         const authorizationCode = await getAuthorizationCode();
//         const credentials = await getSpotifyCredentials();
//         const credentialsBase64 = btoa(`${credentials.clientId}:${credentials.clientSecret}`);
//         const response = await fetch('https://accounts.spotify.com/api/token', {
//             method: 'POST',
//             headers: {
//                 Authorization: `Basic ${credentialsBase64}`,
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${
//                 credentials.redirectUri
//                 }`,
//         });
//         const responseJson = await response.json();
//         const {
//             access_token: accessToken,
//             refresh_token: refreshToken,
//             expires_in: expiresIn,
//         } = responseJson;
//         const expirationTime = new Date().getTime() + expiresIn * 1000;
//         await setUserData('accessToken', accessToken);
//         await setUserData('refreshToken', refreshToken);
//         await setUserData('expirationTime', expirationTime);
//     } catch (err) {
//         console.error(err);
//     }
// }
// const credentialsConvertedToBase64 = Basic + btoa(clientId + ":" + clientSecret);
// const url = 'https://accounts.spotify.com/api/token';
// fetch(url, {
//     method: 'POST',
//     headers: {
//         Authorization: credentialsConvertedToBase64
//     },
//     body: {
//         grant_type: 'client_credentials'
//     }
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         this.searchSongs = data;
//     })
// get auth token
// create playlist
// find a playlist
// find a song
// add items to to playlist
// remove items from a playlist
// get playback info (what's played, current tracks, skip, repeat, pause)

const Start = () => {
    const { container, button, buttonText } = styles;
    return (
        <View style={container}>
            {/* <TouchableOpacity style={button} onPress={() => Actions.createPlaylist()}> */}
            <TouchableOpacity style={button} onPress={() => getAccessToken()}>
                <Text style={buttonText}>Start a Playlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={button} onPress={() => Actions.findPlaylist()}>
                <Text style={buttonText}>Find a Playlist</Text>
            </TouchableOpacity>
            {/* View Playlist
            Add song to playlist */}
        </View>
    )
}

export default Start;

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#9b59b6',
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'space-between',
    },
    button: {
        height: 80,
        width: '50%',
        backgroundColor: '#2c3e50',
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 25,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 25
    }
};