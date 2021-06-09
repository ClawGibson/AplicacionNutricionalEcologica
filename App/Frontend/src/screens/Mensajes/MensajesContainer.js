/*import React from 'react'
import { View, Text } from 'react-native'

const MensajesContainer = () => {
    return (
        <View style={{ marginTop: 250 }}>
            <Text style={{ textAlign: 'center' }}>
                Mensajes
            </Text>
        </View>
    )
}

export default MensajesContainer
*/

import * as React from "react";
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from "react-native-svg";

export default () => (
  <Svg height="500" width="350">
    <Defs>
      <ClipPath id="clip">
        <Rect x="0" y="0" width="100%" height="100%" fill="red" />
      </ClipPath>
    </Defs>
    <Rect x="0" y="0" width="100%" height="100%" fill="red" opacity=".5" />
    <Image
      x="15%"
      y="15%"
      width="20%"
      height="20%"
      opacity="1"
      href={require("./foco.png")}
      clipPath="url(#clip)"
    />
    <Image
      x="55%"
      y="55%"
      width="20%"
      height="20%"
      opacity="1"
      href={require("./pan-caricatura.png")}
      clipPath="url(#clip)"
    />
  </Svg>
);
