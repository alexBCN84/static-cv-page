import { useState, useEffect } from "react";
import { sizes } from '../layout/mediaQueries';

export function useDevice(){
    const isMOBILE = 'isMOBILE';
    const isTABLET = 'isTABLET';
    const isLAPTOP = 'isLAPTOP';
    const isDESKTOP = 'isDESKTOP';

    const onLoadDevice = () => {
            return window.innerWidth < sizes.tablet ? isMOBILE
                    : window.innerWidth < sizes.laptop ? isTABLET
                    : window.innerWidth < sizes.desktop ? isLAPTOP
                    : isDESKTOP;
        };
    
    const [device, setDevice] = useState(onLoadDevice());
    const onResizeDevice = () => {
            return window.innerWidth < sizes.tablet ? setDevice(isMOBILE)
            : window.innerWidth < sizes.laptop ? setDevice(isTABLET)
            : window.innerWidth < sizes.desktop ? setDevice(isLAPTOP)
            : setDevice(isDESKTOP);
        };
    
    

    useEffect(() => {
        window.addEventListener('resize', onResizeDevice);
        return () => {
        window.removeEventListener('resize', onResizeDevice);
        };
    }, []);

    return {
        isMOBILE: device === isMOBILE,
        isTABLET: device === isTABLET,
        isLAPTOP: device === isLAPTOP,
        isDESKTOP: device === isDESKTOP
    };
}