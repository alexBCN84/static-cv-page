import React from "react";
import { colors } from "../../components/cv/styles";

export const Npm = ({style}) => (
    <span style={{...style}}>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 48 48" 
            width="34px" 
            height="34px"
            >
                <path 
                    fill={colors.redish} 
                    d="M0,15h48v17H24v3H13v-3H0V15z"/>
                <path 
                    fill="#fff" 
                    d="M3 29L8 29 8 21 11 21 11 29 13 29 13 18 3 18zM16 18v14h5v-3h5V18H16zM24 26h-3v-5h3V26zM29 18L29 29 34 29 34 21 37 21 37 29 40 29 40 21 43 21 43 29 45 29 45 18z"
                />
        </svg>
    </span>
);