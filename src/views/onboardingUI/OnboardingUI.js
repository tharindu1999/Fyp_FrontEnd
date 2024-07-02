import React from 'react';
import { Image, Text } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingUI = ({ navigation }) => {
    return (
        <Onboarding
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image style={{ width: 200, height: 200 }} source={require('../../../src/assets/gemstone_eye.png')} />,
                    title: 'Welcome to GemoEye!',
                    subtitle: 'Discover and authenticate gemstones instantly using our advanced AI technology.'
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={{ width: 200, height: 200 }} source={require('../../../src/assets/scan.png')} />,
                    title: 'Scan Your Gem',
                    subtitle: 'Use your camera to scan and identify gem types with precision and ease.',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={{ width: 200, height: 200 }} source={require('../../../src/assets/report.png')} />,
                    title: 'Explore Details',
                    subtitle: 'Get detailed analysis and authentication results, enhancing your understanding and confidence in your gemstone purchases.',
                },
            ]}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
        />

    );

}

export default OnboardingUI;
