import AsyncStorage from "@react-native-async-storage/async-storage";

const saveState = (state) => {
    try {
        const storedState = JSON.stringify(state);
        // const storedState = JSON.stringify(state);
        AsyncStorage.setItem('state', storedState);
        console.log('STORING STATE ---', storedState)
    } catch (err) {
        return undefined;
    }
};

export default saveState;
