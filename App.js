import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native'; // import ALL core compontents

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!'/>
        <Button title="Add Goal"/>
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomColor:'#cccccc',
    borderBottomWidth: 1
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
});
