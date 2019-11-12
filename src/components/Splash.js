import React from 'react';
import {
    View,
    ImageBackground,
    ActivityIndicator
} from 'react-native';

const SplashScreen = () => {
    return (
        <ImageBackground style={styles.mainView}
            resizeMode='cover'
            source={require('../assets/imgs/background.jpg')}
        >
            <View style={styles.actIndicator}>
                <ActivityIndicator size='large' color='white' />
            </View>
        </ImageBackground>
    )
}

const styles = {
    mainView: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    actIndicator: {
        marginTop: 200
    }
}

export default SplashScreen;
