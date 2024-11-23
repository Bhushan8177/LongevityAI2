import React from 'react';
import Svg, { Path } from 'react-native-svg';

type ProfileIconProps = {
  color?: string;
  size?: number;
  focused?: boolean;
};

const ProfileIcon = ({ 
  color = '#999999', 
  size = 40, 
  focused = false 
}: ProfileIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 40 41" fill="none">
    {/* Body part */}
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.9218 24.1673H16.078C13.7694 24.2819 11.7241 25.692 10.796 27.809C9.67656 30.0066 11.9106 32.084 14.5089 32.084H25.4909C28.0907 32.084 30.3248 30.0066 29.2038 27.809C28.2757 25.692 26.2304 24.2819 23.9218 24.1673Z"
      stroke={color}
      strokeWidth={focused ? 2.75 : 2.375}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Head part */}
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.7499 14.6673C24.7499 17.2906 22.6233 19.4173 19.9999 19.4173C17.3766 19.4173 15.2499 17.2906 15.2499 14.6673C15.2499 12.0439 17.3766 9.9173 19.9999 9.9173C21.2597 9.9173 22.4679 10.4177 23.3587 11.3085C24.2495 12.1993 24.7499 13.4075 24.7499 14.6673Z"
      stroke={color}
      strokeWidth={focused ? 2.75 : 2.375}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ProfileIcon;