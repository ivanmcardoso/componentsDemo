import React, { useState, useRef } from "react";
import {
  View,
  Modal,
  ModalProps,
  FlatList,
  Text,
  TouchableOpacity,
  NativeScrollEvent,
} from "react-native";
import {
  ScreenContainer,
  PreventDefaultBehaviorContainer,
  ContentContainer,
} from "./styles";
import InfiniteScrollFlatlist from "../InfiniteScrollFlatlist";

interface CalendarModalProps extends ModalProps {
  closeModal(): void;
}

const TimePickerModal: React.FC<CalendarModalProps> = (props) => {
  const { closeModal } = props;
  const minutes = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
  ];
  const [min, setMin] = useState(minutes[0]);
  const [minuteList] = useState(minutes);
  const offset = 20;


  return (
    <Modal
      {...props}
      animationType="fade"
      transparent={true}
      onRequestClose={closeModal}
    >
      <ScreenContainer
        onPress={closeModal}
        testID={"outside-container"}
        accessibilityLabel={"outside-container"}
        activeOpacity={0.98}
      >
        <PreventDefaultBehaviorContainer>
          <ContentContainer>
            <InfiniteScrollFlatlist
              offset={offset}
              data={minuteList}
              keyExtractor={(_, index) => String(index)}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
            {/* <Picker
              style={{width: 150, height: 180}}
                selectedValue={min}
                itemStyle={{color:"black"}}
                onValueChange={(val: number)=>setMin(val)}
              >
                  {minutes.map((value, i)=>(
                        <Picker.Item label={`${value}`} value={i} key={"money"+value}/>
                  ))}

              </Picker> */}
          </ContentContainer>
        </PreventDefaultBehaviorContainer>
      </ScreenContainer>
    </Modal>
  );
};

export default TimePickerModal;
