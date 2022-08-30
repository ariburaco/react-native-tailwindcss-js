import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
    <View style={tw`container flex flex-col justify-center items-center bg-zinc-100 h-full`}>
      <Text>Open up App.js to start working on your asdsadas app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

