import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function SvgComponent({ color = "#fff", height = 40, width = 40 }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 360 360"
      style={{ marginRight: 13 }}
    >
      <G fill={color}>
        <Path
          d="M1630 2560V1480h560v2160h-560V2560zM2930 2560V1480h560v2160h-560V2560z"
          transform="matrix(.1 0 0 -.1 0 452)"
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
