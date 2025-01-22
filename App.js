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

  
  return (
    <PaperProvider>
    
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
