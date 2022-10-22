import React from 'react'
import { View } from 'react-native';
import {Calendar, LocaleConfig, Agenda, WeekCalendar, CalendarProvider} from 'react-native-calendars';

export default function UICalendar() {
    LocaleConfig.locales['pt-br'] = {
        monthNames: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ],
        monthNamesShort: [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul.',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dec',
        ],
        dayNames: [
          'Domingo',
          'Segunda-feira',
          'Terça-feira',
          'Quarta-feira',
          'Quinta-feira',
          'Sexta-feira',
          'Sábado',
        ],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        today: 'Hoje',
      };
      LocaleConfig.defaultLocale = 'pt-br';

  return (
    <View style={{height: 120}}>
      <CalendarProvider date={''} >
        <WeekCalendar firstDay={1} />
      </CalendarProvider>
    </View>
  )
}
