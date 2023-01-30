import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {StyleSheet, View, FlatList} from 'react-native'; // import ALL core compontents
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
const [courseGoals, setCourseGoals] = useState([]);

function addGoalHandler(enteredGoalText) {
  setCourseGoals((currentCourseGoals) => [
    ...currentCourseGoals, 
    {text: enteredGoalText, id: Math.random().toString()},
  ]);
}

function deleteGoalHandler(id) {
  setCourseGoals(currentCourseGoals => {
    return currentCourseGoals.filter((goal) => goal.id !== id); //filter returns a new array minus all the items filtered out.
  });
}

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList 
          data ={courseGoals} 
          renderItem={(itemData) => {
            return(
              <GoalItem 
                text={itemData.item.text} 
                onDeleteItem = {deleteGoalHandler} 
              />
            );        
          }} 
          keyExtractor={(item, index) =>{
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
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
  goalsContainer:{
    flex: 5
  }
});


// <ScrollView alwaysBounceVertical={false}>
// ScrollView is not great for dynamic lists. It will hold the memory of EVERYTHING
// at all times. Better to use FlatList instead.
