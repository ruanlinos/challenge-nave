import styled from 'styled-components';
import {
  View,
  Text,
  TextInput as CustomTextInput,
  TextInputProps,
} from 'react-native';

export const Container = styled(View)`
  width: 100%;
  margin-bottom: 30px;
`;

export const Label = styled(Text)`
  font-family: ${props => props.theme.fontBold};
  font-size: ${props => props.theme.fontSizeLabel};
`;

export const TextInput = styled(CustomTextInput)`
  font-family: ${props => props.theme.fontRegular};
  font-size: ${props => props.theme.fontSizeDefault};
  border-color: ${props => (props.hasError ? '#FF3333' : '#212121')};
  border-width: 1px;
  padding: 8px;
  width: 100%;
`;

export const ErrorText = styled(Text)`
  font-family: ${props => props.theme.fontRegular};
  font-size: ${props => props.theme.fontSizeError};
  color: #ff3333;
`;
