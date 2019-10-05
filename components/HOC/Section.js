import React, { useRef, useEffect } from "react";
import { Grid, Divider } from "../cv/styles";

export default function withSection(WrappedComponent) {
  const sectionRef = useRef(null);

  useEffect(() => {
    let fadeIntoView;
    let opacity = 0.0;

    function increaseVisibility(entries) {
      entries.forEach(entry => {
        console.log(entry);
        if (entry.intersectionRatio > 0) {
          fadeIntoView = setInterval(() => {
            if (opacity >= 1.0) {
              () => clearInterval(fadeIntoView);
            }
            opacity += 0.1;
            sectionRef.current.style.opacity = opacity;
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
          opacity: 0.1
        }}
        ref={sectionRef}
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
