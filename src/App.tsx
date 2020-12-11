import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Calendar, CalendarList, Agenda, DateObject } from "react-native-calendars";
import { Container } from "./styles";
import { LocaleConfig } from "react-native-calendars";
import CalendarModal from "./component/CalendarModal";

LocaleConfig.locales["pt"] = {
  formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["D", "S", "T", "Q", "Q", "S", "S"],
};

LocaleConfig.defaultLocale = "pt";

export default function App() {
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date())

  function openCalendarModal() {
    setShowCalendarModal(true);
  }

  function closeCalendarModal() {
    setShowCalendarModal(false);
  }

  function selectDate(day: DateObject) {
    closeCalendarModal()
    const date = mapDateObjectToDate(day)
    setSelectedDate(date)
  }


  return (
    <Container>
      <Button onPress={openCalendarModal} title="calendar"/>
      <Text>{selectedDate.getDate()}/{selectedDate.getMonth()+1}/{selectedDate.getFullYear()}</Text>
      <CalendarModal
        visible={showCalendarModal}
        closeModal={closeCalendarModal}
        onDayPress={selectDate}
      />
    </Container>
  );
}

function mapDateObjectToDate(day: DateObject): Date {
  const date = new Date();
  date.setDate(day.day);
  date.setMonth(day.month-1);
  date.setFullYear(day.year);
  console.log(day);
  console.log(date);
  
  return date;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
