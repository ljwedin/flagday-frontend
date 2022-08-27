import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import TextSmall from './components/textSmall';
import MainPage from './components/mainPage';

export default function App() {
    const [fontsLoaded] = useFonts({
        'Roboto-Regular': require('./assets/fonts/RobotoMono_400Regular.ttf'),
        'Roboto-SemiBold': require('./assets/fonts/RobotoMono_500Medium.ttf'),
        'Roboto-Bold': require('./assets/fonts/RobotoMono_700Bold.ttf'),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <MainPage />
            <StatusBar backgroundColor={'#272727'} style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
    },
});
