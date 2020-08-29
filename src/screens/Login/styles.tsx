import styled from 'styled-components';
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: 16;
`;

export const Button = styled(TouchableOpacity)`
  background-color: ${props => (props.isValid ? '#000' : '#EAEAEA')};
  width: 100%;
  align-items: center;
  padding-vertical: 8px;
  margin-top: 10px;
`;

export const ButtonText = styled(Text)`
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.fontBold};
  line-height: 24;
`;
