import * as React from "react";
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import { Button, Text, Snackbar, Portal } from 'react-native-paper';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';

const Page = () => {
  const [showMore, setShowMore] = React.useState(false);

  const learnMore = () => {
    setShowMore(!showMore);
  }

  const [notify, setNotify] = React.useState(false);

  const doNotify = () => {
	setNotify(true);
	console.log("hi");
  }

  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button style={styles.infoButton} onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.heading}>Real time feedback scan</Text>
      <Text style={styles.body}>Gebruik de app om de veiligheid van je huis te waarborgen. Scan de ruimtes van het huis en krijg meteen te zien waar potentieel brandgevaar is!</Text>
      <Button style={styles.infoButton} onPress={learnMore} mode="contained">Leer meer</Button>
      {showMore &&
      <View>
        <Text style={styles.heading}>Resultaten bij de hand</Text>
        <Text style={styles.body}>Tijdens de scan of daarna kan te allen tijde een lijst worden gegeven met de gescande gevaren.</Text>
        <Text style={styles.heading}>Checklist van apparaten</Text>
        <Text style={styles.body}>Om het huis optimaal te beschermen, kan de app je vragen om de gescande gevaren op te lossen. Met enkele aanbevelingen helpen we je daar gemakkelijk doorheen!</Text>
      </View>
      }
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>FLIP</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
	  <Button style={styles.infoButton} onPress={doNotify}>Wat?</Button>
		<Portal>
	  <Snackbar visible={notify} onDismiss={() => {setNotify(false)}} action={{
          label: 'Ok',
          onPress: () => {
            // Do something
          },
        }}>2 Dangers detected</Snackbar>
</Portal>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    height: '100%',
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16
  },
  body: {
    fontSize: 14,
    textAlign: "left",
    marginBottom: 16
  },
  camera: {
    flex: 1,
    width: 380,
    height: 480
  },
  infoButton: {
    marginBottom: 16
  }
});

export default Page;
