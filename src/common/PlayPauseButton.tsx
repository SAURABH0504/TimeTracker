import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { COLORS } from "../color";
import { StartIcon, StopIcon } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setTimerData } from "../store/slices/timerSlice";
import { setProjects } from "../store/slices/projectsSlice";

function PlayPauseButton(): JSX.Element {
  const isTimerRunning = useSelector(
    (state: RootState) => state.timer.isTimerRunning
  );
  const projects = useSelector((state: RootState) => state.projects.projects);
  const [isTimerStart, setTimerStart] = useState(isTimerRunning);
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(setTimerData({ isTimerRunning: !isTimerRunning }));
  };

  useEffect(() => {
    setTimerStart(isTimerRunning);
  }, [isTimerRunning]);

  return (
    <TouchableOpacity disabled style={styles.mainView} onPress={onPress}>
      {isTimerStart ? <StopIcon /> : <StartIcon />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: "20%",
    borderRadius: 50,
    height: "170%",
    top: -30,
    backgroundColor: COLORS.ORANGE,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PlayPauseButton;
