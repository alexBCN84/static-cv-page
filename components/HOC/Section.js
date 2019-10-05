import React, { useRef, useEffect } from "react";
import { Grid, Divider } from "../cv/styles";

// STEPS FOR IMPLEMENTING INTERSECTION OBSERVER WITH REACT

// 1. Create a ref for element that intersection observer will be applied to
// 2. Since intersectionObserver creates sideEffects, insert logic in useEffec hook
// 3. create options object.
// 4. create Callback to determine what happens on each threshold
// 5. create new inersectionObserver and pass the callback function
// 6. attach observer to observe element assigned to ref
// 7. return a function that calls disconect()

export default function withSection(WrappedComponent) {
  const sectionRef = useRef(null);
  let increasingOpacity = "opacity";
  let opacityIncrement = 0.05;
  let prevRatio = 0.0;

  function buildThresholdList() {
    const height = sectionRef.current.offsetHeight;
    const percentage = (200 * 100) / height;

    // height --> 200
    // 100 --> x
    // percentage => 200 * 100 / height

    // 100 --> percentage
    // 1 --> x

    // ratioToOne => percentage / 100
    const ratioToOne = percentage / 100;
    let thresholds = [];
    let numSteps = 20;
    let proportionalNumSteps = ratioToOne / 20;
    let accumulativePropSteps = 0;
    let objectWithValues = {};

    for (let i = 1.0; i <= numSteps; i++) {
      accumulativePropSteps = accumulativePropSteps + proportionalNumSteps;
      let ratio = i / numSteps;
      objectWithValues[i] = { accumulativePropSteps, ratio };
      // console.log({
      //   ratio: ratio,
      //   i,
      //   percentage,
      //   ratioToOne: percentage / 100,
      //   id: sectionRef.current.id,
      //   objectWithValues,
      //   accumulativePropSteps
      // });
      // thresholds.push(objectWithValues[i].accumulativePropSteps);
    }

    thresholds.push(0);
    return thresholds;
  }

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList()
    };

    function callback(entries, observer) {
      entries.forEach(entry => {
        console.log(prevRatio);
        if (entry.intersectionRatio > prevRatio) {
          // console.log(prevRatio);
          entry.target.style.opacity = increasingOpacity.replace(
            "opacity",
            opacityIncrement
          );
        }
        // if (entry.intersectionRatio > 0.4) {
        //   entry.target.style.opacity = increasingOpacity.replace(
        //     "opacity",
        //     1.0
        //   );
        // }
        prevRatio = entry.intersectionRatio;
        opacityIncrement = opacityIncrement + 0.05;
        console.log({
          id: entry.target.id,
          opacityIncrement,
          intersectionRetio: entry.intersectionRatio
        });
      });
    }

    const sectionObserver = new IntersectionObserver(callback, observerOptions);
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
          padding: 10
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
