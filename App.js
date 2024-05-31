import * as React from "react";
import {StyleSheet, View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Text, Appbar } from 'react-native-paper';
import Page from './app/Page';

const App = () => {
  return (
    <SafeAreaProvider>
      <View>
        <Appbar.Header elevated>
          <Appbar.BackAction onPress={() => {}} />
          <Appbar.Content title="Brandgevaar Scanner" />
        </Appbar.Header>
        <Page />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
  },
})

export default App;
