import {
  Dimensions,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import ScreenHeader from "./ScreenHeader";

type Props = {
  data: any;
  headerTitle: JSX.Element;
  renderItem: ListRenderItem<any>;
};
const width = Dimensions.get("window").width;

const List = ({ data, headerTitle, renderItem }: Props) => {
  return (
    <FlatList
      getItemLayout={(data, index) => ({
        length: width / 2 + 36,
        offset: width / 2 + 36 * index,
        index,
      })}
      initialNumToRender={6}
      maxToRenderPerBatch={6}
      removeClippedSubviews={true}
      showsVerticalScrollIndicator={false}
      ListHeaderComponentStyle={{
        marginBottom: 30,
        marginTop: 25,
        paddingLeft: 20,
      }}
      columnWrapperStyle={styles.listItem}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      ListHeaderComponent={<View>{headerTitle}</View>}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.idMeal}
      numColumns={2}
    />
  );
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 16,
    gap: 16,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
});
