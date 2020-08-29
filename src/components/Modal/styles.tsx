import styled from 'styled-components';
import {View, Text, TouchableOpacity} from 'react-native';

export const Container = styled(View)`
  background-color: ${props => props.theme.white};
  padding-horizontal: 16px;
  padding-top: 16px;
  padding-bottom: 24px;
`;

export const HeaderContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const HeaderText = styled(Text)`
  font-family: ${props => props.theme.fontBold};
  font-size: ${props => props.theme.fontSizeTitle};
  color: ${props => props.theme.dark};
`;

export const DescriptionText = styled(Text)`
  font-size: ${props => props.theme.fontSizeDefault};
  font-family: ${props => props.theme.fontRegular};
  color: ${props => props.theme.dark};
`;

export const FooterContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;

export const CancelButtonContainer = styled(TouchableOpacity)`
  border-color: ${props => props.theme.dark};
  border-width: 1px;
  width: 45%;
  align-items: center;
  padding-vertical: 8px;
  height: 39px;
`;

export const CancelButtonText = styled(Text)`
  font-family: ${props => props.theme.fontBold};
  color: ${props => props.theme.dark};
`;

export const DeleteButtonContainer = styled(TouchableOpacity)`
  border-color: ${props => props.theme.dark};
  background-color: ${props => props.theme.dark};
  border-width: 1px;
  width: 45%;
  align-items: center;
  padding-vertical: 8px;
  height: 39px;
`;

export const DeleteButtonText = styled(Text)`
  font-family: ${props => props.theme.fontBold};
  color: ${props => props.theme.white};
`;
