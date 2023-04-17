import { Pressable, StyleProp, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextStyle } from "react-native";
import { ViewStyle } from "react-native";

type Props = {
  title: string;
  titleStyle?: TextStyle;
  style?: StyleProp<ViewStyle>;
};

const ScreenHeader = ({ title, titleStyle, style }: Props) => {
  const { canGoBack, goBack } = useNavigation();
  const { name } = useRoute();

  return (
    <View style={[styles.container, style]}>
      {canGoBack && name !== "Favorite" && (
        <Pressable style={styles.iconContainer} onPress={() => goBack()}>
          <Svg
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            style={styles.goBackIcon}
          >
            <Path
              d="M9.12494 19.1L0.699942 10.7C0.599942 10.6 0.528942 10.4917 0.486942 10.375C0.444942 10.2584 0.424276 10.1334 0.424942 10C0.424942 9.86669 0.445609 9.74169 0.486942 9.62502C0.528276 9.50836 0.599275 9.40002 0.699942 9.30002L9.12494 0.875024C9.35828 0.641691 9.64994 0.525024 9.99994 0.525024C10.3499 0.525024 10.6499 0.650024 10.8999 0.900024C11.1499 1.15002 11.2749 1.44169 11.2749 1.77502C11.2749 2.10836 11.1499 2.40002 10.8999 2.65002L3.54994 10L10.8999 17.35C11.1333 17.5834 11.2499 17.871 11.2499 18.213C11.2499 18.555 11.1249 18.8507 10.8749 19.1C10.6249 19.35 10.3333 19.475 9.99994 19.475C9.66661 19.475 9.37494 19.35 9.12494 19.1Z"
              fill="black"
            />
          </Svg>
        </Pressable>
      )}
      <Text style={[styles.headerTitle, titleStyle]}>{title}</Text>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    width: 50,
  },
  goBackIcon: {
    marginBottom: 20,
  },
  headerTitle: {
    fontFamily: "Poppins-600",
    fontSize: 30,
  },
});
