import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface JourneyItemProps {
    date: string;
    title: string;
    description: string;
}

const JourneyItem = (props: JourneyItemProps) => {
    return (
        <View style={styles.journeyItem}>
            {/* Timeline Line and Dot */}
            <View style={styles.timeline}>
                <View style={styles.dot} />
                <View style={styles.line} />
            </View>

            {/* Content */}
            <View style={styles.content}>
                <Text style={styles.date}>{props.date}</Text>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.description}>{props.description}</Text>
            </View>
        </View>
    );
};

const JourneyTimeline = () => {
    const journeyData = [
        {
            date: 'SEP 15',
            title: 'New habit formed: Meditation practice',
            description: 'You completed 15 day streak',
        },
        {
            date: 'OCT 01',
            title: 'Consistent sleep–wake cycle established',
            description: 'You completed 30 day morning routine streak',
        },
        {
            date: 'SEP 15',
            title: 'New habit formed: Meditation practice',
            description: 'You completed 15 day streak',
        },
        {
            date: 'OCT 01',
            title: 'Consistent sleep–wake cycle established',
            description: 'You completed 30 day morning routine streak',
        },
    ];

    return (
        <ScrollView style={styles.container}>
            {journeyData.map((item, index) => (
                <JourneyItem
                    key={index}
                    date={item.date}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    journeyItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    timeline: {
        alignItems: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#000',
    },
    line: {
        flex: 1,
        width: 2,
        backgroundColor: '#ccc',
    },
    content: {
        flex: 1,
        paddingLeft: 16,
    },
    date: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#888',
        marginBottom: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
});

export default JourneyTimeline;