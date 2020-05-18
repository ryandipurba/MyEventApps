/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import EventComponent from '../components/eventComponent.js';
import { eventsSelector } from '../reducers/events.js';
import { SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = (props) => {
  const { events } = useSelector(eventsSelector);

  const eventList = () => {
    const eventsShow = events.filter(function (event) {
      let startDate = new Date();
      let endDate = new Date(event.date_time);
      let seconds = (endDate.getTime() - startDate.getTime()) / 1000;
      return seconds > 0;
    });

    eventsShow.sort(function (a, b) {
      var dateA = new Date(a.date_time),
        dateB = new Date(b.date_time);
      return dateA - dateB;
    });

    return (
      <FlatList
        data={eventsShow}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <EventComponent key={item.key} item={item} />}
      />
    );
  };

  const toAddScreen = () => {
    props.navigation.navigate('Add');
  };

  return (
    <>
      <SafeAreaView>{eventList()}</SafeAreaView>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'rgba(0,0,0,0.2)',
          width: 70,
          position: 'absolute',
          bottom: 20,
          right: 20,
          height: 70,
          backgroundColor: '#1AA4EA',
          borderRadius: 100,
        }}
        onPress={toAddScreen}>
        <Icon
          name="ios-add"
          color="#ccc"
          size={25}
        />
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;
