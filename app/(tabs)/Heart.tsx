import JourneyTimeline from '@/components/UI/JourneyTimeline';
import { ScrollView } from 'moti';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HealthStats from '@/components/UI/HealthStats';
import HealthScoreGraph from '@/components/UI/HealthGraph';

const TimelineItem = ({ date, title, description, isLastItem }) => {
  return (
    <View style={styles.timelineItem}>
      <View style={styles.timelineLine}>
        <View style={styles.timelineDot} />
        {!isLastItem && <View style={styles.verticalLine} />}
      </View>
      <View style={styles.timelineContent}>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
    </View>
  );
};

const TabSwitch = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeTimeFilter, setActiveTimeFilter] = useState('1m');

  const timeFilters = [
    { id: '1m', label: '1m ago' },
    { id: '3m', label: '3m ago' },
    { id: '6m', label: '6m ago' },
  ];

  const timelineData = [
    {
      date: 'SEP 15',
      title: 'New habit formed: Meditation practice',
      description: 'you completed 15 day streak',
    },
    {
      date: 'OCT 01',
      title: 'Consistent sleep-wake cycle established',
      description: 'you completed 30 day morning routine streak',
    },
    {
      date: 'SEP 15',
      title: 'New habit formed: Meditation practice',
      description: 'you completed 15 day streak',
    },
    {
      date: 'OCT 01',
      title: 'Consistent sleep-wake cycle established',
      description: 'you completed 30 day morning routine streak',
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.graphContainer}>
          <HealthScoreGraph />
        </View>
        <View style={styles.belowContainer}>
          <View style={styles.tabContainer}>

            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === 'overview' ? styles.activeTab : null,
              ]}
              onPress={() => setActiveTab('overview')}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'overview' ? styles.activeTabText : null,
                ]}
              >
                overview
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === 'journey' ? styles.activeTab : null,
              ]}
              onPress={() => setActiveTab('journey')}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'journey' ? styles.activeTabText : null,
                ]}
              >
                journey
              </Text>
            </TouchableOpacity>
          </View>

          {activeTab === 'overview' ? (
            <>
              <View style={styles.timeFiltersContainer}>
                {timeFilters.map((filter) => (
                  <TouchableOpacity
                    key={filter.id}
                    style={[
                      styles.timeFilter]}
                    onPress={() => setActiveTimeFilter(filter.id)}
                  >
                    <Text
                      style={[
                        styles.timeFilterText,
                        activeTimeFilter === filter.id && styles.activeTimeFilterText,
                      ]}
                    >
                      {filter.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <ScrollView style={styles.timelineContainer}>
                {timelineData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    date={item.date}
                    title={item.title}
                    description={item.description}
                    isLastItem={index === timelineData.length - 1}
                  />
                ))}
              </ScrollView>
            </>
          ) : (
            <HealthStats />
          )}

        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  graphContainer: {

    // backgroundColor: '#000',
  },
  belowContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 0.4,
    borderRadius: 12,
    margin: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#000',
    borderRadius: 80,
    marginTop: 16,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    flex: 1,
    paddingVertical: 9,
    paddingHorizontal: 16,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  activeTab: {
    backgroundColor: '#fff',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  activeTabText: {
    color: '#000',
  },
  timeFiltersContainer: {
    marginVertical: 16,
    flexDirection: 'row',
    borderWidth: 0.4,
    borderLeftColor: 'rgba(0, 0, 0, 0.03)',
    borderRightColor: 'rgba(0, 0, 0, 0.03)',
    borderTopColor: 'rgba(0, 0, 0, 0.7)',
    borderBottomColor: 'rgba(0, 0, 0, 0.7)',
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
  },
  timeFilter: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.4,
    borderRightColor: 'rgba(0, 0, 0, 0.7)',
  },
  timeFilterText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeTimeFilterText: {
    color: '#000',
    fontWeight: '600',
  },
  timelineContainer: {
    width: '100%',
    paddingHorizontal: 11,
    paddingTop: 8,
    paddingBottom: 32,
  },
  timelineItem: {
    flexDirection: 'row',
  },
  timelineLine: {
    marginTop: 5,
    width: 24,
    alignItems: 'center',
  },
  timelineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#666',
  },
  verticalLine: {
    width: 1,
    height: 80,
    backgroundColor: '#E5E5E5',
  },
  timelineContent: {
    flex: 1,
    marginLeft: 12,
    paddingRight: 16,
  },
  dateText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    fontWeight: '500',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default TabSwitch;








