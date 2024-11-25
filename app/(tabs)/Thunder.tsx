import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useHeaderVisibility } from '@/contexts/HeaderVisibilityContext';
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import UpArrow from '@/assets/svgs/upArrow.svg';
import DownArrow from '@/assets/svgs/downArrow.svg';
import FullScreen from '@/assets/svgs/fullScreen.svg';
import HabitBg from '@/assets/svgs/habitBg.svg';
import TaskCarousel from '@/components/common/TaskCarousel';
import InsightsCarousel from '@/components/common/InsightsCarousel';

export default function TabTwoScreen() {

  const { setHeaderVisible } = useHeaderVisibility();
  const isFocused = useIsFocused(); // Hook to check if screen is focused

  useEffect(() => {
    if (isFocused) {
      // Make header visible when screen is focused
      setHeaderVisible(true);
    }

    return () => {
      // Optionally hide header when screen is unfocused
    };
  }, [isFocused, setHeaderVisible]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.healthScoreContainer}>
          
          <View style={styles.fullscreen}>
            <FullScreen width={25} height={40} />
          </View>
          <View style={styles.healthScore}>
            <Text style={styles.titleNumber}>
              78
            </Text>
            <View style={{ flexDirection: 'column', backgroundColor: 'none' }}>
              <Text style={styles.titleText}>
                My Health Score
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: '5' }}>
                <UpArrow width={20} height={20} />
                <Text style={{ fontSize: 12, color: 'white' }}>
                  improving steadily
                </Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 50, gap: 10 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'rgba(0, 0, 0, 0.09)', paddingLeft: '10', paddingVertical: '10' }}>
              <View style={{ alignItems: 'center', gap: 8, borderRightColor: 'rgba(255,255,255,0.5)', borderRightWidth: 0.2, width: '33%', paddingVertical: 0 }}>
                <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, fontWeight: '600' }}>
                  VITALS
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '10' }}>
                  <Text style={{ fontSize: 18, fontWeight: '800', color: 'white' }}>92%</Text>
                  <UpArrow width={15} height={20} />
                </View>
              </View>
              <View style={{ alignItems: 'center', gap: 8, borderRightColor: 'rgba(255,255,255,0.5)', borderRightWidth: 0.2, width: '33%' }}>
                <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, fontWeight: '600' }}>
                  STRESS
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                  <Text style={{ fontSize: 18, fontWeight: '800', color: 'white' }}>low</Text>
                  <DownArrow width={15} height={9} />
                </View>
              </View>
              <View style={{ alignItems: 'center', gap: 8, borderRightColor: 'rgba(255,255,255,0.5)', borderRightWidth: 0.2, width: '33%' }}>
                <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, fontWeight: '600' }}>
                  ENERGY
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: 18, fontWeight: '900', color: 'white' }}>high</Text>
                  <UpArrow width={15} height={20} />
                </View>
              </View>
            </View>

            <Pressable
              style={styles.startButton}
            >
              <Text style={styles.startButtonText}>see analytics</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.insightContainer}>
          <Text style={styles.insightHeading}>PERSONALISED INSIGHTS</Text>
          <Text style={{ marginLeft: 20, fontSize: 14, fontWeight: 600, color: 'rgba(0,0,0,0.5)', letterSpacing: 0.7 }}>
            Learn what affects your body. Explore all insights.
          </Text>
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <InsightsCarousel />
          </View>
        </View>

        <View style={styles.habitStackContainer}>
          <HabitBg width={400} height={250} style={styles.habitBg} />
          <Text style={{ fontSize: 12, color: '#ffffff', opacity: 0.7, fontWeight: 700 }}>HABIT STACKS</Text>
          <Text style={{ fontSize: 20, color: '#FFFFFF', fontWeight: 700, marginBottom: 16, letterSpacing: 1.2 }}>
            We have combined habits for{'\n'}better impact.
          </Text>

          <InsightsCarousel />

          <Pressable
            style={styles.startButton}
          >
            <Text style={styles.startButtonText}>all habit stacks</Text>
          </Pressable>


        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleNumber: {
    fontSize: 60,
    fontWeight: '700',
    color: 'white',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  healthScoreContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: "rgba(5, 150, 105, 1)",
    borderRadius: 25,
    marginTop: 20,
    marginHorizontal: 20,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.18,
  },

  healthScore: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 20,
    marginLeft: 30,
  },
  fullscreen: {
    position: 'absolute',
    right: 15,
    top: 10
  },
  startButton: {
    backgroundColor: '#000000',
    width: '90%',
    borderRadius: 100,
    height: 50,
    alignSelf: 'center',
  },
  startButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 12,
  },
  insightContainer: {
    flexDirection: 'column',
    marginTop: 32,
    gap: 5,
  },
  insightHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    marginLeft: 20,
  },
  habitStackContainer: {
    flexDirection: 'column',
    gap: 10,
    backgroundColor: '#C75237',
    padding: 20,
    marginTop: 24,
    borderRadius: 16,
    marginHorizontal: 16,
  },
  habitBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    scaleX: 2,
    scaleY: 2,
  },
});
