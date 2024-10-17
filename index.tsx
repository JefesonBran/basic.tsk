import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (

    <ScrollView>
      <view style={styles.container}> 
          <text>Os Maiores da ETEC</text>
          <text>vida bela e curta</text>
      </view>
      <view style={styles.container2}>
        <text>texto 1</text><br></br>
        <text>texto 2</text>
      </view>
      <TextInput></TextInput>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"black",
    alignItems:"center",
    justifyContent:"center",
    color:"blue",
    height:200,
  },
  container2:{
    backgroundColor:"blue",
    alignItems:"center",
    justifyContent:"center",
    color:"white",
    height:200,
  },

  }
)