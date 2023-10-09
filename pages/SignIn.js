import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/signup.png")} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>Sign In</Text>
        <View>
          <Text style={styles.text}>Enter Email</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.text}>Enter Password</Text>
          <TextInput style={styles.input} secureTextEntry={true} />
        </View>
        <Pressable style={styles.button}>
          <Text
            style={[
              styles.text,
              {
                fontSize: 18,
                color: "black",
                fontWeight: "500",
                paddingVertical: 5,
              },
            ]}
          >
            Sign in
          </Text>
        </Pressable>
        <Text
          style={[
            styles.text,
            { fontSize: 18, textAlign: "center", marginVertical: 0 },
          ]}
        >
          ------------------------------- Or -------------------------------
        </Text>
        <Text
          style={[
            styles.text,
            { fontSize: 18, textAlign: "center", marginVertical: 0 },
          ]}
        >
          Sign in with
        </Text>
        <Pressable
          style={[
            styles.button,
            {
              position: "relative",
              backgroundColor: "#56753E",
              paddingVertical: 5,
            },
          ]}
        >
          <Image
            style={{ position: "absolute", left: 10, top: 7 }}
            source={require("../assets/google-icon.png")}
          />
          <Text
            style={[
              styles.text,
              {
                fontSize: 18,
                color: "black",
                fontWeight: "500",
              },
            ]}
          >
            Sign In with Google
          </Text>
        </Pressable>
      </View>
      <Text
        style={[
          {
            textAlign: "center",
            color: "white",
            fontSize: 16,
            marginBottom: 40,
          },
        ]}
      >
        Don't Have an Account?{" "}
        <Text style={{ color: "#75E00A", fontWeight: "600" }}>Sign up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F2D12",
  },
  image: {
    position: "absolute",
    width: "102%",
    height: 1000,
    top: -5,
    // zIndex: -10,
  },
  content: {
    padding: 20,
    flex: 1,
    gap: 25,
    height: "100%",
    width: "100%",
  },
  title: {
    marginTop: 30,
    fontFamily: "Roboto",
    fontSize: 30,
    color: "white",
    fontWeight: "700",
  },
  text: {
    color: "white",
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: "white",
  },
  button: {
    backgroundColor: "#56753E",
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
});

export default SignIn;
