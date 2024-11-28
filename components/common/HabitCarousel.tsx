import React from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import HabitCard from './HabitCard';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ITEM_WIDTH = SCREEN_WIDTH - 40;

const InsightsCarousel: React.FC = () => {
    const data = [
        {
            id: 1
        },
    ];

    const renderItem = ({ item }: { item: any }) => (
        <HabitCard />
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
        flexGrow: 1
    }
});

export default InsightsCarousel;