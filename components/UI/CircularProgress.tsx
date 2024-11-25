import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import BlueUpArrow from "@/assets/svgs/blueUpArrow.svg";

interface CircularProgressProps {
  score: number; // Progress out of 100
  size?: number; // Diameter of the outer circle
  strokeWidth?: number; // Width of the progress bar
  progressColor?: string; // Color of the progress bar
  backgroundColor?: string; // Color of the outer background circle
  innerCircleColor?: string; // Color of the inner circle
  marginAngle?: number; // Margin angle for transparent ends
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  score,
  size = 174,
  strokeWidth = 16,
  progressColor = "white",
  backgroundColor = "rgba(0, 0, 0, 0.2)",
  innerCircleColor = "#000000",
  marginAngle = 10, // Margin in degrees at both ends
}) => {
  const outerRadius = size / 2; // Calculate outer radius
  const innerRadius = outerRadius - strokeWidth - 10; // Inner black circle radius
  const diameter = size; // Diameter of the progress circle
  const progressRadius = outerRadius - strokeWidth / 2 - 5; // New line


  // Calculate properties for the progress circle
  const circumference = 2 * Math.PI * progressRadius;

  // Convert margin angle to a percentage of the circumference
  const margin = (marginAngle / 360) * circumference;

  // Adjust progress for the margin
  const adjustedScore = Math.max(0, Math.min(100, score)); // Ensure score stays within 0–100
  const progressLength = (adjustedScore / 100) * (circumference - 2 * margin);

  const computedProgressColor =
    progressColor || (score >= 80 ? "#4CAF50" : "#FFA726"); // Default progress colors

  return (
    <View style={styles.container}>
      {/* Glass Outer Circle */}
      <View
        style={[
          styles.outerGlass,
          {
            width: size,
            height: size,
            borderRadius: outerRadius,
            backgroundColor,
          },
        ]}
      >
        {/* Circular Progress */}
        <Svg width={diameter} height={diameter}>
          {/* Background progress path */}
          {/* <Circle
            cx={outerRadius}
            cy={outerRadius}
            r={outerRadius - strokeWidth / 2}
            stroke={backgroundColor}
            strokeWidth={strokeWidth}
            fill="transparent"
          /> */}
          {/* Progress Path */}
          <Circle
            cx={outerRadius}
            cy={outerRadius}
            r={progressRadius}
            stroke={computedProgressColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={`${progressLength} ${circumference - progressLength
              }`}
            strokeDashoffset={-margin} // Start after the margin
            strokeLinecap="round"
            transform={`rotate(0 ${outerRadius} ${outerRadius})`} // Start from top-center
          />
        </Svg>
        {/* Inner Black Circle */}
        <View
          style={[
            styles.innerCircle,
            {
              width: innerRadius * 2,
              height: innerRadius * 2,
              borderRadius: innerRadius,
              backgroundColor: innerCircleColor,
            },
          ]}
        >
          <Text
            style={styles.label}
            accessible
            accessibilityLabel="Health Score"
          >
            HEALTH SCORE
          </Text>
          <Text style={styles.score}>{score}</Text>
          <View style={{flexDirection: 'row', alignContent: 'center', gap: 2}}>

            <BlueUpArrow width={10} height={15} />
            <Text style={styles.status}>
              {score >= 80 ? "Excellent" : score >= 50 ? "Improving" : "Low"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  outerGlass: {
    justifyContent: "center",
    alignItems: "center",
    // shadowColor: "#FFF",
    // shadowOpacity: 0.5,
    // shadowRadius: 10,
  },
  innerCircle: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  label: {
    fontSize: 10,
    color: "#F6F6F6",
    fontWeight: "800",
    marginTop: 16,
    letterSpacing: -0.5,
  },
  score: {
    fontSize: 49,
    fontWeight: "700",
    color: "#F5F5F5",
  },
  status: {
    fontSize: 10,
    color: "#5EAFFF",
    fontWeight: "500",
    marginBottom: 12,
  },
});

export default CircularProgress;