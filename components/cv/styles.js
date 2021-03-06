import styled from "styled-components";
// import renderHTML from "react-render-html";
import media from "../layout/mediaQueries";

export const colors = {
  black: "#00131a",
  lighterBlack: "#1a1a1a",
  greyBlue: "#2E4053",
  darkGrey: "#424949",
  greenish: "#DAF7A6",
  blueish: "#1C2833",
  redish: "#E74C3C",
  plomo: "#424949"
};

// style components

export const Avatar = styled.img.attrs({
  src: `${props => props.src}`
})`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  
`;
export const Heading = styled.h1`
  font-size: 30px;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  font-weight: 900;
  text-align: center;
  color: ${colors.darkGrey};
  margin-bottom: 10px;
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
    props["xs-span"]};
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
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 2px;
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

export const JobTitle = styled(Subheadline)`
  text-align: center;
  font-family: "Helvetica";
  letter-spacing: 1.5px;
  color: ${colors.darkGrey};
  font-size: 30px;
  margin-bottom: 10px;
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

export const Headline = styled.h1`
  font-family: "Lucida Console", Monaco, monospace;
  text-transform: uppercase;
  line-height: 30px;
  color: ${colors.redish};
  margin-left: 5%;
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
  background-color: ${colors.greenish};
  margin-top: 50px;
  width: 100%;
  min-width: 100px;
  height: 2px;
`;
