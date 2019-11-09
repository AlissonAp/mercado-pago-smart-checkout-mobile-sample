import styled from 'styled-components/native';

export const MainContainer = styled.SafeAreaView`
    flex: 1;
    background-color : #06AED5; 
    padding: 20px;
    justify-content: center;
`

export const HeaderCheckout = styled.View`
    flex: 0.1;
    flex-direction: row;
    background-color : #06AED5; 
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    margin: 50px;
    font-size: 22px;
    color: white;
    text-align: center;
`

export const InputText = styled.TextInput`
    padding: 10px;
    border-color: white;
    border-radius: 5px;
    border-width: 0.5px;
    margin: 10px;
` 
export const PersonalButton = styled.TouchableOpacity`
    padding: 20px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: white;
    border-color: white;
    margin: 10px;
`