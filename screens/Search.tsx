import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import SearchBox from "../components/search/SearchBox";
import SearchResults from "../components/search/SearchResults";
import usePostSearch from "../components/hooks/postSearch";
import { useMutation } from "@tanstack/react-query";
import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as Progress from "react-native-progress";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Search">;

const Search = (props: Props) => {
  const { isSuccess, isLoading, data, mutate, reset } = useMutation({
    mutationFn: (strMeal: string) => usePostSearch(strMeal),
  });

  const handleSearch = (query: string) => {
    if (query) {
      mutate(query);
    }
  };

  useFocusEffect(
    useCallback(() => {
      return () => reset();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBoxContainer}>
        <SearchBox style={{ width: "100%" }} onSearchSubmit={handleSearch} />
      </View>
      <View style={styles.resultContainer}>
        {isSuccess && <Text style={styles.resultHeader}>Results</Text>}
        {data?.meals === null && (
          <Text
            style={{
              fontFamily: "Poppins-400",
              fontSize: 24,
              alignSelf: "center",
            }}
          >
            No Result found.
          </Text>
        )}

        <FlatList
          contentContainerStyle={styles.listStyle}
          data={isSuccess && data.meals}
          renderItem={({ item }) => <SearchResults meal={item} />}
          keyExtractor={(item) => item.idMeal}
        />
      </View>
      {isLoading && (
        <View style={styles.loading}>
          <Progress.CircleSnail size={60} color={"#FF7C2B"} />
        </View>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  searchBoxContainer: {
    marginHorizontal: 22,
  },
  resultContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 40,
    paddingHorizontal: 32,
  },
  resultHeader: {
    fontFamily: "Poppins-600",
    fontSize: 30,
    marginBottom: 24,
  },
  listStyle: {
    gap: 14,
  },
  loading: {
    position: "absolute",
    top: "50%",
  },
});
