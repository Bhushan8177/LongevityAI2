import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import UpArrow from '@/assets/svgs/upArrow.svg';
import DownArrow from '@/assets/svgs/downArrow.svg';
import Tip from '@/assets/svgs/tip.svg';


const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH - 100;


interface InsightCardProps {
    title?: string;
    stressLevel?: string;
    stressAmount?: string;
    stressImg?: any;
    energyLevel?: string;
    energyAmount?: string;
    energyImg?: any;
    tip?: string;
    backgroundColor?: string;
}

const InsightCard: React.FC<InsightCardProps> = ({
    title,
    stressLevel,
    stressAmount,
    stressImg,
    energyLevel,
    energyAmount,
    energyImg,
    tip,
    backgroundColor = '#05875F'
}) => {
    return (
        <View style={[styles.cardContainer, { backgroundColor }]}>
            <Text style={{ marginHorizontal:20,color: 'white', fontSize: 16, fontWeight: '700', marginTop: 15, letterSpacing: 0.7 }}>{title}</Text>

            <View style={{marginHorizontal:20, flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'rgba(0, 0, 0, 0.08)', paddingLeft: '10', paddingVertical: '10', borderRadius: 12 }}>
                <View style={{ alignItems: 'center', gap: 8, borderRightColor: 'rgba(255,255,255,0.5)', borderRightWidth: 0.2, width: '50%', paddingVertical: 5 }}>
                    <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, fontWeight: '700' }}>
                        {stressLevel}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '10' }}>
                        <Text style={{ fontSize: 20, fontWeight: '800', color: 'white' }}>{stressAmount}%</Text>
                        <DownArrow width={15} height={9} />

                    </View>
                </View>
                <View style={{ alignItems: 'center', gap: 8, borderRightColor: 'rgba(255,255,255,0.5)', borderRightWidth: 0.2, width: '50%', paddingVertical: 5 }}>
                    <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, fontWeight: '700' }}>
                        {energyLevel}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                        <Text style={{ fontSize: 20, fontWeight: '800', color: 'white' }}>{energyAmount}%</Text>
                        <UpArrow width={15} height={20} />
                    </View>
                </View>

            </View>

            <View style={styles.tipContainer}>
                <Tip width={20} height={20} />
                <Text style={{ marginLeft: 10, color: 'rgba(0, 0, 0, 1)', fontSize: 14, fontWeight: '500' }}>
                    {tip}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'column',
        gap: 10,
        width: CARD_WIDTH,
        height: 190,
        borderRadius: 12,
        marginHorizontal: 10,
    },
    tipContainer: {
        flexDirection: 'row',
        width: CARD_WIDTH,
        backgroundColor: 'rgba(204, 214, 251, 1)', 
        padding: 10,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
    },
});

export default InsightCard;