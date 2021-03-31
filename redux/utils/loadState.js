import AsyncStorage from "@react-native-async-storage/async-storage";

const loadState = async () => {
    try {
        const loadedState = await AsyncStorage.getItem('state');
        console.log('LOADING STATE ---', loadState)
        if (loadedState === null) {
            return undefined;
        }
        return JSON.parse(loadedState);
    } catch (err) {
        return undefined;
    }
    // AsyncStorage.getItem('state')
    //     .then(res => {
    //         // console.log('LOADED --', res)
    //         return JSON.parse(res)
    //     })
    //     .catch(err => {
    //         return err;
    //     })
};

export default loadState;
