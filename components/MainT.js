import React from "react"
import { View, Text, StyleSheet } from "react-native"

const MainTitle = () => {
  return (
    <View>
      <Text style={styles.videotext}>
        Write down task to add, press task to delete{" "}
      </Text>
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

export default MainTitle
