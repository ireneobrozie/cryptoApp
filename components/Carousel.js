import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FlatList } from "react-native";

const Carousel = () => {
  const flalistRef = useRef();

  const screenWidth = Dimensions.get("window").width;
  const sliderData = [
    {
      id: "01",
      Image: require("../assets/fintech_app.webp"),
    },
    {
      id: "02",
      Image: require("../assets/fintech.png"),
    },
    {
      id: "03",
      Image: require("../assets/tech.jpeg"),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === sliderData.length - 1) {
        flalistRef.current.scrollToIndex({
          index: 0,
          animation: "true",
        });
      } else {
        flalistRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: "true",
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    index: index,
    offset: screenWidth * index,
  });

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image
          source={item.Image}
          style={{
            height: 100,
            width: screenWidth,
          }}
        />
      </View>
    );
  };
  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    // console.log({ scrollPosition });

    const index = scrollPosition / screenWidth;

    // console.log("sup", Math.round(index));

    setActiveIndex(Math.round(index));
  };

  const renderDotIndicators = () => {
    return sliderData.map((dot, index) => {
      if (activeIndex === index) {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "#FFF5E0",
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 5,
            }}
          ></View>
        );
      } else {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "#183D3D",
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 5,
            }}
          ></View>
        );
      }
    });
  };
  return (
    <View>
      <FlatList
        data={sliderData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ref={flalistRef}
        getItemLayout={getItemLayout}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
      ></FlatList>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        {renderDotIndicators()}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
