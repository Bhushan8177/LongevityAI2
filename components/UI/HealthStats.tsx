import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from 'react-native';

interface HealthCardProps {
    title: string;
    score: number;
    low: number;
    high: number;
    details: { label: string; value: number }[];
}


const HealthCard = (props: HealthCardProps) => {
    const [expanded, setExpanded] = useState(false);
    const { score, low, high } = props;

    return (
        <View style={styles.card}>
            {/* Header */}
            <TouchableOpacity
                onPress={() => setExpanded(!expanded)}
                style={styles.cardHeader}
            >
                <Text style={styles.cardTitle}>{props.title}</Text>
                <Text style={styles.breakdownToggle}>
                    {expanded ? 'breakdown ▲' : 'breakdown ▼'}
                </Text>
            </TouchableOpacity>

            {/* Score Bar */}
            <View style={styles.scoreContainer}>
                <View style={styles.scoreBar}>
                    <View
                        style={[
                            styles.scoreFill,
                            { width: `${((score - low) / (high - low)) * 100}%` },
                        ]}
                    />
                </View>
                <Text style={styles.currentScore}>{score} CURRENT</Text>
                <View style={styles.scoreRange}>
                    <Text style={styles.rangeText}>52W LOW{'\n'}<Text style={{ fontSize: 14, color: 'rgba(95, 95, 95, 1)', fontWeight: 700 }}>{low}</Text></Text>
                    <Text style={styles.rangeText}>52W HIGH{'\n'}<Text style={{ fontSize: 14, color: 'rgba(95, 95, 95, 1)', fontWeight: 700 }}>{high}</Text></Text>
                </View>
            </View>

            {/* Breakdown Section */}
            {expanded && props.details.length > 0 && (
                <View style={styles.breakdown}>
                    <View style={styles.breakdownHeader}>
                        <Text style={styles.breakdownTitle}>breakdown</Text>
                        {/* <View style={styles.line} /> */}
                    </View>
                    <FlatList
                        data={props.details}
                        numColumns={2}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.breakdownItem}>
                                <Text style={styles.breakdownLabel}>{item.label}</Text>
                                <Text style={styles.breakdownValue}>{item.value}</Text>
                            </View>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

const HealthStats = () => {
    const data = [
        {
            title: 'Physical health',
            score: 78,
            low: 57,
            high: 97,
            details: [
                { label: 'STRENGTH', value: 57 },
                { label: 'ENDURANCE', value: 64 },
                { label: 'DIET', value: 96 },
                { label: 'HYDRATION', value: 96 },
            ],
        },
        {
            title: 'Vital signs',
            score: 60,
            low: 46,
            high: 75,
            details: [],
        },
        {
            title: 'Mental',
            score: 68,
            low: 60,
            high: 70,
            details: [],
        },
    ];

    return (
        <View style={styles.container}>
            {data.map((item, index) => (
                <HealthCard
                    key={index}
                    title={item.title}
                    score={item.score}
                    low={item.low}
                    high={item.high}
                    details={item.details}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        marginTop: 12,
        paddingVertical: 16,
        width: '100%',
    },
    card: {
        backgroundColor: 'rgba(238, 238, 238, 1)',
        marginBottom: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    breakdownToggle: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 1)',
    },
    scoreContainer: {
        padding: 16,
    },
    scoreBar: {
        height: 6,
        backgroundColor: '#e0e0e0',
        borderRadius: 3,
        overflow: 'hidden',
        marginBottom: 8,
    },
    scoreFill: {
        height: '100%',
        backgroundColor: '#4caf50',
        borderRadius: 3,
    },
    currentScore: {
        position: 'absolute',
        top: 12,
        left: '50%',
        transform: [{ translateX: -50 }],
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#4caf50',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 8,
    },
    scoreRange: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    rangeText: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.6)',
    },
    breakdown: {
    },
    breakdownHeader: {
        // flexDirection: 'row',
        marginBottom: 12,
    },
    breakdownTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: 'rgba(0, 0, 0, 1)',
        textAlign: 'center',
    },
    breakdownItem: {
        flex: 1,
        alignItems: 'center',
        padding: 9.5,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderLeftColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0.4,
    },
    breakdownLabel: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgba(95, 95, 95, 1)',
        marginBottom: 4,
    },
    breakdownValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    line: {
        // flex: 1,
        height: 10,
        width: 0.4,
        backgroundColor: 'black',
    },
});

export default HealthStats;






