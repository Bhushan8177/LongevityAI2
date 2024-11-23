import React from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import TaskCard from './TaskCard';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ITEM_WIDTH = SCREEN_WIDTH - 40;

const TaskCarousel: React.FC = () => {
  const data = [
    { id: 1, color: 'rgba(7, 166, 117, 1)', title: 'Morning Sunlight' },
    { id: 2, color: '#4B4ACF', title: 'Mid-day Meals' },
    { id: 3, color: '#B86E3C', title: 'Evening Routine' },
  ];

  const renderItem = ({ item }: { item: any }) => (
    <TaskCard
      backgroundColor={item.color}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      snapToInterval={ITEM_WIDTH + 20}
      decelerationRate="fast"
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default TaskCarousel;