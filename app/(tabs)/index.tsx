import React, { useRef } from 'react';
import { Animated, Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import NightBg from '@/assets/svgs/nightbg.svg';
import BellIcon from '@/assets/svgs/bellIcon.svg';
import { useHeaderVisibility } from '@/contexts/HeaderVisibilityContext';
import { BlurView } from 'expo-blur';
import TaskCarousel from '@/components/common/TaskCarousel';
import AnimatedBackground from '@/components/UI/AnimatedBg';
import Background from '@/assets/svgs/background.svg';
import HabitBg from '@/assets/svgs/habitBg.svg';
import Droplet from '@/assets/svgs/droplet.svg';
import Sleep from '@/assets/svgs/sleep.svg';
import RightArrow from '@/assets/svgs/rightArrow.svg';
import CircularProgress from '@/components/UI/CircularProgress';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function TabOneScreen() {
  const scrollY = useRef(new Animated.Value(0)).current; // Track scroll position
  const headerOpacity = useRef(new Animated.Value(0)).current; // Control header opacity
  const { setHeaderVisible } = useHeaderVisibility(); // Access header visibility context

  // Update header visibility dynamically
  React.useEffect(() => {
    const listener = scrollY.addListener(({ value }) => {
      const showHeader = value > 150;

      // Animate the header opacity
      Animated.timing(headerOpacity, {
        toValue: showHeader ? 1 : 0, // Show or hide the header
        duration: 300, // Animation duration
        useNativeDriver: true,
      }).start();

      setHeaderVisible(showHeader); // Update the header visibility context
    });

    return () => scrollY.removeListener(listener);
  }, [scrollY, headerOpacity, setHeaderVisible]);

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        contentContainerStyle={styles.scrollContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >

        {/* SVG */}
        <View style={styles.fullScreenSvg}>
          {/* <Background width='100%' height="100%" /> */}
          {/* <NightBg width="100%" height="100%" /> */}
          {/* <ImageBackground source={require('../assets/svgs/background.svg')} style={{width: '100%', height: '100%'}} /> */}
          <AnimatedBackground />
        </View>

        <View style={styles.circularProgress}>
          <CircularProgress score={85} size={174} strokeWidth={16} progressColor="#FFFFFF" backgroundColor="rgba(0, 0, 0, 0.2)" innerCircleColor="#000000" marginAngle={10} />
        </View>

        {/* Header content */}
        <View style={styles.headerContent}>
          <BlurView intensity={0} tint="light" style={styles.welcomeButton}>
            <Text style={styles.welcomeText}>WELCOME TO <Text style={{ fontWeight: 700, color: 'black' }}> DAY 30 </Text></Text>
          </BlurView>
          <BellIcon width='10%' style={{ top: 75, right: 20 }} />
        </View>


        {/* Main Content */}
        <View style={styles.mainContent}>
          <Text style={styles.contentText}>Congrats, Mark</Text>
          <Text style={styles.contentSubText}>you’re in the top 3% of the {'\n'}population</Text>
        </View>

        <View style={styles.carousel}>
          <Text style={styles.carouselHeading}>UPCOMING TASKS</Text>

        </View>

        <View style={styles.carouselContainer}>
          <TaskCarousel />
        </View>


        <View style={styles.insightContainer}>
          <View style={{ flex: 1, flexDirection: 'row', gap: '12', alignItems: 'center' }}>
            <Droplet width={35} height={50} />
            <Text style={styles.insightHeading}>Understand your cortisol pattern</Text>
          </View>
          <Text style={{ fontSize: 15, color: 'black', marginTop: 8, opacity: 0.4 }}>
            Learn how your cortisol levels are affecting your sleep qualtiy and what you can do about it
          </Text>
          <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Text style={styles.insightLink}>
              READ INSIGHTS
            </Text>
            <RightArrow width={10} height={10} />

          </View>
        </View>

        <View style={styles.achievementContainer}>
          <HabitBg width={400} height={250} style={styles.habitBg} />
          <Text style={styles.achievementHeading}>
            Today’s{"\n"}achievement
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#FFFFFFB2",
              marginTop: 12,
              letterSpacing: "0.6",
              marginBottom: 16,
            }}
          >
            Based on your sleep and activity patterns, you’re likely to have <Text style={{ fontWeight: 800, color: 'white' }}> 10% more energy today. </Text></Text>
          <View style={styles.sleepContainer}>
            <Sleep width='100%' height='100%'/>
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0, // Ensure no margin
    paddingTop: 0, // Ensure no padding
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24, // Padding for bottom space
  },
  fullScreenSvg: {
    position: 'absolute', // Absolute positioning to remove gaps
    top: 0, // Touch the top
    left: 0,
    right: 0,
    height: 500, // Height of the SVG
    zIndex: -1, // Ensure it's behind other content

  },
  mainContent: {
    gap: 16,
    marginTop: 100, // Match the height of the SVG
    marginLeft: 16,
  },
  contentText: {
    fontSize: 32,
    fontWeight: '600',
    color: 'white',
  },
  contentSubText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  welcomeButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    borderRadius: 8,
    top: 80,
    left: 16,
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  welcomeText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 16,
    fontWeight: '500',
  },
  carousel: {
    marginTop: 210,
    marginLeft: 22,
    marginBottom: 16,
  },
  carouselHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  carouselContainer: {
    width: SCREEN_WIDTH,
  },
  insightContainer: {
    flexDirection: 'column',
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginVertical: 24,
  },
  insightHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    letterSpacing: 0.5,
  },
  insightLink: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    letterSpacing: 0.2,
  },
  achievementContainer: {
    flexDirection: "column",
    backgroundColor: "#C75237",
    padding: 16,
    paddingBottom: 0,
    borderRadius: 16,
    marginHorizontal: 16,
  },
  achievementHeading: {
    fontSize: 28,
    fontWeight: "600",
    color: "white",
    letterSpacing: 0.5,
  },
  habitBg: {
    position: "absolute",
    top: "50%", // Center vertically
    left: "50%", // Center horizontally
    transform: [{ translateX: -100 }, { translateY: -100 }, { scale: 3 }], // Adjust centering and scale
    width: 400,
    height: 250,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center', // Align content vertically
    alignItems: 'center', // Align content horizontally
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional overlay for better text visibility
    padding: 20,
    borderRadius: 10,
  },
  cardBackground: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 15,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Make it more transparent
  },
  cardImage: {
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Slightly transparent overlay
  },
  circularProgress: {
    position: 'absolute',
    marginTop: 255,
    left: 120,
  },
  sleepContainer: {
    height: 296,
    width: '100%',
  },

});
