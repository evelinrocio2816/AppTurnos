import {
    ImageBackground,
    Pressable,
    Text,
    TextInput,
    View,
    Image,
  } from "react-native";
  import React, { useState } from "react";
  import { styles } from "./Login.styles";
  import { useDispatch } from "react-redux";
  import { useLoginMutation } from "../../services/authApi";
  import { setUser } from "../../features/auth/authSlice";
  import { insertSession } from '../../db'
  
  const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [triggerLogin] = useLoginMutation();
    const dispatch = useDispatch();
  
    const onSubmit = () => {
      triggerLogin({
        email,
        password,
      })
        .unwrap()
        .then(result => {
          dispatch(setUser(result))
          insertSession({
            localId: result.localId,
            email: result.email,
            token: result.idToken,
          })
            .then(result => console.log(result))
            .catch(error => console.log(error.message))
        })
    }
  
  
    return (
      <>
        <ImageBackground
          style={styles.container}
          source={require("../../assets/Image/fondo.jpg")}
        >
          <View>
            <Image
              style={styles.imagen}
              source={require("../../assets/Image/loguito.png")}
            />
          </View>
          <View style={styles.loginContainer}>
            <Text>Login To start</Text>
            <TextInput
              style={styles.inputEmail}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.inputEmail}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            />
            <Pressable style={styles.loginBoton} onPress={onSubmit}>
              <Text style={{ color: "white" }}>Login</Text>
            </Pressable>
            <Text>No have an Account?</Text>
            <Pressable
              style={styles.loginBoton}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={{ color: "white" }}>Sign Up</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </>
    );
  };
  
  export default Login;
  