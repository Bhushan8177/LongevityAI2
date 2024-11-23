import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Text, View, Pressable, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import BellIcon from '@/assets/svgs/bellIcon.svg';
import { useHeaderVisibility } from '@/contexts/HeaderVisibilityContext';
import HomeIcon from '@/components/tabComponents/HomeIcon';
import CalendarIcon from '@/components/tabComponents/CalendarIcon';
import LightningIcon from '@/components/tabComponents/LightningIcon';
import HeartRateIcon from '@/components/tabComponents/HeartRateIcon';
import ProfileIcon from '@/components/tabComponents/ProfileIcon';
import Settings from '@/assets/svgs/settings.svg';

// Types
type TabIconProps = {
  focused: boolean;
  color: string;
  size?: number;
};

type IconComponent = React.FC<{
  color: string;
  size: number;
  focused: boolean;
}>;

interface ScreenOptions {
  route: {
    name: string;
  };
}

// Common header components
const HeaderLeft: React.FC = () => (
  <View style={styles.headerLeft}>
    <Link href="/">
      <Text style={styles.headerTitle}>Mark Maurice</Text>
    </Link>
  </View>
);

const HeaderRight: React.FC = () => (
  <Link href="/" asChild>
    <Pressable>
      <View style={styles.headerRight}>
        <Settings width={25} height={25}/>
      </View>
    </Pressable>
  </Link>
);

export default function TabLayout() {
  const { isHeaderVisible } = useHeaderVisibility();

  // Common screen options
  const getCommonScreenOptions = ({ route }: ScreenOptions) => ({
    title: '',
    headerShown: isHeaderVisible,
    headerLeft: HeaderLeft,
    headerRight: HeaderRight,
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitleStyle,
    tabBarStyle: styles.tabBar,
    tabBarItemStyle: styles.tabBarItem,
  });

  // Icon renderer factory
  const createTabIcon = (Icon: IconComponent) => ({ focused, color }: TabIconProps) => (
    <Icon
      color={focused ? '#000000' : color}
      size={45}
      focused={focused}
    />
  );

  return (
    <Tabs
      screenOptions={({ route }) => ({
        ...getCommonScreenOptions({ route }),
        tabBarActiveTintColor: '#4A367C',
        tabBarShowLabel: false,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: createTabIcon(HomeIcon),
        }}
      />
      <Tabs.Screen
        name="Calendar"
        options={{
          tabBarIcon: createTabIcon(CalendarIcon),
        }}
      />
      <Tabs.Screen
        name="Thunder"
        options={{
          tabBarIcon: createTabIcon(LightningIcon),
        }}
      />
      <Tabs.Screen
        name="Heart"
        options={{
          tabBarIcon: createTabIcon(HeartRateIcon),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: createTabIcon(ProfileIcon),
        }}
      />
    </Tabs>
  );
}

// Styles with TypeScript interfaces
interface Styles {
  header: ViewStyle;
  headerLeft: ViewStyle;
  headerRight: ViewStyle;
  headerTitle: TextStyle;
  headerTitleStyle: TextStyle;
  tabBar: ViewStyle;
  tabBarItem: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  header: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    shadowColor: 'transparent',
  },
  headerLeft: {
    paddingLeft: 20,
  },
  headerRight: {
    paddingRight: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  headerTitleStyle: {
    fontSize: 24,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 24,
    height: 88,
    paddingBottom: 24,
    paddingTop: 8,
    backgroundColor: 'white',
    borderTopColor: '#E5E5E5',
    borderTopWidth: 1,
  },
  tabBarItem: {
    padding: 8,
  },
});