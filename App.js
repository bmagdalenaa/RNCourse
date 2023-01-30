import { useState } from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native'; // import ALL core compontents
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
const [modalIsVisible, setModalIsVisible] = useState(false);
const [courseGoals, setCourseGoals] = useState([]);

function startAddGoalHandler() {
  setModalIsVisible(true);
}

function endAddGoalHandler() {
  setModalIsVisible(false);
}

function addGoalHandler(enteredGoalText) {
  setCourseGoals((currentCourseGoals) => [
    ...currentCourseGoals,
    { text: enteredGoalText, id: Math.random().toString() },
  ]);
  endAddGoalHandler();
}

function deleteGoalHandler(id) {
  setCourseGoals((currentCourseGoals) => {
    return currentCourseGoals.filter((goal) => goal.id !== id); //filter returns a new array minus all the items filtered out.
  });
}

return (
  <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#a065ec"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  </>
);
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});


// <ScrollView alwaysBounceVertical={false}>
// ScrollView is not great for dynamic lists. It will hold the memory of EVERYTHING
// at all times. Better to use FlatList instead.
