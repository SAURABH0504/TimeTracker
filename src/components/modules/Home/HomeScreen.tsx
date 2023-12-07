import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";

import { COLORS } from "../../../color";
import { StartIcon, StopIcon } from "../../../assets";
import ProjectTile from "./components/ProjectTile";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { formatTime, secondsToHoursMinutes } from "../../../utils";
import { setTimerData } from "../../../store/slices/timerSlice";
import { setProjects } from "../../../store/slices/projectsSlice";

function HomeScreen(): JSX.Element {
  const projects = useSelector((state: RootState) => state.projects.projects);
  const timer = useSelector((state: RootState) => state.timer);
  const dispatch = useDispatch();

  console.log(projects);
  const [time, setTime] = useState(timer.time);
  const [totalTime, setTotalTime] = useState("0hrs 0mins");
  const [projectData, setProjectData] = useState(projects);
  const prevState = useRef(timer.currentSelected);

  useEffect(() => {
    setProjectData(projects);
  }, [projects]);

  const startTimer = () => {
    const interval = setInterval(() => {
      setTime((prev) => {
        return prev + 1;
      });
    }, 1000);
    return interval;
  };

  const updateProject = (index: number) => {
    let projectData = [...projects];
    if (projects[index].isCurrent) {
      prevState.current = index;
      let trackedTime = projectData[index].trackedTime;
      projectData[index] = {
        ...projectData[index],
        isCurrent: !timer.isTimerRunning,
        trackedTime: trackedTime,
      };
      dispatch(
        setTimerData({
          isTimerRunning: !timer.isTimerRunning,
          time: time,
          currentSelected: index,
        })
      );
    } else if (prevState.current === index) {
      projectData[index] = { ...projectData[index], isCurrent: true };
      dispatch(setTimerData({ isTimerRunning: true, currentSelected: index }));
    } else {
      projectData[index] = { ...projectData[index], isCurrent: true };
      if (prevState.current > -1) {
        projectData[prevState.current] = {
          ...projectData[prevState.current],
          isCurrent: false,
          trackedTime: projectData[prevState.current].trackedTime,
        };
      }
      dispatch(setProjects(projectData));
      dispatch(
        setTimerData({ isTimerRunning: true, time: 0, currentSelected: index })
      );
      setTime(0);
      prevState.current = index;
    }
    setProjectData(projectData);
  };

  const startProject = (index: number) => {
    let projectData = [...projects];
    projectData[index] = {
      ...projectData[index],
      trackedTime: projectData[index].trackedTime + 1,
    };
    setProjectData(projectData);
    dispatch(setProjects(projectData));
    dispatch(setTimerData({ time: time }));
  };

  useEffect(() => {
    let interval: any;
    if (timer.isTimerRunning) {
      interval = startTimer();
    } else {
      dispatch(setTimerData({ time: time }));
    }
    setTime(time);
    return () => clearInterval(interval);
  }, [timer.isTimerRunning]);

  const getTotalTrackedHours = () => {
    const { hours, minutes } = secondsToHoursMinutes(
      projectData.reduce((acc, curr) => acc + curr.trackedTime, 0)
    );
    return `${hours}hrs ${minutes}mins`;
  };

  useEffect(() => {
    setProjectData(projects);
    setTotalTime(getTotalTrackedHours());
  }, [projects]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.timerContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.primaryText}>{"Timeline"}</Text>
            <Text style={styles.secondaryText}>
              {projectData[timer.currentSelected].title}
            </Text>
            <View></View>
            <View style={styles.highlightedBox}>
              <Text style={styles.secondaryText}>{"Deep focus"}</Text>
            </View>
          </View>
          <View style={styles.alignCenter}>
            <Text style={styles.primaryText}>{formatTime(time)}</Text>
            {timer.isTimerRunning ? <StopIcon /> : <StartIcon />}
          </View>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={[styles.rowContainer, styles.alignItemCenter]}>
          <Text
            style={[
              styles.primaryText,
              { color: COLORS.BLACK, marginLeft: 20, paddingTop: 20 },
            ]}
          >
            {"Today"}
          </Text>
          <Text
            style={[
              styles.secondaryText,
              { color: COLORS.BLACK, marginRight: 20, paddingTop: 20 },
            ]}
          >
            {totalTime}
          </Text>
        </View>
        <FlatList
          data={projectData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ProjectTile
              {...item}
              onPress={updateProject}
              index={index}
              time={time}
              updateTimer={startProject}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.BLUE,
  },
  detailsContainer: {
    flex: 2,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 15,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  timerContainer: {
    flex: 1,
    backgroundColor: COLORS.BLUE,
    paddingHorizontal: 15,
  },
  titleContainer: { justifyContent: "space-evenly", paddingVertical: 20 },
  alignCenter: { justifyContent: "center", alignItems: "center" },
  rowContainer: {
    flex: 1,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  primaryText: {
    fontSize: 40,
    color: COLORS.WHITE,
  },
  secondaryText: {
    fontSize: 16,
    color: COLORS.WHITE,
    textAlign: "center",
  },
  highlightedBox: {
    borderRadius: 10,
    backgroundColor: COLORS.LIGHTBLUE,
  },
  separator: {
    backgroundColor: COLORS.GREY,
    height: 2,
    marginHorizontal: 10,
  },
  alignItemCenter: { alignItems: "center" },
});

export default HomeScreen;
