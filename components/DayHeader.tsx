import { useResponsive } from '@/hooks/useResponsive';
import { StyleSheet, Text, View } from 'react-native';

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];
const todayIndex = new Date().getDay();

export default function DayHeader() {

  const { gapSm, cell } = useResponsive();

  return (
    <View style={[
      styles.weekContainer,
      { margin: gapSm },
    ]}>
      <View style={[ styles.dayRow, { gap: gapSm} ]}>
        {DAYS.map((day, i) => (
          <View
            key={i}
            style={[
              styles.cell,
              { width: cell, height: cell },
              i === todayIndex && styles.today]}>
            <Text style={ styles.label }>{day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weekContainer: {
    paddingRight: 8,
  },
  dayRow: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  cell: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 24,
    fontWeight: '600',
  },
  today: {
    borderBottomWidth: 3,
  },
});