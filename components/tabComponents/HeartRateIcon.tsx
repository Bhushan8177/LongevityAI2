import React from 'react';
import Svg, { Path } from 'react-native-svg';

type HeartRateIconProps = {
  color?: string;
  size?: number;
  focused?: boolean;
};

const HeartRateIcon = ({ 
  color = '#999999', 
  size = 40, 
  focused = false 
}: HeartRateIconProps) => (
  <Svg width={size} height={size + 1} viewBox="0 0 40 41" fill="none">
    {/* Heart shape */}
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.9957 32.0692L15.3676 27.3192L10.776 22.5692C8.29184 19.944 8.29184 15.8353 10.776 13.2101C11.9924 12.0411 13.6399 11.4302 15.3244 11.5236C17.0089 11.617 18.5788 12.4062 19.6585 13.7026L19.9957 14.0335L20.3298 13.6883C21.4095 12.392 22.9794 11.6027 24.6639 11.5093C26.3484 11.4159 27.9959 12.0269 29.2123 13.1959C31.6964 15.8211 31.6964 19.9298 29.2123 22.555L24.6206 27.305L19.9957 32.0692Z"
      stroke={color}
      strokeWidth={focused ? 2.5 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Heart rate line */}
    <Path
      d="M29.5 21.1357H24.5301L22.0452 16.25L17.6929 24.3929L15.8322 21.1357H10.5"
      stroke={color}
      strokeWidth={focused ? 2.5 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HeartRateIcon;