import * as React from "react";
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';

const App = () => {
  const [showMore, setShowMore] = React.useState(false);

  const learnMore = () => {
    setShowMore(!showMore);
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.heading}>Loprem ipsum dolor sil amet.</Text>
        <Text style={styles.body}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</Text>
        <Button 
          onPress={learnMore}
          color="#C00000"
          title="Meer informatie"
        />
        {showMore &&
        <Text style={styles.body}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        }
      </View>
    </SafeAreaView>
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
  }
});

export default App;
