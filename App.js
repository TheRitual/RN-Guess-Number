import React, { useState } from 'react';
import Main from './Main';
import AppLoading from 'expo-app-loading';
import fetchFonts from './utils/fetchFonts';

const App = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (!fontsLoaded) {
        return <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontsLoaded(true)}
            onError={(error) => console.log(error)}
        />;
    }

    return <Main />;
}

export default App;