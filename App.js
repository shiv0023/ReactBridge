import React from 'react';
import { NativeModules, Button } from 'react-native';

const { CalendarModule } = NativeModules;

const NewModuleButton = () => {
  const onPress = () => {
    CalendarModule.createCalendarEvent('Meeting', 'Conference Room');
  };

  return (
    <Button
      title="Click to create a calendar event"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default NewModuleButton;
