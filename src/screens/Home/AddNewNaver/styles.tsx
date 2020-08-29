import {
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styled from 'styled-components';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding-horizontal: 16px;
  padding-vertical: 20px;
`;

export const Title = styled(Text)`
  font-family: ${props => props.theme.fontBold};
  font-size: 22px;
  color: ${props => props.theme.dark};
`;

export const SaveButton = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${props => (props.isValid ? '#212121' : '#EAEAEA')};
  padding: 8px;
  align-items: center;
`;

export const SaveButtonText = styled(Text)`
  font-family: ${props => props.theme.fontBold};
  font-size: ${props => props.theme.fontSizeButton};
  line-height: 24px;
  color: ${props => props.theme.white};
`;
