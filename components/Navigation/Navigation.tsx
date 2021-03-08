import React from "react";
import NavigationBottom from "./NavigationBottom";
import NavigationSide from "./NavigationSide";

interface Props {
  side: "left" | "right" | "bottom";
}

const Navigation = ({ side = "left" }: Props) => {
  if (side == "left" || "right") {
    const leftOrRight = side == "left" ? "left" : "right";
    return <NavigationSide side={leftOrRight}></NavigationSide>;
  } else {
    return <NavigationBottom></NavigationBottom>;
  }
};

export default Navigation;
