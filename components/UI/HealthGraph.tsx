import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ChevronLeft } from 'lucide-react-native';
import UpArrow from '@/assets/svgs/upArrow.svg';
import DownArrow from '@/assets/svgs/downArrow.svg';

const screenWidth = Dimensions.get('window').width;

// Mock data for the chart
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
        {
            data: [50, 55, 58, 62, 65, 68, 72, 75, 78],
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            strokeWidth: 2
        }
    ]
};

const periods = ['1m', '3m', '6m', '12m'];

export default function HealthScoreGraph() {
    const [selectedPeriod, setSelectedPeriod] = useState('1m');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <ChevronLeft color="#fff" size={24} />
            </View>

            <View style={styles.scoreContainer}>
                <Text style={styles.score}>78<Text style={styles.denominator}>/100</Text></Text>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>My Health Score</Text>
                    <View style={{ flexDirection: 'row' , gap: 5}}>
                        <UpArrow width={15} height={20} />
                        <Text style={styles.subtitle}>improving steadily</Text>
                    </View>
                </View>
            </View>

            <View style={styles.chartContainer}>
                <LineChart
                    data={data}
                    width={screenWidth + 140}
                    height={170}
                    chartConfig={{
                        backgroundGradientFrom: '#629E73',
                        backgroundGradientToOpacity: 2,
                        backgroundGradientTo: '#629E73',
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
                    }}
                    bezier
                    withDots={false}
                    withShadow={false}
                    withVerticalLines={false}
                    withHorizontalLines={false}
                    withVerticalLabels={false}
                    withHorizontalLabels={false}
                />
            </View>

            <View style={styles.periodSelector}>
                {periods.map((period) => (
                    <TouchableOpacity
                        key={period}
                        style={[
                            styles.periodButton,
                            selectedPeriod === period && styles.selectedPeriod,
                        ]}
                        onPress={() => setSelectedPeriod(period)}
                    >
                        <Text
                            style={[
                                styles.periodText,
                                selectedPeriod === period && styles.selectedPeriodText,
                            ]}
                        >
                            {period}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Footer Section */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'rgba(7, 138, 96, 0.9)', paddingLeft: '10', paddingVertical: '10' }}>
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#629E73',
        padding: 20,
    },
    header: {
        marginBottom: 20,
    },
    scoreContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        // marginBottom: 40,
        marginLeft: 35,
    },
    score: {
        fontSize: 56,
        fontWeight: '700',
        color: '#ffffff',
        marginRight: 15,
    },
    denominator: {
        fontSize: 12,
        color: '#ffffff',
        opacity: 0.8,
    },
    titleContainer: {
        marginTop: 18,
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
        color: '#ffffff',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#ffffff',
        opacity: 0.9,
    },
    chartContainer: {
        alignItems: 'center',
    },
    periodSelector: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    periodButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    selectedPeriod: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    periodText: {
        color: '#ffffff',
        opacity: 0.8,
        fontSize: 16,
    },
    selectedPeriodText: {
        opacity: 1,
        fontWeight: '500',
    },
});

