import AsyncStorage from "@react-native-async-storage/async-storage";

const loadState = () => {
    try {
        const loadedState = AsyncStorage.getItem('state');
        if (loadedState === null) {
            return undefined;
        }
        return JSON.parse(loadedState);
    } catch (err) {
        return undefined;
    }
};

export default loadState;
