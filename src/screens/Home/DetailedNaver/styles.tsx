import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styled from 'styled-components';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding-bottom: 10;
`;

export const Avatar = styled(Image)`
  width: 100%;
  height: 288px;
`;

export const NaverInfoContainer = styled(View)`
  align-items: flex-start;
  width: 100%;
  padding: 16px;
`;

export const Name = styled(Text)`
  text-align: left;
  font-family: ${props => props.theme.fontBold};
  font-size: ${props => props.theme.fontSizeTitle};
  line-height: 32px;
`;

export const JobRole = styled(Text)`
  text-align: left;
  font-family: ${props => props.theme.fontRegular};
  font-size: ${props => props.theme.fontSizeDefault};
  line-height: 22px;
`;

export const NaverInfoTitle = styled(Text)`
  text-align: left;
  font-family: ${props => props.theme.fontBold};
  font-size: ${props => props.theme.fontSizeDefault};
  line-height: 22px;
`;

export const NaverInfoDescription = styled(Text)`
  text-align: left;
  font-family: ${props => props.theme.fontRegular};
  font-size: ${props => props.theme.fontSizeDefault};
  line-height: 22px;
`;

export const ActionsContainer = styled(View)`
  flex-direction: row;
  width: 100%;
  padding-horizontal: 16px;
  margin-top: 8px;
  align-items: flex-start;
  justify-content: space-between;
`;

export const DeleteButton = styled(TouchableOpacity)`
  width: 48%;
  border-width: 1px;
  border-color: ${props => props.theme.dark};
  align-items: center;
  justify-content: center;
  padding: 8px;
  flex-direction: row;
`;

export const DeleteButtonText = styled(Text)`
  font-family: ${props => props.theme.fontBold};
  font-size: ${props => props.theme.fontSizeButton};
  line-height: 24px;
  margin-left: 10px;
`;

export const EditButton = styled(TouchableOpacity)`
  width: 48%;
  border-width: 1px;
  border-color: ${props => props.theme.dark};
  background-color: ${props => props.theme.dark};
  align-items: center;
  justify-content: center;
  padding: 8px;
  flex-direction: row;
`;

export const EditButtonText = styled(Text)`
  font-family: ${props => props.theme.fontBold};
  font-size: ${props => props.theme.fontSizeButton};
  line-height: 24px;
  margin-left: 10px;
  color: ${props => props.theme.white};
`;
