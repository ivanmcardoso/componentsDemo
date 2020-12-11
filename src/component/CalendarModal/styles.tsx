import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

export const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ScreenContainer = styled.TouchableOpacity`
    width: ${windowWidth}px;
  height: ${windowHeight}px;
  background-color: rgba(0,0,0,0.15);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const PreventDefaultBehaviorContainer = styled.TouchableWithoutFeedback``;

export const ContentContainer = styled.View`
    background-color: #fff;
    width: ${0.9*windowWidth}px;
    padding: ${0.025*windowWidth}px;
    max-height: 55%;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;