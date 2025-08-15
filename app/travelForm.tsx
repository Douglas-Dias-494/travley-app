import { View, Text, TouchableOpacity, TextInput } from "react-native"
import { SafeAreaView, } from "react-native-safe-area-context"
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";

function travelForm() {

    const router = useRouter()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ff7e5f', padding: 20,}}>
            <View style={{ flex: 1, borderWidth: 1 }}>
                <View style={styles.mainView}>
                    <TextInput style={styles.inputBoxes} placeholder="Digite o nome da sua viagem..." />
                    <TextInput style={styles.inputBoxes} placeholder="Digite o seu destino final..." />
                    <TextInput style={styles.inputBoxes} placeholder="Qual a data de ida..." />
                    <TextInput style={styles.inputBoxes} placeholder="Qual a data de volta..." />
                </View>
            </View>

            <TouchableOpacity onPress={() => router.back()}>
                <Text style={{ color: 'blue' }}>Voltar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    mainView: {
        alignItems:"center",
        justifyContent:"center",
        flex: 1,
        backgroundColor: '#f9f9f9ff'
    },
    
    inputBoxes:{
      borderWidth: 1,
      padding: 10,
      marginBottom: 15,
      width: '80%'
    }
})


export default travelForm