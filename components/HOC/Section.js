import React, { useRef, useEffect } from "react";
import { Grid } from "../cv/styles";
import { useDevice } from "../hooks";

export default function withSection(WrappedComponent) {
  const sectionRef = useRef(null);
  useDevice();
  useEffect(() => {
    let fadeIntoView;
    let opacity = 0.0;

    function increaseVisibility(entries) {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          fadeIntoView = setInterval(() => {
            if (opacity >= 1.0) {
              () => clearInterval(fadeIntoView);
            }
            opacity += 0.1;
            if (sectionRef && sectionRef.current) {
              sectionRef.current.style.opacity = opacity;
            }
          }, 100);
        }
      });
    }
    const sectionObserver = new IntersectionObserver(increaseVisibility);
    sectionObserver.observe(sectionRef.current);

    return () => {
      sectionObserver.disconnect();
    };
  }, []);
  return id => {
    const WithSection = props => (
      <Grid
        as="section"
        style={{
          marginBotton: 30,
          marginTop: 30,
          padding: 10,
          opacity: 0.0
        }}
        ref={sectionRef}
        id={id}
      >
        <WrappedComponent {...props} />
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
