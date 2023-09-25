import React, { useEffect } from "react";

import { StyleSheet, View } from "react-native";

import Mapbox from "@rnmapbox/maps";

Mapbox.setAccessToken(
  "pk.eyJ1IjoicGl4ZWxibG9jay1wYiIsImEiOiJja3VzZmxibjMwcnAyMm9vZDM5N2pkeTZuIn0.v23swpuxdhMzslDRyJqFtA"
);
Mapbox.setConnected(true);
const App = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",
  },

  container: {
    height: 300,

    width: 300,
  },

  map: {
    flex: 1,
  },
});
