import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { useRef, useState } from "react";
import {
  NativeViewGestureHandlerProps,
  TextInput,
} from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  style: StyleProp<ViewStyle>;
  onSearchSubmit: (query: string) => void;
};

const SearchBox = ({ style, onSearchSubmit }: Props) => {
  const [value, setValue] = useState("");
  const handleSearch = () => {
    onSearchSubmit(value);
    setValue("");
  };
  return (
    <View style={[styles.searchContainer, style]}>
      <Ionicons name="search-outline" size={24} color={"#969696"} />
      <TextInput
        maxLength={40}
        onSubmitEditing={handleSearch}
        onChangeText={setValue}
        value={value}
        style={styles.search}
        placeholder={"Search"}
        placeholderTextColor={"#969696"}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchContainer: {
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: "#E8E8E8",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
    width: 345,
  },
  search: {
    color: "#969696",
    fontFamily: "Poppins-400",
    fontSize: 16,
    flexGrow: 1,
  },
});
