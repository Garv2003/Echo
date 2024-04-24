import React from 'react';
import {View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';

const Home = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home</Text>
      <Text>{auth().currentUser?.displayName}</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          auth().signOut();
          navigation.reset({
            index: 0,
            routes: [{name: 'Sign'}],
          });
        }}>
        <Text style={styles.btnText}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(17 24 39)',
  },
  subcontainer: {
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
    color: 'white',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    margin: 10,
    padding: 10,
    width: '90%',
    borderRadius: 10,
    color: '#000',
    backgroundColor: '#ffffff',
  },
  tagline: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  subtext: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    color: 'rgb(2 132 199)',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    margin: 10,
    marginBottom: 5,
    width: '85%',
    backgroundColor: 'rgb(2 132 199)',
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
