import {
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./SignUp.styles";
import { useSignUpMutation } from "../../services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/auth/authSlice";

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [triggerSignup, result] = useSignUpMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(email, password, confirmPass);
    triggerSignup({
      email,
      password,
    });
    console.log(result);
    if(result.isSuccess){
      dispatch(setUser(result))
    }
  };

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
          <Text>Sign Up To Start </Text>
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
          <TextInput
            style={styles.inputEmail}
            placeholder=" Confirm Password"
            value={confirmPass}
            onChangeText={setConfirmPass}
          />
          <Pressable style={styles.loginBoton} onPress={onSubmit}>
            <Text style={{ color: "white" }}>Sign Up</Text>
          </Pressable>
          <Text>Already have an Account?</Text>
          <Pressable style={styles.loginBoton} onPress={()=>navigation.navigate('Login')}>
            <Text style={{ color: "white" }}>Login</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </>
  );
};

export default SignUp;
