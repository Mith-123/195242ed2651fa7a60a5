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
import { ApiConfig } from "../api";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
// https://restcountries.eu/rest/v2/name/{{FORM_INPUT_HERE}}

const HomeContainer = (props: any) => {
  const [country, setCountry] = useState("");
  const [hideProgress, setHideProgress] = useState(false);
  const navigation = useNavigation();

  const apiCall = (name: string) => {
    setHideProgress(true);
    new ApiConfig()
      .getJson("https://restcountries.eu/rest/v2/name/" + name)
      .then((res) => {
        // console.log("----res-->", res.data);
        navigation.navigate("Details", { data: res.data });
        setHideProgress(false);
      })
      .catch((Error) => {
        setHideProgress(false);

        console.log("---ERROR--->", Error);
        alert("Country  not found");
      });
  };
  return (
    <Container>
      <Content style={{ width: "90%", alignSelf: "center" }}>
        <Form style={{ marginTop: 10 }}>
          <Item floatingLabel>
            <Label>Enter country</Label>
            <Input value={country} onChangeText={(txt) => setCountry(txt)} />
          </Item>
        </Form>
        <Button
          style={{ marginVertical: 30, width: "80%", alignSelf: "center" }}
          primary
          disabled={country == "" ? true : false}
          onPress={() => apiCall(country)}
        >
          <Text> Get Country Details </Text>
        </Button>

        {hideProgress && <ActivityIndicator size={"large"} color={"blue"} />}
      </Content>
    </Container>
  );
};

export default HomeContainer;
