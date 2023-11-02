import { Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./Location.styles";
import { Header, MapPreview } from "../../components";
import * as Locations from "expo-location";
import Entypo from '@expo/vector-icons/Entypo'


const Location = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("useEffect location");
    (async () => {
      let { status } = await Locations.requestForegroundPermissionsAsync();
      console.log("inside async function");
      if (status !== "granted") {
        console.log("permission denied");
        setError("Permission to access location was denied");
        return;
      }
      console.log("Este es mi status", status);
      let location = await Locations.getCurrentPositionAsync({});
      setLocation({
        latitude: location?.coords.latitude,
        longitude: location?.coords.longitude,
      });
    })();
  }, []);

  return (
    <>
      <Header title={"Location🗺️ "}  />
      <View style={styles.container}>
        <Text style={styles.titleLocation}>My Adress <Entypo name="location-pin" size={54} /> </Text>
        {location ? (
          <View style={styles.locationI}>
            <Text>
              Lat:${location.latitude}, Longitude: ${location.longitude}
            </Text>
          
          </View>
        ) : (
          <View style={styles.locationI}>
            <Text>{error} </Text>
          </View>
        )}
        <MapPreview location={location}/>
      </View>
    </>
  );
};

export default Location;
