import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import notifications from "./screens/notifications";
import { LinearGradient } from "expo-linear-gradient";
import Carousel from "./components/Carousel";

export default function App() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#040D12", "#183D3D", "#5C8374", "#04364A"]}
    >
      <StatusBar style="light" />
      <View style={styles.navbar}>
        <Ionicons
          name="notifications-outline"
          size={27}
          style={styles.icon}
          color="white"
          onPress={() => console.log("sup")}
        />

        <MaterialCommunityIcons
          style={styles.logo}
          name="facebook-workplace"
          size={27}
          color="#fff"
        />
        <MaterialCommunityIcons name="cookie-outline" size={27} color="white" />
        <Ionicons name="search-sharp" size={27} color="white" />
      </View>

      <View style={styles.scroll}>
        <Text style={styles.Texts}>Fintechs Companies</Text>
        <Text style={styles.Text}>Categories</Text>
        {/* <Text style={styles.Text}>Exchanges</Text> */}
      </View>
      <Carousel></Carousel>
      <View style={styles.display}>
        <View style={styles.displaycont}>
          <Text style={styles.Text}>All FINTECHS</Text>
        </View>

        <View style={styles.displaycont}>
          <Text style={styles.Text}>24H</Text>
        </View>

        <View style={styles.displaycont}>
          <Text style={styles.Text}>MARKET CAP</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.table}>
          <Text style={styles.Text}>#</Text>
          <Text style={styles.Text}>FINTECHS</Text>
          <Text style={styles.Text}>PRICE</Text>
          <Text style={styles.Text}>24H</Text>
          <Text style={styles.Text}> MARKET</Text>
        </View>

        <View style={styles.table}>
          <Text style={styles.Text}>1</Text>
          <Text style={styles.Text}>
            {/* <MaterialCommunityIcons
              name="currency-btc"
              size={24}
              color="black"
            /> */}
            OPAY
          </Text>
          <Text style={styles.Text}>$23,456</Text>
          <Text style={styles.Text}>4.7%</Text>
          <Text style={styles.Text}>$990</Text>
        </View>

        <View style={styles.table}>
          <Text style={styles.Text}>2</Text>
          <Text style={styles.Text}>
            {/* <MaterialCommunityIcons
              name="currency-btc"
              size={24}
              color="black"
            />{" "} */}
            CHIPPER
          </Text>
          <Text style={styles.Text}>$23,456</Text>
          <Text style={styles.Text}>4.7%</Text>
          <Text style={styles.Text}>$990</Text>
        </View>

        <View style={styles.table}>
          <Text style={styles.Text}>3</Text>
          <Text style={styles.Text}>
            {/* <MaterialCommunityIcons
              name="currency-btc"
              size={24}
              color="black"
            />{" "} */}
            SWITCH
          </Text>
          <Text style={styles.Text}>$23,456</Text>
          <Text style={styles.Text}>4.7%</Text>
          <Text style={styles.Text}>$990</Text>
        </View>

        <View style={styles.table}>
          <Text style={styles.Text}>4</Text>
          <Text style={styles.Text}>
            {/* <MaterialCommunityIcons
              name="currency-btc"
              size={24}
              color="black"
            />{" "} */}
            PAYSTACK
          </Text>
          <Text style={styles.Text}>$23,456</Text>
          <Text style={styles.Text}>4.7%</Text>
          <Text style={styles.Text}>$990</Text>
        </View>

        <View style={styles.table}>
          <Text style={styles.Text}>5</Text>
          <Text style={styles.Text}>
            {/* <MaterialCommunityIcons
              name="currency-btc"
              size={24}
              color="black"
            />{" "} */}
            KUDA
          </Text>
          <Text style={styles.Text}>$23,456</Text>
          <Text style={styles.Text}>4.7%</Text>
          <Text style={styles.Text}>$990</Text>
        </View>

        <View style={styles.table}>
          <Text style={styles.Text}>6</Text>
          <Text style={styles.Text}>
            {/* <MaterialCommunityIcons
              name="currency-btc"
              size={24}
              color="black"
            />{" "} */}
            PAGA
          </Text>
          <Text style={styles.Text}>$23,456</Text>
          <Text style={styles.Text}>4.7%</Text>
          <Text style={styles.Text}>$990</Text>
        </View>

        <View style={styles.table}>
          <Text style={styles.Text}>7</Text>
          <Text style={styles.Text}>
            {/* <MaterialCommunityIcons
              name="currency-btc"
              size={24}
              color="black"
            />{" "} */}
            PIGGYVEST
          </Text>
          <Text style={styles.Text}>$23,456</Text>
          <Text style={styles.Text}>4.7%</Text>
          <Text style={styles.Text}>$990</Text>
        </View>

        <View style={styles.table}>
          <Text style={styles.Text}>8</Text>
          <Text style={styles.Text}>
            {/* <MaterialCommunityIcons
              name="currency-btc"
              size={24}
              color="black"
            />{" "} */}
            FLUTTER
          </Text>
          <Text style={styles.Text}>$23,456</Text>
          <Text style={styles.Text}>4.7%</Text>
          <Text style={styles.Text}>$990</Text>
        </View>

        <View style={styles.table}>
          <Text style={styles.Text}>9</Text>
          <Text style={styles.Text}>
            {/* <MaterialCommunityIcons
              name="currency-btc"
              size={24}
              color="black"
            />{" "} */}
            REMITA
          </Text>
          <Text style={styles.Text}>$23,456</Text>
          <Text style={styles.Text}>4.7%</Text>
          <Text style={styles.Text}>$990</Text>
        </View>

        <View style={styles.table}>
          <Text style={styles.Text}> 10</Text>
          <Text style={styles.Text}>
            {/* <MaterialCommunityIcons
              name="currency-btc"
              size={24}
              color="black"
            />{" "} */}
            CARBON
          </Text>
          <Text style={styles.Text}>$23,456</Text>
          <Text style={styles.Text}>4.7%</Text>
          <Text style={styles.Text}>$990</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.align}>
          <Octicons name="graph" size={20} color="#fff" />
          <Text style={styles.Text}>Market</Text>
        </View>

        <View style={styles.align}>
          <Ionicons name="star-outline" size={20} color="#fff" />
          <Text style={styles.Text}>Portfolio</Text>
        </View>

        <View style={styles.align}>
          <Ionicons name="search-outline" size={20} color="#fff" />
          <Text style={styles.Text}>Search</Text>
        </View>

        <View style={styles.align}>
          <MaterialIcons name="explore" size={20} color="#fff" />
          <Text style={styles.Text}>Explore</Text>
        </View>

        <View style={styles.align}>
          <MaterialIcons name="more-horiz" size={20} color="#fff" />
          <Text style={styles.Text}>More</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#2f3e46",
    // alignItems: "center",
    // justifyContent: "center",
  },
  navbar: {
    // backgroundColor: "#888",
    flexDirection: "row",
    marginTop: 20,
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  icon: {
    // backgroundColor: "",
  },
  logo: {
    width: 200,
    // backgroundColor: "black",
    marginLeft: 30,
    textAlign: "center",
  },
  scroll: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    justifyContent: "space-between",
    // backgroundColor: "black",
    borderBottomColor: "#F4EEEE",
    borderBottomWidth: 1,
  },
  Text: {
    color: "#FFF5E0",
    fontSize: 12,
  },
  Texts: {
    color: "#5C8374",
    fontWeight: "bold",
    borderBottomWidth: 4,
    paddingBottom: 5,
    borderBottomColor: "#96C291",
    borderBottomRightRadius: 10,
  },
  Data: {
    // backgroundColor: "#345830",
    borderLeftWidth: 10,
    borderLeftColor: "red",
    paddingVertical: 10,
    padding: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  Databody: {
    // backgroundColor: "#333",
    marginRight: 10,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
    padding: 10,
    justifyContent: "space-between",
  },
  display: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  displaycont: {
    // color: "white",
    backgroundColor: "#93B1A6",
    borderRadius: 15,
    padding: 5,
    paddingHorizontal: 10,
  },
  footer: {
    backgroundColor: "#183D3D",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    height: "15%",
    borderTopLeftRadius: 20,
    borderTopEndRadius: 20,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  table: {
    flexDirection: "row",
    paddingHorizontal: 10,
    borderBottomColor: "#333d29",
    borderWidth: 1,
    padding: 15,
    justifyContent: "space-between",
  },
  align: {
    alignItems: "center",
  },
});
