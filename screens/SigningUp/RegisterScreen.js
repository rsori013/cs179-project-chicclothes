import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const RegisterScreen = () => {
    const [name, setName] = useState('');

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const [interests, setInterests] = useState('');

    const handleRegister = () => {
        if (!name.trim() || !username.trim() || !password.trim() || !interests.trim()) 
        {
            
            Alert.alert('Error', 'Please fill all fields');
            return;

            //can add more to this later (such as making a password length requirement, etc.)

        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to RegisterScreen</Text>

            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={text => setName(text)}
                />

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={text => setUsername(text)}
                />

            <TextInput 
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
                />

            <TextInput 
                style={styles.input}
                placeholder="Clothes you are interested in"
                value={interests}
                onChangeText={text => setInterests(text)}
                />

            <Button title="Register" onPress={handleRegister} 
            />

        </View>
    );
}

const styles = StyleSheet.create(
    {
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
    input: {
        justifyContent: "center",
        width: "65%",
        height: 50,

        paddingHorizontal: 1,
        marginBottom: 23,

        fontSize: 16,
        borderBottomWidth: 2,
        borderBottomColor: "#ccc",
        marginRight: 44,
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    registerButton: {
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    }
}
);

export default RegisterScreen;
