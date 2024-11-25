import React from 'react';
import Svg, { Rect, Path, Defs, Filter, FeFlood, FeBlend, FeGaussianBlur, G } from 'react-native-svg';

type LightningIconProps = {
  color?: string;
  size?: number;
  focused?: boolean;
  glowColor?: string;
};

const ThunderIconUnfocused = ({ 
  color = 'black', 
  size = 42, 
  focused = true,
  glowColor = 'white' 
}: LightningIconProps) => (
  <Svg width={size + 10} height={80} viewBox="0 0 52 55" fill="none">
    <Defs>
      <Filter
        id="glow"
        x="0.665222"
        y="0.0661011"
        width="50.6652"
        height="54.4278"
        filterUnits="userSpaceOnUse"
      >
        <FeFlood floodOpacity="0" result="BackgroundImageFix" />
        <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <FeGaussianBlur stdDeviation="9.5" result="effect1_foregroundBlur_120_456" />
      </Filter>
    </Defs>

    {/* Background Circle */}
    <Rect 
      x="6" 
      y="7.5" 
      width="40" 
      height="40" 
      rx="20" 
      fill={focused ? color : '#999999'} 
    />

    {/* Lightning Bolt */}
    <Path
      d="M23.3073 35.484C23.1508 35.4631 23.0298 35.4151 22.9411 35.3635C22.6438 35.2044 22.1628 34.7501 22.3245 33.5372L22.9972 28.4904L21.1663 28.2463C20.1178 28.1066 19.8079 27.5636 19.7135 27.2563C19.6201 26.9413 19.583 26.3231 20.3769 25.6246L27.1971 19.685C28.1162 18.8838 28.7573 19.0329 29.0546 19.192C29.3519 19.3511 29.8329 19.8054 29.6713 21.0182L28.9985 26.0651L30.8295 26.3091C31.878 26.4489 32.1879 26.9919 32.2823 27.2992C32.3757 27.6142 32.4127 28.2324 31.6188 28.9309L24.7987 34.8705C24.1586 35.4302 23.6516 35.5298 23.3073 35.484Z"
      fill={glowColor}
    />

    {/* Glow Effect */}
    <G filter="url(#glow)" opacity={focused ? 0.5 : 0}>
      <Path
        d="M23.3073 35.484C23.1508 35.4632 23.0298 35.4152 22.9411 35.3635C22.6437 35.2044 22.1628 34.7501 22.3244 33.5373L22.9971 28.4905L21.1662 28.2464C20.1177 28.1066 19.8078 27.5636 19.7134 27.2564C19.62 26.9413 19.583 26.3232 20.3769 25.6247L27.197 19.6851C28.1161 18.8838 28.7572 19.033 29.0545 19.1921C29.3519 19.3512 29.8329 19.8055 29.6712 21.0183L28.9985 26.0651L30.8294 26.3092C31.8779 26.449 32.1878 26.992 32.2822 27.2992C32.3756 27.6143 32.4127 28.2324 31.6188 28.9309L24.7986 34.8705C24.1586 35.4303 23.6515 35.5299 23.3073 35.484Z"
        fill={glowColor}
      />
    </G>
  </Svg>
);

export default ThunderIconUnfocused;