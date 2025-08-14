import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from '../../assets/images/TRAVLEY.png';

export default function Index() {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={styles.header}>

        <View>
          <Image source={logo} style={{ width: 100, height: 100 }} />

        </View>
      </View>
      <View style={styles.mainView}>
          <View style={styles.viagensAgendadas}>  {/*view de viagens agendadas*/}
            <Text>Aqui ficará as viagens agendadas;</Text>
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
    borderColor:'#ff7e5f',
    gap: 30
  },

  mainView: {
    flex: 1,
    backgroundColor:'#ff7e5f',
    elevation: 5,
    alignItems:"center",
    justifyContent:"center"
  },

  viagensAgendadas: {
    height: '70%',
    width: '85%',
    backgroundColor:'#fff'
  }
})
