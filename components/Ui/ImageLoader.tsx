import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Image, ImageProps } from "expo-image";

interface backgroundColor {
  backgroundColor?: string;
}

type Props = ImageProps & backgroundColor;

const ImageLoader = (props: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {!imageLoaded && (
        <Image
          source={require("../../assets/images/imageLoading.gif")}
          style={[
            {
              flex: 1,
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: props.backgroundColor,
              zIndex: 1,
            },
          ]}
          contentFit="cover"
          contentPosition={"top"}
          transition={100}
        />
      )}
      <Image {...props} onLoad={() => setImageLoaded(true)} />
    </>
  );
};

export default ImageLoader;

const styles = StyleSheet.create({});
