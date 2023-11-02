import { ImageBackground, Text, View, Image, Pressable } from "react-native";
import { styles } from "./Profile.styles";
import { Header } from "../../components";
import * as ImagePicker from "expo-image-picker";
import { setCameraImage } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { usePostProfileImageMutation } from "../../services/medicApi";

const Profile = ({navigation}) => {
  const image = useSelector(state => state.auth.imageCamera);
  const { localId } = useSelector(state => state.auth)
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation()
  const dispstch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      });
      if (!result.canceled) {
        console.log(result.assets)
          dispstch(setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`));
      }
    }
  };
 
  const confirmImage = () => {
    triggerSaveProfileImage({ image, localId })
    console.log(result);

  };

  return (
    <>
      <View>
        <Header title={"Profile..."} />
      </View>
      <ImageBackground
        style={styles.container}
        source={require("../../assets/Image/fondo.jpg")}
      >
        {image ? (<Image
            source={{
              uri: image,
            }}
            style={styles.imagenProfile}
            resizeMode="cover"
          />) : (
          <Image
            source={{
              uri: "https://www.munichurcampa.gob.pe/wp-content/uploads/2023/01/1665282759496710_c5_720x720.jpeg",
            }}
            style={styles.imagenProfile}
            resizeMode="cover"
          />
        )}

        <Pressable style={styles.cameraButton} onPress={pickImage}>
          <Text>Tomar Foto de perfil</Text>
        </Pressable>
        <Pressable style={styles.cameraButton} onPress={confirmImage}>
          <Text>Confirm</Text>
        </Pressable>
        <Pressable
        style={{ ...styles.cameraButton, marginTop: 20 }}
        onPress={() => navigation.navigate('Location')}
      >
        <Text>Ir a mi ubiacion</Text>
      </Pressable>
      </ImageBackground>
    </>
  );
};

export default Profile;
