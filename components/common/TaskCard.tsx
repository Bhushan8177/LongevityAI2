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
      <View style={styles.imageContainer}>
        <Image source={require('@/assets/images/yoga.png')} style={{ width: 100, height: 200 }} />
      </View>
      <View style={styles.upnextContainer}>
        <Text style={styles.upNext}>up next</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Morning{'\n'}Sunlight</Text>
          <Text style={styles.subtitle}>10mins • outdoor</Text>
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
    paddingBottom: 16,
    borderRadius: 24,
    marginLeft: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 14,
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 160,
    bottom: 0,
    // justifyContent: 'center',
    zIndex: 1,
  },
  upNext: {
    color: 'white',
    fontSize: 16,
    paddingTop: 4,
    marginBottom: 7,
    alignSelf: 'center',
    fontWeight: '700',
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 30,
    marginTop: 45,
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
    borderRadius: 25,
    paddingVertical: 11,
    paddingHorizontal: 22,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    marginHorizontal: 12,
  },
  startButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  svg: {
    transform: [{ scale: 1.5 }],
  },
  upnextContainer: {
    position: 'absolute',
    width: 120,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderTopLeftRadius: 24,
    borderBottomRightRadius: 12,
  },
});

export default TaskCard;