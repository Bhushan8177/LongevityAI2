
import Svg, { SvgProps, Rect, Path, Defs, Filter, FeFlood, FeBlend, FeGaussianBlur, G } from 'react-native-svg';

interface ThunderIconFocusedProps extends SvgProps {
  size?: number;
}

const ThunderIconFocused: React.FC<ThunderIconFocusedProps> = ({ size = 42, ...props }) => {
  const scale = size / 36; // 42 is the original width

  return (
    <Svg
      width={42 * scale}
      height={44 * scale}
      viewBox="0 0 42 44"
      fill="none"
      {...props}
    >
      <Rect
        x={1.5}
        y={2.5}
        width={39}
        height={39}
        rx={19.5}
        stroke="black"
      />
      <Rect
        x={5}
        y={6}
        width={32}
        height={32}
        rx={16}
        fill="black"
      />
      <G filter="url(#filter0_f_160_418)">
        <Path
          d="M18.846 28.387c-.126-.016-.223-.055-.294-.096-.238-.127-.623-.49-.493-1.46l.538-4.038-1.465-.195c-.839-.112-1.087-.546-1.162-.792-.075-.252-.105-.746.53-1.305l5.457-4.752c.735-.641 1.248-.522 1.486-.394.238.127.623.49.493 1.461l-.538 4.038 1.465.195c.839.112 1.087.546 1.162.792.075.252.104.746-.53 1.305l-5.457 4.752c-.512.447-.918.527-1.193.49z"
          fill="white"
        />
      </G>
      <Path
        d="M18.846 28.388c-.126-.016-.223-.055-.294-.096-.238-.127-.623-.49-.493-1.46l.538-4.038-1.465-.195c-.839-.112-1.087-.546-1.162-.792-.075-.252-.105-.746.53-1.305l5.457-4.752c.735-.641 1.248-.522 1.486-.394.238.127.623.49.493 1.461l-.538 4.038 1.465.195c.839.112 1.087.546 1.162.792.075.252.104.746-.53 1.305l-5.457 4.752c-.512.447-.918.527-1.193.49z"
        fill="white"
      />
      <Defs>
        <Filter
          id="filter0_f_160_418"
          x={0.732}
          y={0.053}
          width={40.532}
          height={43.542}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <FeFlood floodOpacity={0} result="BackgroundImageFix" />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <FeGaussianBlur
            stdDeviation={7.6}
            result="effect1_foregroundBlur_160_418"
          />
        </Filter>
      </Defs>
    </Svg>
  );
};

export default ThunderIconFocused;
