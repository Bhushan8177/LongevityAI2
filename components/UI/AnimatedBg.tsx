import React, { useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, Dimensions } from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Mask,
  Path,
  G,
  Circle,
  Ellipse,
  Rect
} from 'react-native-svg';

const { width } = Dimensions.get('window');

const BackgroundSvg = () => {
  const [isNight, setIsNight] = useState(true);
  const fadeNight = useRef(new Animated.Value(1)).current;
  const fadeDay = useRef(new Animated.Value(0)).current;

  const toggleTime = () => {
    setIsNight((prev) => !prev);
    Animated.parallel([
      Animated.timing(fadeNight, {
        toValue: isNight ? 0 : 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeDay, {
        toValue: isNight ? 1 : 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const AnimatedG = Animated.createAnimatedComponent(G);

  return (
    <Pressable onPress={toggleTime} style={styles.container}>
      <Svg width={width} height={500} viewBox="0 0 360 415">
        <Defs>
          {/* Night gradient */}
          <LinearGradient id="nightGradient" x1="180" y1="-10" x2="180" y2="1340">
            <Stop offset="0.27163" stopColor="#3B2D89" />
            <Stop offset="0.348865" stopColor="#4E3B81" />
            <Stop offset="0.426246" stopColor="#725671" />
            <Stop offset="0.526598" stopColor="#B08555" />
            <Stop offset="0.631787" stopColor="#D19E47" />
            <Stop offset="0.714004" stopColor="#E5AD3E" />
          </LinearGradient>
          {/* Morning gradient */}
          <LinearGradient id="morningGradient" x1="180" y1="-10" x2="180" y2="1340">
            <Stop offset="0.27163" stopColor="#C5A665" />
            <Stop offset="0.5" stopColor="#E5AD3E" />
            <Stop offset="0.7" stopColor="#D19E47" />
          </LinearGradient>
        </Defs>

        <Mask
          id="mask0_1_260"
          maskType="alpha"
          maskUnits="userSpaceOnUse"
          x="0" y="-10" width="360" height="345"
        >
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M360 -10H0V261.588V308.167V316.411C40.7315 327.691 105.969 335 179.5 335C253.636 335 319.341 327.571 360 316.132V308.167V261.867V-10Z"
            fill="#E5AD3E"
          />
        </Mask>

        <G mask="url(#mask0_1_260)">
          {/* Night scene */}
          <AnimatedG style={{ opacity: fadeNight }}>
            <Rect y="-10" width="360" height="1350" fill="url(#nightGradient)" />
            {/* Moon */}
            <Circle cx="296.236" cy="206.237" r="11.154" transform="rotate(-60 296.236 206.237)" fill="#C7C5C5" />
            <Ellipse cx="296.787" cy="205.282" rx="10.0524" ry="10.7947" transform="rotate(-60 296.787 205.282)" fill="white" />
            {/* Stars */}
            <Path d="M32.1659 259.09C32.623 258.979 32.9799 258.622 33.0914 258.165L33.8311 255.133C33.8742 254.956 34.1256 254.956 34.1689 255.133L34.911 258.165C35.0227 258.622 35.3793 258.979 35.836 259.09L38.8674 259.831C39.0442 259.874 39.0442 260.126 38.8674 260.169L35.836 260.91C35.3793 261.021 35.0227 261.378 34.911 261.835L34.1689 264.867C34.1256 265.044 33.8742 265.044 33.8311 264.867L33.0914 261.835C32.9799 261.378 32.623 261.021 32.1659 260.91L29.1326 260.169C28.9558 260.126 28.9558 259.874 29.1326 259.831L32.1659 259.09Z" fill="white" fill-opacity="0.7" />
            <Path d="M304.166 249.09C304.623 248.979 304.98 248.622 305.091 248.165L305.831 245.133C305.874 244.956 306.126 244.956 306.169 245.133L306.911 248.165C307.023 248.622 307.379 248.979 307.836 249.09L310.867 249.831C311.044 249.874 311.044 250.126 310.867 250.169L307.836 250.91C307.379 251.021 307.023 251.378 306.911 251.835L306.169 254.867C306.126 255.044 305.874 255.044 305.831 254.867L305.091 251.835C304.98 251.378 304.623 251.021 304.166 250.91L301.133 250.169C300.956 250.126 300.956 249.874 301.133 249.831L304.166 249.09Z" fill="white" fill-opacity="0.7" />
            <Path d="M59.1659 66.0903C59.623 65.9786 59.9799 65.6217 60.0914 65.1645L60.8311 62.1327C60.8742 61.9558 61.1256 61.9558 61.1689 62.1325L61.911 65.1654C62.0227 65.622 62.3793 65.9786 62.836 66.0902L65.8674 66.8311C66.0442 66.8743 66.0442 67.1257 65.8674 67.1689L62.836 67.9098C62.3793 68.0214 62.0227 68.378 61.911 68.8346L61.1689 71.8675C61.1256 72.0442 60.8742 72.0442 60.8311 71.8673L60.0914 68.8355C59.9799 68.3783 59.623 68.0214 59.1659 67.9097L56.1326 67.1689C55.9558 67.1257 55.9558 66.8743 56.1326 66.8311L59.1659 66.0903Z" fill="white" fill-opacity="0.7" />
            <Path d="M199.166 99.0903C199.623 98.9786 199.98 98.6217 200.091 98.1645L200.831 95.1327C200.874 94.9558 201.126 94.9558 201.169 95.1325L201.911 98.1654C202.023 98.622 202.379 98.9786 202.836 99.0902L205.867 99.8311C206.044 99.8743 206.044 100.126 205.867 100.169L202.836 100.91C202.379 101.021 202.023 101.378 201.911 101.835L201.169 104.867C201.126 105.044 200.874 105.044 200.831 104.867L200.091 101.835C199.98 101.378 199.623 101.021 199.166 100.91L196.133 100.169C195.956 100.126 195.956 99.8743 196.133 99.8311L199.166 99.0903Z" fill="white" fill-opacity="0.7" />
            <Path d="M129.216 210.863C129.536 210.785 129.786 210.535 129.864 210.215L130.382 208.093C130.412 207.969 130.588 207.969 130.618 208.093L131.138 210.216C131.216 210.535 131.466 210.785 131.785 210.863L133.907 211.382C134.031 211.412 134.031 211.588 133.907 211.618L131.785 212.137C131.466 212.215 131.216 212.465 131.138 212.784L130.618 214.907C130.588 215.031 130.412 215.031 130.382 214.907L129.864 212.785C129.786 212.465 129.536 212.215 129.216 212.137L127.093 211.618C126.969 211.588 126.969 211.412 127.093 211.382L129.216 210.863Z" fill="white" fill-opacity="0.7" />
            {/* Add other star paths here */}
          </AnimatedG>

          {/* Morning scene */}
          <AnimatedG style={{ opacity: fadeDay }}>
            <Rect y="-10" width="360" height="1350" fill="url(#morningGradient)" />
            {/* Oak Leaves */}
            <Path d="M50 100 C40 90 45 80 55 75 C65 70 80 80 70 95 C65 105 55 105 50 100" fill="#8B4513" opacity={0.6} />
            <Path d="M250 150 C240 140 245 130 255 125 C265 120 280 130 270 145 C265 155 255 155 250 150" fill="#8B4513" opacity={0.6} />
            <Path d="M150 200 C140 190 145 180 155 175 C165 170 180 180 170 195 C165 205 155 205 150 200" fill="#8B4513" opacity={0.6} />
            <Path d="M300 250 C290 240 295 230 305 225 C315 220 330 230 320 245 C315 255 305 255 300 250" fill="#8B4513" opacity={0.6} />
            {/* Add more leaves in place of stars */}
          </AnimatedG>
        </G>
      </Svg>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default BackgroundSvg;