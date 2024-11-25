// components/tabComponents/LightningIcon.tsx
import React from 'react';
import { Animated } from 'react-native';
import ThunderIconFocused from './LightningIconFocused';
import ThunderIconUnfocused from './LightningIconUnFocused';

interface LightningIconProps {
  focused: boolean;
  color: string;
  size: number;
}

const LightningIcon: React.FC<LightningIconProps> = ({ focused, size }) => {
  // Animation value for smooth transition
  const [focusAnim] = React.useState(new Animated.Value(focused ? 1 : 0));

  React.useEffect(() => {
    Animated.spring(focusAnim, {
      toValue: focused ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [focused]);

  return (
    <Animated.View
      style={{
        position: 'relative',
        transform: [
          {
            scale: focusAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.88, 1], // Slightly smaller when unfocused
            }),
          },
        ],
      }}
    >
      {focused ? (
        <ThunderIconFocused size={size} />
      ) : (
        <ThunderIconUnfocused size={size} />
      )}
    </Animated.View>
  );
};

export default LightningIcon;