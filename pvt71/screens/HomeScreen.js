import React from "react";
import { StyleSheet, View } from "react-native";
import { Timer } from "../components/Timer";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.timerContainer}>
          <Timer style={styles.timer} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  timerContainer: {
    paddingTop: 120,
    alignItems: "center",
    marginHorizontal: 150
  }
});
