import { StyleSheet, FlatList, Text, View } from "react-native";
import React from "react";
import Category from "../components/Category";
import useGetAllCategories from "../components/hooks/getCategories";
import AnimatedView from "../components/Ui/AnimatedView";
import Loading from "../components/Ui/Loading";

type Props = {};

const Home = (props: Props) => {
  const { isLoading, isError, data } = useGetAllCategories();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AnimatedView style={{ flex: 1 }}>
      <FlatList
        initialNumToRender={8}
        maxToRenderPerBatch={2}
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={{ paddingTop: 31 }}
        columnWrapperStyle={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          marginBottom: 16,
          gap: 16,
        }}
        data={data}
        renderItem={({ item }) => (
          <Category
            id={item.idCategory}
            name={item.strCategory}
            image={item.strCategoryThumb}
          />
        )}
        ListHeaderComponent={() => <Text style={styles.header}>Home</Text>}
        keyExtractor={(item) => item.idCategory}
        numColumns={2}
      />
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 25,
  },
  header: {
    fontFamily: "Poppins-600",
    fontSize: 30,
    marginBottom: 30,
  },
});

export default Home;
