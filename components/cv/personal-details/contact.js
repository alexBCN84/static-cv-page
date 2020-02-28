import React from 'react';

export const Email = ({email}) => (
    <>
        <a href={`mailto:${email}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="34" height="34" style={{position: 'relative', top: '10px', marginRight: '10px'}}>
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
        <span>{email}</span>
    </>
)

export const Phone = ({phone}) => (
    <>
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="35px" height="35px" viewBox="0 0 35 35" style={{enableBackground: 'new 0 0 35 35', position: 'relative', top: '10px', marginRight: '10px'}}>
            <g>
                <path d="M25.302,0H9.698c-1.3,0-2.364,1.063-2.364,2.364v30.271C7.334,33.936,8.398,35,9.698,35h15.604
                    c1.3,0,2.364-1.062,2.364-2.364V2.364C27.666,1.063,26.602,0,25.302,0z M15.004,1.704h4.992c0.158,0,0.286,0.128,0.286,0.287
                    c0,0.158-0.128,0.286-0.286,0.286h-4.992c-0.158,0-0.286-0.128-0.286-0.286C14.718,1.832,14.846,1.704,15.004,1.704z M17.5,33.818
                    c-0.653,0-1.182-0.529-1.182-1.183s0.529-1.182,1.182-1.182s1.182,0.528,1.182,1.182S18.153,33.818,17.5,33.818z M26.021,30.625
                    H8.979V3.749h17.042V30.625z"/>
            </g>
        </svg>
        <span>{phone}</span>
    </>
);

export const Github = ({github}) => (
    <>
        <a href={`https://www.${github}`}>
            <svg enableBackground="new 0 0 24 24" height="34" viewBox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg" style={{position: 'relative', top: '10px', marginRight: '10px'}}>
                <path 
                    d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" 
                    fill="#212121"/>
                </svg>
        </a>
        <span>{github}</span>
    </>
)

export const Linkedin = ({linkedin}) => (
    <>
        <a href={`https://www.${linkedin}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" style={{position: 'relative', top: '10px', marginRight: '10px'}}>
                <path 
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
        </a>
        <span>{linkedin}</span>
    </>
)

export const Address = ({address}) => (
    <>
        <a href="https://www.google.com/maps/place/Berlin/@52.5065133,13.1445545,10z/data=!3m1!4b1!4m5!3m4!1s0x47a84e373f035901:0x42120465b5e3b70!8m2!3d52.5200066!4d13.404954">
            <svg height="34" viewBox="0 0 512 512" width="34" xmlns="http://www.w3.org/2000/svg" style={{position: 'relative', top: '10px', marginRight: '10px'}}>
                <path d="m256 75c-24.8125 0-45 20.1875-45 45s20.1875 45 45 45 45-20.1875 45-45-20.1875-45-45-45zm0 0"/>
                <path d="m256 0c-66.167969 0-120 53.832031-120 120 0 22.691406 6.371094 44.796875 18.429688 63.925781l101.570312 162.074219 101.570312-162.074219c12.058594-19.128906 18.429688-41.234375 18.429688-63.925781 0-66.167969-53.832031-120-120-120zm0 195c-41.351562 0-75-33.648438-75-75s33.648438-75 75-75 75 33.648438 75 75-33.648438 75-75 75zm0 0"/>
                <path d="m182.996094 512h145.957031l-11.535156-91h-123.175781zm0 0"/>
                <path d="m197.992188 391h50.914062l-42.488281-67.386719zm0 0"/>
                <path d="m343.828125 391h118.175781l-37.5-90h-92.21875zm0 0"/>
                <path d="m49.996094 391h117.765625l11.25-90h-91.515625zm0 0"/>
                <path d="m263.09375 391h50.476562l-8.527343-66.523438zm0 0"/>
                <path d="m164.011719 421h-126.515625l-37.496094 91h152.765625zm0 0"/>
                <path d="m474.503906 421h-126.832031l11.539063 91h152.789062zm0 0"/>
            </svg>
        </a>
        <span>{address}</span>
    </>
)