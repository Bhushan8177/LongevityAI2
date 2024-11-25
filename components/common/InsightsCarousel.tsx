import React from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import InsightCard from './InsightCard';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ITEM_WIDTH = SCREEN_WIDTH - 40;

const InsightsCarousel: React.FC = () => {
  const data = [
    {
      id: 1, title: 'Better sleep quality on days with evening meditation', insight1: {
        level: 'STRESS LEVELS',
        amount: '23',
        img: require('@/assets/svgs/downArrow.svg')
      },
      insight2: {
        level: 'ENERGY LEVELS',
        amount: '56',
        img: require('@/assets/svgs/upArrow.svg')
      },
      tip: '10min meditation before bed suggested.'
    },
    {
      id: 2, title: 'Morning sunlight increases productivity', insight1: {
        level: 'STRESS LEVELS',
        amount: '73',
        img: require('@/assets/svgs/downArrow.svg')
      },
      insight2: {
        level: 'ENERGY LEVELS',
        amount: '16',
        img: require('@/assets/svgs/upArrow.svg')
      },
      tip: '10min meditation before bed suggested.'
    }
  ];

  const renderItem = ({ item }: { item: any }) => (
    <InsightCard
      title={item.title}
      stressLevel={item.insight1.level}
      stressAmount={item.insight1.amount}
      stressImg={item.insight1.img}
      energyLevel={item.insight2.level}
      energyAmount={item.insight2.amount}
      energyImg={item.insight2.img}
      tip={item.tip}
      backgroundColor='rgba(67, 92, 191, 1)'
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

export default InsightsCarousel;