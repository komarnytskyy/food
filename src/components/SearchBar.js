import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.view}>
      <Feather name="search" style={styles.searchIcon} color="black" />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Search"
        value={term}
        onChangeText={(value) => onTermChange(value)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: "#dfdfdf",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  searchIcon: {
    marginHorizontal: 15,
    alignSelf: "center",
    fontSize: 35,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
