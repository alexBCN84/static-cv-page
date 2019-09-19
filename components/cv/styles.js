import styled from "styled-components";
import renderHTML from "react-render-html";
import media from "../layout/mediaQueries";

const colors = {
  black: "#00131a",
  lighterBlack: "#1a1a1a"
};

// style components

export const Heading = styled.h1`
  font-size: 30px;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  font-weight: 900;
  margin: 0px auto;
  color: ${colors.black};
  ${media.xs`
    font-size: 2em;
  `}
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  ${media.xs`
    grid-gap:1em;
  `}
  grid-template-columns: repeat(12, 1fr);
  margin: auto;
`;

export const GridItemGrid = styled(Grid)`
  grid-template-columns: repeat(
    ${props => props.columns},
    ${props => props.width}
  );
`;

export const GridItem = styled.div`
  grid-column: ${props => props.start} / span ${props => props.span};
  ${media.xs`
    grid-column: ${props => props["xs-start"]} / span ${props =>
    props["xs-span"]};;
  `}

  ${media.sm`
    grid-column: ${props => props["sm-start"]} / span ${props =>
    props["sm-span"]};
  `}
  ${media.md`
    grid-column: ${props => props["md-start"]} / span ${props =>
    props["md-span"]};
  
  `}
  ${media.lg`
    grid-column: ${props => props["lg-start"]} / span ${props =>
    props["lg-span"]};
  
  `}
  `;

export const ViewContainer = styled.article`
  padding: 60px;
  max-width: 1200px;
  margin: auto;
  ${media.xs`
    padding: 1em;
  `}
  ${media.md`
    box-shadow: 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  `}
`;

export const Subheadline = styled.h2`
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 20px;
  line-height: 30px;
  margin-top: 0;
  ${media.xs`
    font-size: 1.4em;
  `}
`;

export const Details = styled.p`
  font-family: "Courier New", Courier, monospace;
  color: ${colors.lighterBlack};
  list-style-type: none;
  margin-bottom: 5px;
  margin-top: 5px;
  font-size: 18px;
  font-weight: 400;
  text-align: ${props => props.align};
  ${media.xs`
    text-align: ${props => props["xs-align"]};
    font-size: 0.9em;
  `}
  ${media.sm`
    text-align: ${props => props["sm-align"]}
  `}
  ${media.md`
    text-align: ${props => props["md-align"]}
  `}
  ${media.lg`
    text-align: ${props => props["lg-align"]}
  `}
`;

export const AddressDetails = props => (
  <Details
    {...props}
    children={renderHTML(
      props.children
        .split(" ")
        .map((word, i) => (i === 1 ? word + "<br/>" : word))
        .join(" ")
    )}
  />
);

export const Headline = styled.h1`
  font-family: "Lucida Console", Monaco, monospace;
  text-transform: uppercase;
  line-height: 30px;
  letter-spacing: 3px;
  ${media.xs`
    font-size: 2em;
  `}
`;

export const Content = styled.div`
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  letter-spacing: 1.2px;
  line-height: 1.5em;
  ${media.xs`
    font-size: 1em;
  `}
`;

export const Note = styled.p`
  font-family: Arial, Helvetica, sans-serif;
`;

export const Divider = styled.div`
  background-color: red;
  width: 100%;
  min-width: 100px;
  height: 2px;
`;
