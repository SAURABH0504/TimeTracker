import React, { useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ColorValue,
} from "react-native";
import { COLORS } from "../../../../color";
import { StartIcon, StopIcon } from "../../../../assets";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { formatTime } from "../../../../utils";

interface ProjectTileProps {
  title: String;
  trackedTime: number;
  dotColor: ColorValue;
  isCurrent: boolean;
  onPress: Function;
  index: number;
  time: number;
  updateTimer: Function;
}

const ProjectTile = (props: ProjectTileProps): JSX.Element => {
  const {
    title,
    trackedTime,
    dotColor,
    isCurrent,
    onPress,
    index,
    time,
    updateTimer,
  } = props;

  const onTimerClick = () => {
    onPress(index);
  };

  useEffect(() => {
    if (isCurrent) {
      updateTimer(index, time);
    }
  }, [time]);

  return (
    <View style={styles.listItemMainView}>
      <View style={[styles.colorDot, { backgroundColor: dotColor }]} />
      <Text>{title}</Text>
      <TouchableOpacity
        style={[styles.highlightedBox, isCurrent ? { borderColor: "red" } : {}]}
        onPress={onTimerClick}
      >
        {isCurrent ? (
          <StopIcon color={COLORS.GREY} height={15} width={15} />
        ) : (
          <StartIcon color={COLORS.GREY} height={15} width={15} />
        )}
        <Text style={styles.secondaryText}>{formatTime(trackedTime)}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemMainView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    padding: 20,
    width: "100%",
    justifyContent: "space-between",
  },
  rowContainer: {
    flexDirection: "row",
  },
  secondaryText: {
    fontSize: 16,
    color: COLORS.BLACK,
    textAlign: "center",
  },
  highlightedBox: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.GREY,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  colorDot: {
    borderRadius: 50,
    height: 10,
    width: 10,
  },
});

export default ProjectTile;
