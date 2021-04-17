import React, { useState, useCallback } from "react";
import { View, Dimensions, Text, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { getYoutubeMeta } from 'react-native-youtube-iframe';

const Video = (props) => {

    const data = props?.data?.link;
    const [playing, setPlaying] = useState(false);
    const [title, setTitle] = useState('');

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
        }
    }, []);

    getYoutubeMeta(data ? data : props.link).then(meta => {
        setTitle(meta.title)
    })

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <YoutubePlayer
                pointerEvents="none"
                height={205}
                width={Dimensions.get('screen').width}
                play={playing}
                videoId={data ? data : props.link}
                onChangeState={onStateChange}
            />
        </View>
    );
}

export default Video;

import { primary } from '../styles/palette'

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: primary
    }
});