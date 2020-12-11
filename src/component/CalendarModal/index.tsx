import React from "react";
import { View, ModalProps, Modal } from "react-native";

import {
  ScreenContainer,
  PreventDefaultBehaviorContainer,
  ContentContainer,
  windowWidth,
} from "./styles";
import { CalendarList, DateObject } from "react-native-calendars";

interface CalendarModalProps extends ModalProps {
  closeModal(): void;
  onDayPress(day: DateObject): void;
}

const CalendarModal: React.FC<CalendarModalProps> = (props) => {
  const { closeModal, onDayPress } = props;
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
            <CalendarList
              minDate={new Date()}
              onDayPress={onDayPress}
              hideExtraDays={true}
              horizontal={true}
              // Enable paging on horizontal, default = false
              pagingEnabled={true}
              calendarWidth={0.85*windowWidth}
              theme={{
                arrowColor: "#F26F6F",
                selectedDayBackgroundColor: "#00AAEC",
                selectedDayTextColor: "#ffffff",
                textDayFontSize: 12,
                textMonthFontSize: 14,
                textDayHeaderFontSize: 10,
              }}
            />
          </ContentContainer>
        </PreventDefaultBehaviorContainer>
      </ScreenContainer>
    </Modal>
  );
};

export default CalendarModal;
