import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import SvgUri from 'react-native-svg-uri';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

const WavyHeader = ({ customHeight, customWidth }) => {
    return (
        <View>
            <SvgUri
                width={customWidth}
                height={customHeight}
                style={{ position: 'relative', top: 45 }}
                source={require('../assets/wave.svg')}
            />
        </View>
    );
};

export default WavyHeader;
