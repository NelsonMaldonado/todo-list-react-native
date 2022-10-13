import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"

const VideoPlayer = () => {
  return (
    <View>
      <ScrollView>
        <Text style={styles.videotext}>
          What would you like to buy today Nelly?
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  videotext: {
    marginTop: 20,
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "aqua",
    color: "darkblue",
  },
})

export default VideoPlayer
