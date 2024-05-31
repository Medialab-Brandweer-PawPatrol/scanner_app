import * as React from "react";
import {StyleSheet, View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Appbar, PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import Page from './app/Page';
import Theme from './app/Theme';

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={Theme}>
        <View>
          <Appbar.Header elevated>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title="Ember Alert" />
          </Appbar.Header>
          <Page />
        </View>
      </PaperProvider>
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
