import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = ({ color = "#fff", height = 40, width = 40 }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 360 360"
    style={{ marginLeft: 7 }}
  >
    <Path
      fill={color}
      d="m74.3 48.4-2.8 2.4V310l2.6 2.6c4.5 4.5 8.1 3.7 21.6-4.8 6.5-4.1 28.5-18 48.8-30.8 20.4-12.8 41.1-25.9 46-29 28.9-18.2 83.1-52.4 89.2-56.3 7.7-4.9 9.3-6.9 9.3-11.4 0-4.3-2.2-6.7-11.8-12.6-8.4-5.3-24.8-15.6-139-87.5-58.8-37.1-58.1-36.8-63.9-31.8z"
    />
  </Svg>
);
export default SvgComponent;
