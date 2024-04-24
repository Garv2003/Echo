import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';

const Chat = ({navigation}: {navigation: any}) => {
  console.log('Chat');

  console.log(auth().currentUser);
  return (
    <View>
      <Text>Chat</Text>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text
            style={{
              color: 'blue',
              fontSize: 20,
              marginTop: 20,
            }}>
            Back
          </Text>
        </TouchableOpacity>

        <Text>{auth().currentUser?.displayName}</Text>
        <TouchableOpacity
          onPress={() => {
            auth().signOut();
            navigation.reset({
              index: 0,
              routes: [{name: 'Sign'}],
            });
          }}>
          <Text
            style={{
              color: 'blue',
              fontSize: 20,
              marginTop: 20,
            }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat;
