import React from 'react';
import Svg, { Path } from 'react-native-svg';

type HomeIconProps = {
  color?: string;
  size?: number;
  focused?: boolean;
};

const HomeIcon = ({ color = 'black', size = 40, focused = false }: HomeIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 40 41" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.33551 19.2785V27.0201C8.2647 30.0659 10.6748 32.5931 13.7205 32.6668H26.2838C29.3295 32.5931 31.7396 30.0659 31.6688 27.0201V19.2785C31.6723 16.9942 30.6066 14.84 28.7888 13.4568L23.6888 10.3651C21.4231 8.98897 18.5796 8.98897 16.3138 10.3651L11.2155 13.4568C9.39774 14.84 8.33205 16.9942 8.33551 19.2785Z"
      stroke={color}
      strokeWidth={focused ? 3 : 2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23.5922 26.3051C22.7507 27.4443 21.4184 28.1164 20.0022 28.1164C18.5859 28.1164 17.2537 27.4443 16.4122 26.3051"
      stroke={color}
      strokeWidth={focused ? 3 : 2.5}
      strokeLinecap="round"
    />
  </Svg>
);

export default HomeIcon;