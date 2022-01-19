import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
  Pressable,
} from "react-native";
import navigationList from "../utils/navigationList";
import { theme } from "../utils/theme";

const data = [
  {
    index: 0,
    title: "Welcome to Kenmedical",
    description: "We examine your personal health and fitness",
  },
  {
    index: 1,
    title: "Kenmendical is all about service to humanity",
    description:
      "We have competent doctors who is skilled in science of medicine",
  },
  {
    index: 2,
    title: "Kenmedical save and serve hunmanity",
    description:
      "We have competent doctorswho is skilled in science of medicine",
  },
];

const Onboard = () => {
  const navigation = useNavigation();

  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const scrollViewRef = useRef(null);

  const { height, width } = Dimensions.get("window");

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const nextPage = () => {
    if (sliderState.currentPage === data.length - 1) {
      navigation.navigate(navigationList.SIGN_UP);
    } else {
      scrollViewRef.current.scrollTo({
        x: width * (sliderState.currentPage + 1),
        y: 0,
        animated: true,
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        ref={scrollViewRef}
        style={{ flex: 1 }}
        horizontal
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          setSliderPage(event);
        }}
        style={{
          backgroundColor: theme.colors.background,
        }}
      >
        {data.map((c, index) => (
          <View key={index} style={{ width, height, ...styles.itemWrapper }}>
            <View style={styles.skipWrapper}>
              <Pressable
                onPress={() => navigation.navigate(navigationList.SIGN_UP)}
              >
                <Text style={styles.actionText}>Skip</Text>
              </Pressable>
            </View>
            <View style={styles.imageWrapper}>
              <Image
                style={styles.image}
                source={require("../assets/images/onboarding-sprite.png")}
              />
            </View>
            <Text style={styles.title}>{c.title}</Text>
            <Text style={styles.description}>{c.description}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.paginationWrapper}>
        <View style={styles.pagination}>
          {data.map((c, i) => (
            <View style={styles.paginationDots(sliderState, i)} key={i}></View>
          ))}
        </View>
        <View>
          <Pressable onPress={nextPage}>
            {sliderState.currentPage === data.length - 1 ? (
              <Text style={styles.actionText}>Get Started</Text>
            ) : (
              <Text style={styles.actionText}>Next</Text>
            )}
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  itemWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },
  imageWrapper: {
    width: "100%",
    height: "65%",
    marginBottom: theme.spacing.xl,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  title: {
    color: theme.colors.foreground,
    fontFamily: theme.textVariants.header.fontFamily,
    fontSize: 24,
    marginBottom: theme.spacing.s,
    textAlign: "center",
    maxWidth: "80%",
    marginVertical: "auto",
  },
  description: {
    color: theme.colors.foregroundLight,
    fontFamily: theme.textVariants.body.fontFamily,
    fontSize: 16,
    maxWidth: "70%",
    marginVertical: "auto",
    textAlign: "center",
  },
  skipWrapper: {
    width: "100%",
    position: "absolute",
    marginTop: theme.spacing.m,
    textAlign: "right",
    paddingHorizontal: theme.spacing.l,
    justifyContent: "flex-end",
    flexDirection: "row",
    zIndex: 4,
    paddingTop: StatusBar.currentHeight,
  },
  paginationWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingHorizontal: theme.spacing.xl,
    width: "100%",
    paddingVertical: theme.spacing.l,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDots: (sliderState, index) => ({
    height: sliderState.currentPage === index ? 4 : 3,
    width: sliderState.currentPage === index ? 20 : 10,
    borderRadius: 3,
    backgroundColor:
      sliderState.currentPage === index ? theme.colors.primary : "#888",
    marginHorizontal: theme.spacing.x,
  }),
  actionText: {
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: theme.textVariants.cta.fontFamily,
  },
});
