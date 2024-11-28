import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Time from '@/assets/svgs/time.svg';
import Sun from '@/assets/svgs/sun.svg';
import Dumbbell from '@/assets/svgs/dumbell.svg';
import HorizLine from '@/assets/svgs/horizLine.svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH - 40;

const HabitCard = () => {
  return (
    <View style={styles.habitContainer}>
      <Text style={styles.habitHeading}>Morning optimizer</Text>
      <View style={styles.streakContainer}>
        <Time width={20} height={20} />
        <Text style={styles.streakText}>15 day streak</Text>
      </View>

      <View style={styles.scheduleContainer}>
        <View style={styles.activityContainer}>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>7:00am</Text>
          </View>
          <Sun width={24} height={24} fill="white" />
          <Text style={styles.activityText}>Sunlight</Text>
        </View>
        <View style={styles.activityContainer}>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>7:00am</Text>
          </View>
          <Dumbbell width={24} height={24} fill="white" />
          <Text style={styles.activityText}>Exercise</Text>
        </View>

        <View style={styles.activityContainer}>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>7:00am</Text>
          </View>
          <Sun width={24} height={24} fill="white" />
          <Text style={styles.activityText}>Breakfast</Text>
        </View>
      </View>

      <View style={styles.impactContainer}>
        <View style={styles.predictedContainer}>
          <Text style={styles.impactTitle}>predicted impact</Text>
        </View>

        <View style={styles.metricsContainer}>
          <View style={styles.metricItem}>
            <Text style={styles.metricTitle}>ENERGY</Text>
            <Text style={styles.metricValue}>+32%</Text>
          </View>

          <View style={[styles.metricItem, styles.borderLeft]}>
            <Text style={styles.metricTitle}>METABOLISM</Text>
            <Text style={styles.metricValue}>+92%</Text>
          </View>

          <View style={[styles.metricItem, styles.borderLeft]}>
            <Text style={styles.metricTitle}>MOOD</Text>
            <Text style={styles.metricValue}>+28%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  habitContainer: {
    width: CARD_WIDTH,
    backgroundColor: 'white',
    borderRadius: 11.5,
    // marginRight: 20,
    paddingVertical: 16,
  },
  habitHeading: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: '#000000',
    paddingHorizontal: 20,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
  },
  streakText: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '500',
  },
  scheduleContainer: {
    backgroundColor: '#435CBF',
    paddingHorizontal: 26,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  activityContainer: {
    alignItems: 'center',
    gap: 8,
  },
  timeContainer: {
    backgroundColor: 'rgba(82, 105, 196, 1)',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  timeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  activityText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  impactContainer: {
    borderRadius: 16,
  },
  predictedContainer: {
    width: 160,
    borderRadius: 4,
    backgroundColor: 'rgba(67, 92, 191, 0.11)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginLeft: 20,
  },
  impactTitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '500',
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  metricItem: {
    width: '33%',
    flex: 1,
    alignItems: 'center',
  },
  borderLeft: {
    borderLeftWidth: 1,
    borderLeftColor: '#E5E5E5',
  },
  metricTitle: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 4,
    fontWeight: '500',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
  },
});

export default HabitCard;