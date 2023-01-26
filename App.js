import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Button,
  TextInput, 
  ScrollView,
  FlatList
} from 'react-native'; // import ALL core compontents

export default function App() {
const [enteredGoalText, setEnteredGoalText] = useState('');
const [courseGoals, setCourseGoals] = useState([]);

function goalInputHandler(enteredText) {
  setEnteredGoalText(enteredText);
};

function addGoalHander(){
  setCourseGoals(currentCourseGoals => [
    ...currentCourseGoals, 
    {text: enteredGoalText, id: Math.random().toString()},
  ]);
};

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHander}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
          data ={courseGoals} 
          renderItem={(itemData) => {
            return(
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }} 
          keyExtractor={(item, index) =>{
            return item.id;
          }}
          alwaysBounceVertical={false}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor:'#cccccc',
    borderBottomWidth: 1
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer:{
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  },
  goalText:{
    color: 'white'
  }
});


// <ScrollView alwaysBounceVertical={false}>
// ScrollView is not great for dynamic lists. It will hold the memory of EVERYTHING
// at all times. Better to use FlatList instead.
