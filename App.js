import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import { CheckBox } from 'react-native-elements';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calls: [
        {
          id: 1,
          name: 'Mark Doe',
          date: '12 jan',
          time: '11:14 am',
          image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
        },
        {
          id: 2,
          name: 'Clark Man',
          date: '12 jul',
          time: '15:58 am',
          image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        },
        {
          id: 3,
          name: 'Jaden Boor',
          date: '12 aug',
          time: '12:45 am',
          image: 'https://bootdey.com/img/Content/avatar/avatar5.png',
        },
        {
          id: 4,
          name: 'Srick Tree',
          date: '12 feb',
          time: '08:32 am',
          image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
        },
        {
          id: 5,
          name: 'John Doe',
          date: '12 oct',
          time: '07:45 am',
          image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
        },
        {
          id: 6,
          name: 'John Doe',
          date: '12 jan',
          time: '09:54 am',
          image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
        },
        {
          id: 8,
          name: 'John Doe',
          date: '12 jul',
          time: '11:22 am',
          image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
          id: 9,
          name: 'John Doe',
          date: '12 aug',
          time: '13:33 am',
          image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
        },
        {
          id: 10,
          name: 'John Doe',
          date: '12 oct',
          time: '11:58 am',
          image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
        },
        {
          id: 11,
          name: 'John Doe',
          date: '12 jan',
          time: '09:28 am',
          image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },
      ],
      ids: [],
    };
  }

  isChecked = (itemId) => {
    const isThere = this.state.ids.includes(itemId);
    console.log(isThere);
    return isThere;
  };

  toggleChecked = (itemId) => {
    const ids = [...this.state.ids, itemId];

    if (this.isChecked(itemId)) {
      this.setState({
        ...this.state,
        ids: this.state.ids.filter((id) => id !== itemId),
      });
    } else {
      this.setState({
        ...this.state,
        ids,
      });
    }
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{item.name}</Text>
            </View>
            <View style={styles.end}>
              <Image
                style={[
                  styles.icon,
                  { marginLeft: 15, marginRight: 5, width: 14, height: 14 },
                ]}
                source={{
                  uri: 'https://img.icons8.com/small/14/000000/double-tick.png',
                }}
              />
              <Text style={styles.time}>
                {item.date} {item.time}
              </Text>
            </View>
          </View>
          <CheckBox
            // iconRight
            title="SMS"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.isChecked(item.id)}
            onPress={() => this.toggleChecked(item.id)}
          />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 26,
            color: '#0080ff',
            textAlign: 'center',
            marginBottom: 30,
            marginTop: 10,
          }}
        >
          Testing check box
        </Text>
        <FlatList
          extraData={this.state}
          data={this.state.calls}
          keyExtractor={(item) => {
            return `${item.id}`;
          }}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: 270,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
  icon: {
    height: 28,
    width: 28,
  },
});

export default App;
