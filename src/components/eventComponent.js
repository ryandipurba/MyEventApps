/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import CountDown from 'react-native-countdown-component';

const EventComponent = (props) => {
  const { item } = props;

  const createCountdown = (date) => {
    let startDate = new Date();
    let endDate = new Date(date);
    let seconds = (endDate.getTime() - startDate.getTime()) / 1000;
    if (seconds < 0) {
      seconds = 0;
    }
    return seconds;
  };

  const formatDate = (dateRaw) => {
    let d = new Date(dateRaw);
    let tahun = d.getFullYear();
    let bulan = d.getMonth();
    let tanggal = d.getDate();
    let hari = d.getDay();

    switch (hari) {
      case 0:
        hari = 'Minggu';
        break;
      case 1:
        hari = 'Senin';
        break;
      case 2:
        hari = 'Selasa';
        break;
      case 3:
        hari = 'Rabu';
        break;
      case 4:
        hari = 'Kamis';
        break;
      case 5:
        hari = "Jum'at";
        break;
      case 6:
        hari = 'Sabtu';
        break;
    }

    switch (bulan) {
      case 0:
        bulan = 'Januari';
        break;
      case 1:
        bulan = 'Februari';
        break;
      case 2:
        bulan = 'Maret';
        break;
      case 3:
        bulan = 'April';
        break;
      case 4:
        bulan = 'Mei';
        break;
      case 5:
        bulan = 'Juni';
        break;
      case 6:
        bulan = 'Juli';
        break;
      case 7:
        bulan = 'Agustus';
        break;
      case 8:
        bulan = 'September';
        break;
      case 9:
        bulan = 'Oktober';
        break;
      case 10:
        bulan = 'November';
        break;
      case 11:
        bulan = 'Desember';
        break;
    }
    let tampilTanggal = hari + ', ' + tanggal + ' ' + bulan + ' ' + tahun;

    return tampilTanggal;
  };

  return (
    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
      <Card>
        <CardItem header style={{ marginBottom: 0 }}>
          <Text>
            <Text style={{ color: '#aaa' }}>{formatDate(item.date_time)}</Text>{' '}
            {'\n'}
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <CountDown
              size={20}
              until={createCountdown(item.date_time)}
              onFinish={() => alert('Finished')}
              digitStyle={{
                backgroundColor: '#FFF',
                borderWidth: 2,
                borderColor: '#f4a21e',
              }}
              digitTxtStyle={{ color: '#f4a21e' }}
              timeToShow={['D', 'H', 'M', 'S']}
            />
          </Body>
        </CardItem>
      </Card>
    </View>
  );
};

export default EventComponent;
