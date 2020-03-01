import { css } from "styled-components";

const mediaQuery = (...query) => (...rules) => css`
  @media ${css(...query)} {
    ${css(...rules)}
  }
`;

export const sizes = {
  tablet: 768,
  laptop: 992,
  desktop: 1170
};

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
const media = {
  xs: mediaQuery`(max-width: ${(sizes.tablet - 1) / 16}em)`,
  sm: mediaQuery`(min-width: ${sizes.tablet / 16}em)`,
  tabletOnly: mediaQuery`(min-width: ${sizes.tablet /
    16}em) and (max-width: ${(sizes.laptop - 1) / 16}em)`,
  md: mediaQuery`(min-width: ${sizes.laptop / 16}em)`,
  lg: mediaQuery`(min-width: ${sizes.desktop / 16}em)`,
  minWidth: pxValue => mediaQuery`(min-width: ${pxValue / 16}em)`,
  print: mediaQuery`print`
};

export default media;
