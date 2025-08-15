import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from '../../assets/images/TRAVLEY.png';
import noneTravel from '../../assets/images/NONE-TRAVEL.png'
import TravelForm from "../travelForm";
import { useRouter } from "expo-router";

export default function Index() {

  const router = useRouter();
  const [showForm, setShowForm] = useState(false);

  const handlePress = () => {
    router.push('/travelForm')
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={styles.header}>

        <View>
          <Image source={logo} style={{ width: 100, height: 100 }} />

        </View>
      </View>
      <View style={styles.mainView}>
        <View style={styles.viagensAgendadas}>  {/*view de viagens agendadas*/}
          <Image source={noneTravel} style={{ width: 100, height: 100, marginBottom: 20 }} />
          <Text style={{ fontSize: 15, color: '#ababab' }}>Você ainda não se preparou para viajar</Text>
          <View  style={styles.btnPrepararViagem}>
              <TouchableOpacity onPress={handlePress}>
                <Text style={{color: '#ffffffff', fontWeight:"bold"}}>Preparar viagem</Text>
              </TouchableOpacity>  
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  header: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: '#ff7e5f',
    gap: 30
  },

  mainView: {
    flex: 1,
    backgroundColor: '#ff7e5f',
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    
  },

  viagensAgendadas: {
    height: '70%',
    width: '85%',
    backgroundColor: '#f9f9f9ff',
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  btnPrepararViagem: {
    position: "absolute",
    bottom: '1%',
    right: '2%',
    backgroundColor:'#2e4057',
    padding: 10,
    borderRadius: 5
  }
})
