import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable, Image } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH - 150;


interface TaskCardProps {
  onPress?: () => void;
  title?: string;
  backgroundColor?: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  onPress,
  title,
  backgroundColor = '#05875F'
}) => {
  return (
    <View style={[styles.cardContainer, { backgroundColor }]}>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <View style={styles.upnextContainer}>
            <Text style={styles.upNext}>up next</Text>
          </View>
          <Text style={styles.title}>Morning{'\n'}Sunlight</Text>
          <Text style={styles.subtitle}>10mins • outdoor</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('@/assets/images/yoga.png')} style={{ width: 100, height: 200, marginTop: '10' }} />
        </View>
      </View>
      <Pressable
        style={styles.startButton}
        onPress={onPress}
      >
        <Text style={styles.startButtonText}>start</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_WIDTH,
    height: 200,
    borderRadius: 24,
    paddingHorizontal: 20,
    marginLeft: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    paddingBottom: 12,
  },
  imageContainer: {
    position: 'absolute',
    top: 50,
    right: 0,
    left: 150,
    bottom: 0,
    justifyContent: 'center',
    zIndex: 1,
  },
  upNext: {
    color: 'white',
    fontSize: 16,
    paddingTop: 4,
    marginBottom: 8,
    alignSelf: 'center',
    fontWeight: '700',
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 30,
    marginTop: 42,
  },
  subtitle: {
    color: '#ffffff',
    width: 180,
    fontSize: 18,
    opacity: 0.8,
    fontWeight: '500',
  },
  startButton: {
    backgroundColor: '#000000',
    borderRadius: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  startButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  svg: {
    transform: [{ scale: 1.5 }],
  },
  upnextContainer: {
    position: 'absolute',
    width: 120,
    left: -20,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderTopLeftRadius: 24,
    borderBottomRightRadius: 12,
  },
});

export default TaskCard;