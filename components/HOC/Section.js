import React from "react";
import { Grid, Divider } from "../cv/styles";

// This function takes a component
export default function withSection(
  WrappedComponent,
  stylesForWrappedComponent
) {
  return styles => {
    const WithSection = props => (
      <Grid
        as="section"
        style={{
          marginBotton: 30,
          marginTop: 30,
          padding: 10,
          ...styles
        }}
      >
        <WrappedComponent {...props} styles={stylesForWrappedComponent} />
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
