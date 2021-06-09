import React from "react";
import { View, Dimensions } from "react-native";
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
  Text,
} from "react-native-svg";

const Piramide = () => {
  var deviceWidth = Dimensions.get("window").width;
  //console.log(deviceWidth);
  //console.log((deviceWidth * 0.17).toFixed() / 2);
  var deviceHeight = Dimensions.get("window").height;
  //console.log(deviceHeight * 0.198);
  //console.log(deviceHeight);
  var mHeight = ((deviceHeight - deviceHeight * 0.1098) / 2).toFixed();
  var mWidth = (deviceWidth / 2).toFixed();
  //console.log("ancho: " + deviceWidth);
  //console.log("alto: " + deviceHeight);
  //console.log("mAncho: " + mWidth);
  //console.log("mAlto: " + mHeight);

  //---------------------------puntos de figura 1---------------------------------
  var p1 = (deviceHeight - deviceHeight * 0.1) * 0.88;
  //console.log("p1: " + p1);
  var p1H = deviceHeight - deviceHeight * 0.1;
  //console.log("p1H: " + p1H);
  var p1W = deviceWidth * 0.064 + (deviceWidth * 0.17).toFixed() / 2;
  //console.log("p1W: " + p1W);
  var p1W2 = deviceWidth - p1W;
  //console.log("p1W2: " + p1W2);
  var p1WR = (deviceWidth * 0.17).toFixed() / 2;
  //console.log("p1WR: " + p1WR);
  var p1WR2 = deviceWidth - p1WR;
  //console.log("p1WR2: " + p1WR2);
  //sombra
  var ps1 = p1 + 10;
  var ps1H = p1H + 20;
  var ps1W = p1W - 30;
  var ps1W2 = p1W2 - 30;
  var ps1WR = p1WR - 30;
  var ps1WR2 = p1WR2 - 30;

  //--------------------------puntos de figura 2----------------------------
  var p2 = (deviceHeight - deviceHeight * 0.1) * 0.855; //punto  abajo
  var p2H = (deviceHeight - deviceHeight * 0.1) * 0.745; // punto arriba
  var p2W = deviceWidth * 0.078 + (deviceWidth * 0.17).toFixed() / 2; // punto base izquierda abajo
  var p2W2 = deviceWidth - p2W; // punto base derecha abajo
  var p2WR = deviceWidth * 0.132 + (deviceWidth * 0.17).toFixed() / 2; // punto alto izquierda arriba
  var p2WR2 = deviceWidth - p2WR; // punto alto derecha arriba
  //sombra
  var ps2 = p2 + 20;
  var ps2H = p2H + 10;
  var ps2W = p2W - 33;
  var ps2W2 = p2W2 - 33;
  var ps2WR = p2WR - 33;
  var ps2WR2 = p2WR2 - 33;

  //--------------------------puntos de figura 3----------------------------------------
  var p3 = (deviceHeight - deviceHeight * 0.1) * 0.72; //punto  abajo
  var p3H = (deviceHeight - deviceHeight * 0.1) * 0.61; // punto arriba
  var p3W = deviceWidth * 0.145 + (deviceWidth * 0.17).toFixed() / 2; // punto base izquierda abajo
  var p3W2 = deviceWidth - p3W; // punto base derecha abajo
  var p3WR = deviceWidth * 0.196 + (deviceWidth * 0.17).toFixed() / 2; // punto alto izquierda arriba
  var p3WR2 = deviceWidth - p3WR; // punto alto derecha arriba
  //sombra
  var ps3 = p3 + 20;
  var ps3H = p3H + 10;
  var ps3W = p3W - 36;
  var ps3W2 = p3W2 - 36;
  var ps3WR = p3WR - 36;
  var ps3WR2 = p3WR2 - 36;

  //--------------------------puntos de figura 4-------------------------------------------
  var p4 = (deviceHeight - deviceHeight * 0.1) * 0.585; //punto  abajo
  var p4H = (deviceHeight - deviceHeight * 0.1) * 0.475; // punto arriba
  var p4W = deviceWidth * 0.212 + (deviceWidth * 0.17).toFixed() / 2; // punto base izquierda abajo
  var p4W2 = deviceWidth - p4W; // punto base derecha abajo
  var p4WR = deviceWidth * 0.264 + (deviceWidth * 0.17).toFixed() / 2; // punto alto izquierda arriba
  var p4WR2 = deviceWidth - p4WR; // punto alto derecha arriba
  //sombra
  var ps4 = p4 + 20;
  var ps4H = p4H + 10;
  var ps4W = p4W - 39;
  var ps4W2 = p4W2 - 39;
  var ps4WR = p4WR - 39;
  var ps4WR2 = p4WR2 - 39;

  //--------------------------------puntos de figura 5------------------------------------
  var p5 = (deviceHeight - deviceHeight * 0.1) * 0.45; //punto  abajo
  var p5H = (deviceHeight - deviceHeight * 0.1) * 0.35; // punto arriba
  var p5W = deviceWidth * 0.28 + (deviceWidth * 0.17).toFixed() / 2; // punto base izquierda abajo
  var p5W2 = deviceWidth - p5W; // punto base derecha abajo
  var p5WR = deviceWidth * 0.3298 + (deviceWidth * 0.17).toFixed() / 2; // punto alto izquierda arriba
  var p5WR2 = deviceWidth - p5WR; // punto alto derecha arriba
  //sombra
  var ps5 = p5 + 20;
  var ps5H = p5H + 10;
  var ps5W = p5W - 42;
  var ps5W2 = p5W2 - 42;
  var ps5WR = p5WR - 42;
  var ps5WR2 = p5WR2 - 42;

  //---------------------------puntos de figura 6-----------------------------------------
  var p6 = (deviceHeight - deviceHeight * 0.1) * 0.325; //punto  abajo
  var p6H = deviceHeight * 0.161; // punto arriba
  var p6W = deviceWidth * 0.342 + (deviceWidth * 0.17).toFixed() / 2; // punto base izquierda abajo
  var p6W2 = deviceWidth - p6W; // punto base derecha abajo

  //sombra
  var ps6 = p6 + 20;
  var ps6H = p6H + 10;
  var ps6W = p6W - 45;
  var ps6W2 = p6W2 - 45;
  var pmedio = mWidth - 45;

  //Ejes cardinales
  const puntos2 =
    "0," +
    mHeight.toString() +
    " " +
    deviceWidth.toString() +
    "," +
    mHeight.toString();

  const puntos3 =
    mWidth.toString() +
    ",0" +
    " " +
    mWidth.toString() +
    "," +
    deviceHeight.toString();
  //585 es lo mas largo y hay 25 de margen superior
  //marco
  const marco =
    "0,0 " +
    deviceWidth.toString() +
    ",0 " +
    deviceWidth.toString() +
    "," +
    deviceHeight.toString() +
    " " +
    " 0," +
    deviceHeight.toString();

  const triangulo =
    p1WR.toString() +
    "," +
    p1H.toString() +
    " " +
    mWidth.toString() +
    "," +
    p6H.toString() +
    " " +
    p1WR2.toString() +
    "," +
    p1H.toString() +
    " ";
  /* 
  console.log("x1: " + p1WR);
  console.log("y1: " + p1H);
  console.log("x2: " + mWidth);
  console.log("y2: " + p6H);
  console.log("x3: " + p1WR2);
  console.log("y3: " + p1H);
  */
  //--------------------------------bloque 1 -----------------------------------------------------
  const figura1 =
    p1WR.toString() +
    "," +
    p1H.toString() +
    " " +
    p1W.toString() +
    "," +
    p1.toString() +
    " " +
    p1W2.toString() +
    "," +
    p1.toString() +
    " " +
    p1WR2.toString() +
    "," +
    p1H.toString();
  //sombra
  const sombra1 =
    ps1WR.toString() +
    "," +
    ps1H.toString() +
    " " +
    ps1W.toString() +
    "," +
    ps1.toString() +
    " " +
    ps1W2.toString() +
    "," +
    ps1.toString() +
    " " +
    ps1WR2.toString() +
    "," +
    ps1H.toString();
  //--------------------------------bloque 2---------------------------------------------------
  const figura2 =
    p2W.toString() +
    "," +
    p2.toString() +
    " " +
    p2WR.toString() +
    "," +
    p2H.toString() +
    " " +
    p2WR2.toString() +
    "," +
    p2H.toString() +
    " " +
    p2W2.toString() +
    "," +
    p2.toString() +
    " ";
  //sombra
  const sombra2 =
    ps2WR.toString() +
    "," +
    ps2H.toString() +
    " " +
    ps2W.toString() +
    "," +
    ps2.toString() +
    " " +
    ps2W2.toString() +
    "," +
    ps2.toString() +
    " " +
    ps2WR2.toString() +
    "," +
    ps2H.toString();
  //---------------------------bloque 3------------------------------
  const figura3 =
    p3W.toString() +
    "," +
    p3.toString() +
    " " +
    p3WR.toString() +
    "," +
    p3H.toString() +
    " " +
    p3WR2.toString() +
    "," +
    p3H.toString() +
    " " +
    p3W2.toString() +
    "," +
    p3.toString() +
    " ";
  const sombra3 =
    ps3WR.toString() +
    "," +
    ps3H.toString() +
    " " +
    ps3W.toString() +
    "," +
    ps3.toString() +
    " " +
    ps3W2.toString() +
    "," +
    ps3.toString() +
    " " +
    ps3WR2.toString() +
    "," +
    ps3H.toString();
  //---------------------------------bloque 4-----------------------------
  const figura4 =
    p4W.toString() +
    "," +
    p4.toString() +
    " " +
    p4WR.toString() +
    "," +
    p4H.toString() +
    " " +
    p4WR2.toString() +
    "," +
    p4H.toString() +
    " " +
    p4W2.toString() +
    "," +
    p4.toString() +
    " ";
  const sombra4 =
    ps4WR.toString() +
    "," +
    ps4H.toString() +
    " " +
    ps4W.toString() +
    "," +
    ps4.toString() +
    " " +
    ps4W2.toString() +
    "," +
    ps4.toString() +
    " " +
    ps4WR2.toString() +
    "," +
    ps4H.toString();
  //---------------------------------------bloque 5----------------------------------
  const figura5 =
    p5W.toString() +
    "," +
    p5.toString() +
    " " +
    p5WR.toString() +
    "," +
    p5H.toString() +
    " " +
    p5WR2.toString() +
    "," +
    p5H.toString() +
    " " +
    p5W2.toString() +
    "," +
    p5.toString() +
    " ";
  const sombra5 =
    ps5WR.toString() +
    "," +
    ps5H.toString() +
    " " +
    ps5W.toString() +
    "," +
    ps5.toString() +
    " " +
    ps5W2.toString() +
    "," +
    ps5.toString() +
    " " +
    ps5WR2.toString() +
    "," +
    ps5H.toString();
  //---------------------------------------bloque 6---------------------------------------
  const figura6 =
    p6W.toString() +
    "," +
    p6.toString() +
    " " +
    mWidth.toString() +
    "," +
    p6H.toString() +
    " " +
    p6W2.toString() +
    "," +
    p6.toString() +
    " ";
  const sombra6 =
    ps6W.toString() +
    "," +
    ps6.toString() +
    " " +
    pmedio.toString() +
    "," +
    ps6H.toString() +
    " " +
    ps6W2.toString() +
    "," +
    ps6.toString() +
    " ";

  /*<Polygon
          points={puntos3}
          fill="#FFAABB"
          stroke="purple"
          strokeWidth="3"
        />
        <Polygon points={puntos2} fill="lime" stroke="red" strokeWidth="3" />
        
        margenes
        Left and right 35
        top 60
        marginBottom: 15
        <Polygon points={triangulo} stroke="red" strokeWidth="3" />

        <Symbol id="symbol" viewBox="0 0 150 110" width="100" height="50">
          <Circle
            cx="50"
            cy="50"
            r="40"
            strokeWidth="8"
            stroke="red"
            fill="red"
          />
          <Circle
            cx="90"
            cy="60"
            r="40"
            strokeWidth="8"
            stroke="green"
            fill="white"
          />
        </Symbol>

        <Use href="#symbol" x="0" y="0" />
        <Use href="#symbol" x="0" y="50" width="75" height="38" />
        <Use href="#symbol" x="0" y="100" width="50" height="25" />
 */
  return (
    <View style={{}}>
      <Svg height="100%" width="100%">
        <Text
          fill="black"
          stroke="black"
          fontSize="28"
          fontWeight="bold"
          x="50%"
          y="10%"
          textAnchor="middle"
        >
          Guía alimentaria
        </Text>
        <Text
          fill="black"
          stroke="black"
          fontSize="28"
          fontWeight="bold"
          x="50%"
          y="15%"
          textAnchor="middle"
        >
          Nutricional - Ecológica
        </Text>

        <Text
          fill="gray"
          stroke="gray"
          fontSize="16"
          fontWeight="normal"
          x="20%"
          y="24%"
          textAnchor="middle"
        >
          Elije el grupo
        </Text>
        <Text
          fill="gray"
          stroke="gray"
          fontSize="16"
          fontWeight="normal"
          x="20%"
          y="27%"
          textAnchor="middle"
        >
          del que desees
        </Text>
        <Text
          fill="gray"
          stroke="gray"
          fontSize="16"
          fontWeight="normal"
          x="20%"
          y="30%"
          textAnchor="middle"
        >
          saber más
        </Text>
        <Text
          fill="gray"
          stroke="gray"
          fontSize="16"
          fontWeight="normal"
          x="20%"
          y="33%"
          textAnchor="middle"
        >
          al respecto
        </Text>

        <Defs>
          <ClipPath id="clip">
            <Rect x="0" y="0" width="100%" height="100%" fill="red" />
          </ClipPath>
        </Defs>

        <Polygon points={sombra1} fill="rgba(0, 0, 0, 0.2)" strokeWidth="1" />
        <Polygon points={sombra2} fill="rgba(0, 0, 0, 0.2)" strokeWidth="1" />
        <Polygon points={sombra3} fill="rgba(0, 0, 0, 0.2)" strokeWidth="1" />
        <Polygon points={sombra4} fill="rgba(0, 0, 0, 0.2)" strokeWidth="1" />
        <Polygon points={sombra5} fill="rgba(0, 0, 0, 0.2)" strokeWidth="1" />
        <Polygon points={sombra6} fill="rgba(0, 0, 0, 0.2)" strokeWidth="1" />

        <Polygon points={figura1} fill="#0CA802" strokeWidth="3" />
        <Image
          x="8%"
          y="82%"
          width="13%"
          height="13%"
          opacity="1"
          href={require("../../assets/sandia.png")}
          clipPath="url(#clip)"
        />
        <Image
          x="23%"
          y="82%"
          width="13%"
          height="13%"
          opacity="1"
          href={require("../../assets/durazno.png")}
          clipPath="url(#clip)"
        />
        <Image
          x="40%"
          y="81%"
          width="16%"
          height="16%"
          opacity="1"
          href={require("../../assets/fresas.png")}
          clipPath="url(#clip)"
        />
        <Image
          x="58%"
          y="82%"
          width="15%"
          height="15%"
          opacity="1"
          href={require("../../assets/uvas.png")}
          clipPath="url(#clip)"
        />
        <Image
          x="75%"
          y="81%"
          width="16%"
          height="16%"
          opacity="1"
          href={require("../../assets/platano.png")}
          clipPath="url(#clip)"
        />

        <Polygon points={figura2} fill="#5DFF01" strokeWidth="3" />
        <Image
          x="15%"
          y="65%"
          width="22%"
          height="22%"
          opacity="1"
          href={require("../../assets/elotes.png")}
          clipPath="url(#clip)"
        />
        <Image
          x="40%"
          y="67%"
          width="19%"
          height="19%"
          opacity="1"
          href={require("../../assets/aguacate.png")}
          clipPath="url(#clip)"
        />
        <Image
          x="65%"
          y="67%"
          width="19%"
          height="19%"
          opacity="1"
          href={require("../../assets/guistante.png")}
          clipPath="url(#clip)"
        />

        <Polygon points={figura3} fill="#F7FF00" strokeWidth="3" />
        <Image
          x="24%"
          y="53%"
          width="24%"
          height="24%"
          opacity="1"
          href={require("../../assets/pescado.png")}
          clipPath="url(#clip)"
        />
        <Image
          x="55%"
          y="54%"
          width="21%"
          height="21%"
          opacity="1"
          href={require("../../assets/cafe.png")}
          clipPath="url(#clip)"
        />

        <Polygon points={figura4} fill="#FFAA00" strokeWidth="3" />

        <Image
          x="27%"
          y="41%"
          width="21%"
          height="21%"
          opacity="1"
          href={require("../../assets/baget.png")}
          clipPath="url(#clip)"
        />
        <Image
          x="50%"
          y="41%"
          width="21%"
          height="21%"
          opacity="1"
          href={require("../../assets/pan.png")}
          clipPath="url(#clip)"
        />
        <Polygon points={figura5} fill="#FF6800" strokeWidth="3" />
        <Image
          x="34%"
          y="33%"
          width="11%"
          height="11%"
          opacity="1"
          href={require("../../assets/soda.png")}
          clipPath="url(#clip)"
        />
        <Image
          x="47%"
          y="32%"
          width="15%"
          height="15%"
          opacity="1"
          href={require("../../assets/helado2.png")}
          clipPath="url(#clip)"
        />

        <Polygon points={figura6} fill="rgba(255, 0, 0, 1)" strokeWidth="3" />
        <Image
          x="41%"
          y="17%"
          width="18%"
          height="18%"
          opacity="1"
          href={require("../../assets/hamburguesa.png")}
          clipPath="url(#clip)"
        />
      </Svg>
    </View>
  );
};

export default Piramide;
