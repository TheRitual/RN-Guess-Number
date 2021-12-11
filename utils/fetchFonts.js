import * as Font from 'expo-font';

const fetchFonts = () => {
    return Font.loadAsync({
        'fredoka': require('../assets/fonts/FredokaOne.ttf'),
        'permanent-marker': require('../assets/fonts/PermanentMarker.ttf'),
        'gloria': require('../assets/fonts/GloriaHallelujah.ttf'),
    });
}

export default fetchFonts;