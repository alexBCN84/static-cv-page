import React from "react";
import {
  GridItem,
  Headline,
  Subheadline,
  Note
} from "../styles";

import { useDevice } from "../../hooks";
import { Npm } from "../../../content/icons/npm";

const Projects = ({ title, content }) => {
    const { isMOBILE } = useDevice();
    return (
        <React.Fragment>
        <GridItem start="1" span="12">
            <Headline as="h2">{title}</Headline>
        </GridItem>

        {content.map(
            ({ title, linktointro, linkto}, i) => {
            const linkToPublicationMobile = <em>{linktointro} <a href={linkto}>here</a></em>;
            const linkToPublicationDesktop = <><em>{linktointro} here</em> <a href={linkto}>{linkto}</a></>;
            return (
                <React.Fragment key={i}>
                    <GridItem start="1" span="12">
                        <Subheadline as="p">
                        {(i === 0 || i === 1) ? <Npm style={{verticalAlign: "middle", marginRight: "10px"}}/> : null}
                        <strong>
                            {title}
                        </strong>
                        </Subheadline>
                    </GridItem>
                    <GridItem start="1" span="12" style={{ marginTop: -30 }}>
                        <Note>
                        {
                            !!isMOBILE ?  linkToPublicationMobile
                            : linkToPublicationDesktop
                        }
                        </Note>
                    </GridItem>
                </React.Fragment>
            );
            }
        )}
        </React.Fragment>
    );
};

export default Projects;
