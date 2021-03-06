import React from 'react';
import { colors } from '../styles.js';
import { useDevice } from '../../hooks';


export const Email = ({email}) => {
    const { isMOBILE, isTABLET } = useDevice();
    const margin = !!isTABLET ? {marginRight: "20px"} : {marginLeft: "20px"};
    const jsx = <span style={{fontColor: `${colors.plomo}`, fontFamily: "Helvetica", fontSize: "16px"}}>{ email }</span>;
    return (
        <>  
            {!!isMOBILE ? null : !!isTABLET ? null : jsx}
            <a href={`mailto:${email}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="34" height="34" style={{position: 'relative', top: '10px', ...margin}}>
                    <path 
                        d="M29.986 27.715H2.008C.915 27.715 0 26.85 0 25.733V6.376A2.01 2.01 0 0 1 2.008 4.37h27.978c1.093 0 2.008.9 2.008 2.008v19.33c-.025 1.144-.915 2.008-2.008 2.008z" 
                        fill="#f2f2f2"/>
                    <path 
                        d="M4 27.715l11.97-8.76.076-.508L3.7 9.578l-.025 17.705z" 
                        opacity=".1" fill="#221f1f"/>
                    <g fill="#d44c3d">
                        <path d="M2.008 27.715C.9 27.715 0 26.85 0 25.733V6.35c0-1.118.9-1.32 2.008-1.32s2.008.23 2.008 1.32v21.364z"/>
                        <path 
                            d="M2.008 5.334c1.423 0 1.703.432 1.703 1.016v21.084H2.008c-.94 0-1.703-.762-1.703-1.703V6.35c-.025-.6.28-1.016 1.703-1.016zm0-.28C.9 5.055 0 5.283 0 6.35v19.356a1.98 1.98 0 0 0 2.008 2.008h2.008V6.35C4 5.258 3.126 5.055 2.008 5.055zm27.978.28c1.296 0 1.703.254 1.703.966v19.458c0 .94-.762 1.703-1.703 1.703h-1.703V6.3c-.025-.737.407-.966 1.703-.966zm0-.28c-1.118 0-2.008.152-2.008 1.245v21.44h2.008c1.118 0 2.008-.9 2.008-2.008V6.274c-.025-1.093-.915-1.22-2.008-1.22z"/>
                        <path 
                            d="M29.986 27.715h-2.008V6.3c0-1.118.9-1.245 2.008-1.245s2.008.152 2.008 1.245v19.458a2 2 0 0 1-2.008 1.957z"/></g><path d="M21.422 27.715L.178 7.2l1.118.457 14.8 10.647L31.993 6.63v19.128a1.99 1.99 0 0 1-2.008 1.982z" 
                            opacity=".08" 
                            fill="#221f1f"/>
                    <g fill="#d44c3d">
                        <path 
                            d="M15.96 18.98L.864 8.028c-.9-.66-1.144-1.93-.483-2.82s1.93-1.093 2.846-.432l12.757 9.275L28.817 4.65c.9-.66 2.135-.457 2.795.457.66.9.457 2.135-.457 2.795z"/>
                        <path 
                            d="M29.986 4.572c.534 0 1.067.254 1.398.712.534.762.38 1.83-.38 2.4L15.96 18.625 1.042 7.8C.28 7.24.076 6.147.6 5.4c.305-.457.84-.737 1.423-.737.38 0 .737.102 1.016.33l12.73 9.25.178.102.178-.102 12.82-9.393c.33-.178.66-.28 1.042-.28zm0-.305c-.407 0-.84.102-1.17.38L15.984 14.05 3.202 4.75c-.33-.254-.762-.38-1.194-.38-.635.025-1.27.305-1.652.84-.635.9-.38 2.135.508 2.795L15.96 18.98 31.155 7.9a2.02 2.02 0 0 0 .457-2.795c-.407-.534-1.016-.84-1.626-.84z"/>
                    </g>
                </svg>
            </a>
            {!!isTABLET ? jsx : null}
        </>
    )
}

export const Phone = ({phone}) => {
    const { isMOBILE, isTABLET } = useDevice();
    const margin = !!isTABLET ? {marginRight: "20px"} : {marginLeft: "20px"};
    const jsx = <span style={{fontColor: `${colors.plomo}`, fontFamily: "Helvetica", }}>{phone}</span>
    return (
        <a href={`tel:${phone}`} style={{textDecoration: 'none', color: 'inherit'}}>
            {!!isMOBILE ? null : !!isTABLET ? null : jsx}
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="35px" height="35px" viewBox="0 0 35 35" style={{enableBackground: 'new 0 0 35 35', position: 'relative', top: '10px', ...margin}}>
                <g>
                    <path d="M25.302,0H9.698c-1.3,0-2.364,1.063-2.364,2.364v30.271C7.334,33.936,8.398,35,9.698,35h15.604
                        c1.3,0,2.364-1.062,2.364-2.364V2.364C27.666,1.063,26.602,0,25.302,0z M15.004,1.704h4.992c0.158,0,0.286,0.128,0.286,0.287
                        c0,0.158-0.128,0.286-0.286,0.286h-4.992c-0.158,0-0.286-0.128-0.286-0.286C14.718,1.832,14.846,1.704,15.004,1.704z M17.5,33.818
                        c-0.653,0-1.182-0.529-1.182-1.183s0.529-1.182,1.182-1.182s1.182,0.528,1.182,1.182S18.153,33.818,17.5,33.818z M26.021,30.625
                        H8.979V3.749h17.042V30.625z"/>
                </g>
            </svg>
            {!!isTABLET ? jsx : null}
        </a>
    );
}

export const Github = ({github}) => {
    const { isMOBILE} = useDevice();
    const jsx = <span style={{fontColor: `${colors.plomo}`, fontFamily: "Helvetica"}}>{github}</span>
    return (
        <>  
            <a href={`https://www.${github}`}>
                <svg enableBackground="new 0 0 24 24" height="34" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg" style={{position: 'relative', top: '10px', marginRight: '20px'}}>
                    <path 
                        d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" 
                        fill="#212121"
                    />
                </svg>
            </a>
            {!!isMOBILE ? null : jsx}
        </>
    )
}

export const Linkedin = ({linkedin}) => {
    const { isMOBILE } = useDevice();
    const jsx = <span style={{fontColor: `${colors.plomo}`, fontFamily: "Helvetica", fontSize: "16px"}}>{linkedin}</span>
    return (
        <>  
            <a href={`https://www.${linkedin}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" style={{position: 'relative', top: '10px', marginRight: '20px'}}>
                    <path 
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            </a>
            {!!isMOBILE ? null : jsx}
        </>
    )
}

export const Location = ({address}) => (
    <>
        <a href="https://www.google.com/maps/place/Berlin/@52.5065133,13.1445545,10z/data=!3m1!4b1!4m5!3m4!1s0x47a84e373f035901:0x42120465b5e3b70!8m2!3d52.5200066!4d13.404954">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="55" height="55"
	 viewBox="0 0 104.672 104.672" style={{enableBackground: 'new 0 0 104.672 104.672', borderBottom: `3px solid #424949 `}}>
<g>
	<path style={{fill:'#E74C3C'}} d="M100.078,97.859V56.731h1.709V45.188h-2.334v-4.081h0.754v-1.616H76.713v-3.325l-9.887,0.001
		c0.066-0.328-0.178-0.999-0.113-1.426c0.104-0.698,0.06-1.157,0.053-1.838c-0.002-0.334,0.852-2.642,1.453-2.073
		c-0.107,0.263-0.721,0.851-0.084,0.819c0.593-0.028,0.896-0.105,1.322-0.503c0.267,0.417,0.671,0.357,0.826,0.954
		c0.17,0.643-0.212,1.273-0.087,1.901c0.089,0.453-0.761,0.744-0.454,1.445c0.352,0.809,0.903,0.038,1.089-0.361
		c0.249-0.533,0.086-1.5,0.109-2.09c0.021-0.506,0.223-1.163,0.165-1.65c-0.026-0.223-0.13-0.527-0.16-0.709
		c-0.08,0.002-0.469-0.155-0.502-0.239c-0.361,0.123-0.143-0.897-0.145-0.95c-0.018-0.875,0.798-1.973-0.067-2.574
		c-0.206-0.143-0.212-0.708-0.351-0.942c-0.696-0.255,0.641-0.979,0.683-1.016c0.192-0.165,1.289-0.633,0.881-1.17
		c-0.372-0.485-0.07-0.961-0.091-1.489c-0.011-0.265,0.248-0.496,0.274-0.766c-0.022-0.203-0.102-0.379-0.24-0.529
		c-0.19-0.6,0.288-0.639,0.459-1.118c-0.877,0.157-1.284-0.723-2.133-0.518c-0.637,0.155-1.33,0.958-1.643,1.502
		c-0.432,0.747-0.666,1.695-0.918,2.51c-0.134,0.431-0.445,1.234-0.752,2.065s-2.597,0.736-3.251,1.662
		c-1.468,2.079,0.15,6.084,0.15,6.084c0.077,0.756-0.309,2.305,0.106,2.986c0.006,0.009,0.008,0.023,0.014,0.032h-2.512l0.374-1.171
		l0.041-2.277c1.299-3.605-0.897-7.541-0.897-7.541c-0.064-0.405-0.2-0.847-0.199-1.263c0.37-0.227,0.889-0.585,0.587-0.982
		c-0.069-0.09-0.109-0.179-0.138-0.269c0.141-0.421,0.111-0.732,0.031-0.944c0.012-0.091,0.019-0.183,0.016-0.276
		c-0.011-0.265,0.248-0.496,0.274-0.766c-0.022-0.203-0.102-0.379-0.24-0.53c-0.19-0.599,0.288-0.639,0.459-1.118
		c-0.877,0.157-1.284-0.723-2.133-0.518c-0.637,0.154-1.33,0.957-1.643,1.502c-0.151,0.261-0.272,0.55-0.385,0.846
		c-0.053-0.26-0.112-0.511-0.222-0.75c-0.231-0.512-0.594-0.776-1.113-0.706c-0.529,0.073-0.657,0.485-0.61,0.981
		c0.021,0.213,0.061,0.513-0.282,0.522c-0.444,0.011-0.749-0.292-1.047-0.568c-0.279-0.259-0.187-0.555-0.028-0.837
		c0.161-0.287,0.352-0.558,0.492-0.854c0.182-0.386,0.066-0.764-0.314-0.897c-0.383-0.134-0.566-0.811-1.11-0.457
		c-0.395,0.257-0.638,0.32-0.786,0.151v-4.729c1.178-0.185,2.066-1.197,2.066-2.398c0-1.236-0.889-2.236-2.066-2.431L51.91,7.887
		V7.784c3.058-0.319,2.683-3.775,2.683-3.775s-1.824,0.464-2.411,1.7c-0.065-0.508-0.326-0.907-0.618-0.909c0,0,0,0-0.001,0
		c0,0,0,0-0.001,0c-0.292,0.001-0.553,0.4-0.618,0.909c-0.586-1.235-2.41-1.7-2.41-1.7s-0.375,3.456,2.682,3.775v0.122
		c-1.147,0.202-2.014,1.189-2.014,2.415c0,1.206,0.887,2.213,2.063,2.397v4.622c-0.008,0.007-0.011,0.016-0.02,0.023
		c-0.896,0.716-1.465,1.767-2.445,2.404c-0.289,0.188-0.392,0.481-0.45,0.87c-0.222,1.473,0.073,2.905,0.216,4.35
		c0.022,0.222,0.06,1.751,0.06,1.751l-1.494-0.933c-0.047-0.09-0.096-0.182-0.128-0.277c0-0.002-0.001-0.004-0.001-0.007
		c-0.009-0.736-0.021-1.416-0.004-1.798c0.039-0.853,0.139-1.824-0.014-2.673c-0.11-0.618-0.491-1.608-1.038-1.969
		c-0.729-0.48-1.411,0.21-2.182-0.235c-0.001,0.509,0.436,0.708,0.053,1.208c-0.181,0.094-0.315,0.234-0.406,0.417
		c-0.066,0.262,0.099,0.567,0,0.813c-0.197,0.489-0.076,1.04-0.589,1.37c-0.566,0.367,0.058,1.229,0.348,1.576
		c0.291,0.348,0.986,0.271,0.986,0.271c-0.058,0.229-0.109,0.457-0.134,0.684c0,0-2.223,2.281-0.31,7.219l0.27,2.406
		c0.185,0.465,0.405,0.911,0.625,1.358h-3.357c0.006-0.01,0.008-0.025,0.014-0.035c0.416-0.681,0.03-2.23,0.107-2.986
		c0,0,1.618-4.005,0.15-6.084c-0.654-0.925-2.944-0.83-3.251-1.662c-0.308-0.832-0.618-1.634-0.752-2.065
		c-0.252-0.815-0.486-1.763-0.917-2.51c-0.314-0.544-1.007-1.347-1.644-1.502c-0.848-0.205-1.256,0.675-2.132,0.518
		c0.171,0.479,0.649,0.519,0.458,1.118c-0.138,0.15-0.218,0.327-0.24,0.529c0.026,0.27,0.285,0.5,0.274,0.766
		c-0.02,0.528,0.281,1.004-0.09,1.489c-0.409,0.537,0.688,1.005,0.88,1.17c0.042,0.036,1.379,0.761,0.682,1.016
		c-0.138,0.234-0.144,0.8-0.35,0.942c-0.865,0.601-0.05,1.7-0.067,2.574c-0.001,0.053,0.217,1.073-0.145,0.95
		c-0.032,0.083-0.421,0.241-0.502,0.239c-0.03,0.182-0.133,0.486-0.16,0.709c-0.057,0.487,0.144,1.144,0.165,1.65
		c0.023,0.59-0.14,1.557,0.109,2.09c0.186,0.398,0.737,1.169,1.089,0.361c0.306-0.701-0.543-0.993-0.455-1.445
		c0.125-0.628-0.256-1.258-0.086-1.901c0.156-0.597,0.559-0.537,0.826-0.954c0.425,0.398,0.729,0.475,1.322,0.503
		c0.637,0.031,0.023-0.557-0.083-0.819c0.602-0.569,1.455,1.738,1.453,2.073c-0.005,0.682-0.051,1.14,0.054,1.838
		c0.064,0.428-0.181,1.103-0.113,1.43l-10.038,0.001v3.325H3.849v1.621h1.483v4.086H2.421v11.539h1.671v41.115H0v2.806h104.672
		v-2.806h-4.594V97.859z M69.875,23.49c0.507,0.32,0.021,0.249,0.038,0.441c-0.002-0.036,0.105,0.616,0.088,0.539
		c0.076,0.337,0.436,0.289,0.053,0.5c-0.104,0.107-0.202,0.118-0.292,0.032C69.688,24.609,69.647,23.838,69.875,23.49z
		 M34.911,25.002c-0.09,0.086-0.188,0.075-0.292-0.032c-0.384-0.211-0.023-0.163,0.052-0.5c-0.017,0.078,0.091-0.575,0.088-0.539
		c0.017-0.193-0.467-0.122,0.04-0.441C35.026,23.838,34.985,24.609,34.911,25.002z M13.324,97.858V57.593H19.5l0.006,40.265H13.324z
		 M35.227,97.858h-6.178V57.593h6.178V97.858z M50.314,10.622c-0.146-0.271-0.146-0.406,0-0.677
		c0.409,0.069,0.647,0.079,1.001,0.033c0.046-0.354,0.036-0.592-0.032-1c0.271-0.146,0.406-0.146,0.677,0
		c-0.069,0.408-0.079,0.647-0.033,1c0.354,0.046,0.592,0.036,1.001-0.033c0.147,0.271,0.147,0.406,0,0.677
		c-0.409-0.068-0.646-0.078-1.001-0.032c-0.046,0.354-0.036,0.592,0.033,1c-0.271,0.146-0.407,0.146-0.677,0
		c0.068-0.408,0.078-0.647,0.032-1C50.961,10.544,50.723,10.553,50.314,10.622z M50.718,19.173c0.127-0.257,0.244-0.687,0.581-0.605
		c0.308,0.073,0.086,0.493,0.171,0.749c-0.066,0.233,0.145,0.542-0.118,0.701c-0.204,0.124-0.438-0.022-0.638-0.138
		C50.313,19.647,50.613,19.382,50.718,19.173z M58.063,97.858H44.776V57.593h13.286L58.063,97.858L58.063,97.858z M74.719,97.858
		h-7.117V57.593h7.117V97.858z M90.818,97.858h-6.551V57.593h6.551V97.858z"/>
</g>
</svg>
        </a>
        <span style={{ fontFamily: "Helvetica", letterSpacing: "1.5px", color: colors.greyBlue, display: 'block'}}>{address}</span>
    </>
)
