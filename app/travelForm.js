// travelForm.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import DateTimePicker from '@react-native-community/datetimepicker'; // Apenas para o DatePickerInput customizado
import DatePickerInput from './DatePickerInput'; // Importe seu novo componente!

// Importe o logo corretamente (certifique-se de que o caminho está certo)
import logo from '../assets/images/TRAVLEY.png'; 

function TravelForm() { // Renomeado para TravelForm com T maiúsculo (boa prática)

    const router = useRouter();

    // Estados para armazenar as datas selecionadas
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.outerContainer}>

                <View style={styles.mainView}>
                    <View style={styles.logoBox}>
                        <Image source={logo} style={styles.logoImage} />
                    </View>
                    <View style={styles.formContent}>
                        <Text style={styles.label}>Viagem</Text>
                        <TextInput style={styles.inputBoxes} placeholder="Digite o nome da sua viagem..." />

                        <Text style={styles.label}>Destino</Text>
                        <TextInput style={styles.inputBoxes} placeholder="Digite o seu destino final..." />

                        {/* Usando o componente DatePickerInput customizado para Data de Partida */}
                        <DatePickerInput 
                            label="Data de partida"
                            placeholder="Selecione a data de partida"
                            onDateChange={setStartDate} // Atualiza o estado da data de partida
                        />

                        {/* Usando o componente DatePickerInput customizado para Data de Volta */}
                        <DatePickerInput 
                            label="Data de volta"
                            placeholder="Selecione a data de volta"
                            onDateChange={setEndDate} // Atualiza o estado da data de volta
                        />

                        <TouchableOpacity style={styles.button} onPress={() => { /* Lógica para salvar/continuar */ console.log('Salvar viagem'); }}>
                            <Text style={styles.buttonText}>Salvar Viagem</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ff7e5f',
        padding: 20,
    },
    outerContainer: {
        flex: 1,
    },
    mainView: {
        alignItems: "center",
        justifyContent: "center", // Ajustado para centralizar o conteúdo verticalmente no seu container
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 10, // Adicionado para um visual mais agradável
        padding: 15, // Aumentado o padding
        position: "relative",
    },
    logoBox: {
        position: "absolute",
        top: 20, // Ajustado um pouco para baixo para não ficar tão no topo
        alignSelf: 'center', // Centraliza o logo horizontalmente
        zIndex: 1, // Garante que o logo fique acima dos outros elementos se houver sobreposição
    },
    logoImage: {
        width: 100, // Diminuído um pouco para não ser muito grande
        height: 100,
        resizeMode: 'contain', // Garante que a imagem se ajuste
    },
    formContent: {
        marginTop: 120, // Espaço para o logo
        width: '95%',
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#2e4057',
        marginBottom: 5,
        marginTop: 10, // Espaço entre os campos
    },
    inputBoxes: {
        padding: 15, // Aumentado o padding
        marginBottom: 15,
        backgroundColor: '#ecececff',
        borderRadius: 8, // Borda arredondada
        width: '100%',
    },
    button: {
        backgroundColor: '#2e4057',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    backButton: {
        marginTop: 20,
        alignSelf: 'center',
    },
    backButtonText: {
        color: 'white', // Alterado para branco para contraste com o fundo
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default TravelForm;