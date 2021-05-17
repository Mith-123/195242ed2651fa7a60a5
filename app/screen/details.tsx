import React, { useState } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Text,
} from "native-base";
import { ActivityIndicator, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { SvgUri } from "react-native-svg";
import { ApiConfig } from "../api";
// 81f0b93a711524263fcf3da7da56c4dd
const Details = (props: any) => {
  const [hideProgress, setHideProgress] = useState(false);
  const route = useRoute();

  const apiCall = (name: string) => {
    setHideProgress(true);
    new ApiConfig()
      .getJson(
        "http://api.weatherstack.com/current?access_key=dc7486c2c1e3168a913a69110b5f0500&query=" +
          name
      )
      .then((res) => {
        console.log("----weatherReport-->", res);
        // navigation.navigate("Details", { data: res.data });
        alert(JSON.stringify(res.data));
        setHideProgress(false);
      })
      .catch((Error) => {
        setHideProgress(false);
        console.log("---ERROR--->", Error);
        alert("Internal server Error");
      });
  };

  return (
    <Container>
      <Content style={{ width: "90%", alignSelf: "center" }}>
        <Label style={LocalStyle.Label_Style}>Capital</Label>
        <Text>{route.params.data[0].capital} </Text>
        <Label style={LocalStyle.Label_Style}>Population</Label>
        <Text>{route.params.data[0].population} </Text>
        <Label style={LocalStyle.Label_Style}>Latlng</Label>
        <Text>{JSON.stringify(route.params.data[0].latlng)} </Text>
        <SvgUri
          style={{ marginTop: 20 }}
          width={100}
          height={100}
          uri={route.params.data[0].flag}
        />
        <Button
          primary
          style={{ alignSelf: "center", marginTop: 15 }}
          onPress={() => apiCall(route.params.data[0].capital)}
        >
          <Text> Get Weather </Text>
        </Button>
        {hideProgress && <ActivityIndicator size={"large"} color={"blue"} />}
      </Content>
    </Container>
  );
};

const LocalStyle = StyleSheet.create({
  Label_Style: {
    fontWeight: "600",
    marginTop: 15,
  },
});

export default Details;
