import React from 'react';
import { Text, View } from 'react-native';



const App: React.FC = () => {
  return (
   <View
      style={{
        padding: 24,
        backgroundColor: '#131016',
        flex: 1,
      }}
   >
     <Text
      style={{
        marginTop: 48,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FDFEFD',
      }}
     >
      Nome do evento
    </Text>

     <Text
      style={{
        fontSize: 16,
        color: '#6B6B6B',
      }}
    >
      Sexta, 4 de novembro de 2022</Text>
    </View>
  );
};

export default App;
