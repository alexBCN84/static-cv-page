import React from "react";
import {
  GridItem,
  Headline,
  Subheadline,
  Note,
  Divider
} from "../styles";

import { useDevice } from "../../hooks";

const Publications = ({ title, content }) => {
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
                {i !== content.length - 1 && <Divider style={{width: "50px"}}/>}
                </React.Fragment>
            );
            }
        )}
        </React.Fragment>
    );
};

export default Publications;
