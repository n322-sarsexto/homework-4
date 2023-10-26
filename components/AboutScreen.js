import * as React from "react";

import { Text, View, StyleSheet, Button } from "react-native";

export default function AboutScreen({ route }) {
  let dataObj = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        This is the about screen with this data. {dataObj.desc}{" "}
        {dataObj.additional}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
