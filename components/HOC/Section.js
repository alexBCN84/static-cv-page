import React from "react";
import { Grid, Divider } from "../cv/styles";

export default function withSection(WrappedComponent) {
  const bottomRef = React.useRef();
  let increasingOpacity = "opacity";
  let prevRatio = 0.0;

  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      console.log(ratio);
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }

  React.useEffect(() => {
    const scroll = new IntersectionObserver(scrollCallback, {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList()
    });

    function scrollCallback(entries) {
      entries.forEach(entry => {
        if (entry.intersectionRatio > prevRatio) {
          entry.target.style.opacity = increasingOpacity.replace(
            "opacity",
            entry.intersectionRatio
          );
        }
        prevRatio = entry.intersectionRatio;
      });
    }

    scroll.observe(bottomRef.current);
    return () => {
      scroll.disconnect();
    };
  }, []);
  return id => {
    const WithSection = props => (
      <Grid
        as="section"
        style={{
          marginBotton: 30,
          marginTop: 30,
          padding: 10
        }}
        ref={bottomRef}
        id={id}
      >
        <WrappedComponent {...props} />
        <Divider />
      </Grid>
    );

    WithSection.displayName = `WithSection(${getDisplayName(
      WrappedComponent
    )})`;
    return WithSection;
  };
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}
