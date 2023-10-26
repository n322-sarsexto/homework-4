import * as React from "react";

import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";

import { useState } from "react";

export default function HomeScreen({ navigation }) {
  const data = { desc: "What is going on?", additional: "Fun things!" };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}> Home Screen </Text>

      <Button
        title="Go to About"
        onPress={() => navigation.navigate("AboutScreen", data)}
      />
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
