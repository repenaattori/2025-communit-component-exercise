import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import { PaperProvider, RadioButton } from 'react-native-paper';
import { Dropdown } from 'react-native-paper-dropdown';


const TRAIN_SPLIT = {
  Day1: ['Bench press', 'Incline dumbbell press', 'Cable crossovers', 'Overhead press', 'Lateral raises'],
  Day2: ['Cable row', 'Lat Pulldown', 'Bent over flies', 'Hyperextensions', 'Bicep barbell curls'],
  Day3: ['Squat', 'Leg press', 'Leg extension', 'Leg curl', 'Standing calf raises', 'Plank']
}


export default function App() {

  const [splitday, setSplitday] = useState('Day1');
  const [exercise, setExercise] = useState(TRAIN_SPLIT.Day1[0]);
  const [repetitions, setRepetitions] = useState(0);

  let exercises = TRAIN_SPLIT[splitday].map(e => ({ label: e, value: e }));

  function updateDay(day){
    setExercise(TRAIN_SPLIT[day][0]);
    setSplitday(day);
  }

  return (
    <PaperProvider>
    <View style={styles.container}>
      <RadioButton.Group onValueChange={updateDay} value={splitday}>
        <View style={styles.radioView}>
          <RadioButtonSelection label={'Day1'} />
          <RadioButtonSelection label={'Day2'} />
          <RadioButtonSelection label={'Day3'} />
        </View>
      </RadioButton.Group>
      <Dropdown
        options={exercises}
        value={exercise}
        onSelect={setExercise}
        label={'Exercise'}
        mode='outlined'
      />
      <View style={styles.spinnerView}>
        <Text>Repetitions</Text>
        <View>
          <InputSpinner
            value={repetitions}
            onChange={setRepetitions}
            skin='clean'
          />
        </View>
      </View>
      <Text style={styles.result}>{exercise} x {repetitions}</Text>
    </View>
    </PaperProvider>
  );
}

function RadioButtonSelection({ label }) {
  return (
    <View style={styles.radioView}>
      <Text>{label}</Text>
      <RadioButton value={label} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: 10
  },
  radioView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  spinnerView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10
  },
  result:{
    fontSize: 22,
    fontWeight: 'bold'
  }
});
