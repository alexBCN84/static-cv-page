import { Details, GridItemGrid, GridItem } from "../styles";

export default function Skills({ content, type }) {
  let xsCounter = 1,
    smCounter = 1,
    lgCounter = 1;
  return (
    <GridItemGrid columns="12" width="1fr" as="ul" style={{ marginBottom: 30 }}>
      {content.map(({ skill, heading, subheading }, i) => {
        let lgStart = lgCounter,
          xsStart = xsCounter,
          smStart = smCounter;

        smCounter = smStart === 7 ? 1 : (smCounter += 6);
        lgCounter = lgStart === 9 ? 1 : (lgCounter += 4);
        return (
          <GridItem
            key={i}
            start={xsStart}
            sm-start={smStart}
            lg-start={lgStart}
            span="12"
            sm-span="6"
            lg-span="4"
          >
            {type === "key" && (
              <Details as="li" style={{ marginTop: 0, marginBottom: -5 }}>
                {skill}
              </Details>
            )}
            {type === "soft" && (
              <Details as="p" style={{ marginTop: 0, marginBottom: -5 }}>
                <strong>{heading}: </strong>
                {subheading}
              </Details>
            )}
          </GridItem>
        );
      })}
    </GridItemGrid>
  );
}
