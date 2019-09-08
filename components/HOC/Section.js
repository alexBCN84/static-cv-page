import React from 'react';

// This function takes a component
export default function withSection(WrappedComponent, stylesForWrappedComponent){
    return (styles) => {
        const WithSection = (props) => (
            <section style={{marginBotton: 30, ...styles}}>
                <WrappedComponent {...props} styles={stylesForWrappedComponent}/>
            </section>
        )
        
        WithSection.displayName = `WithSection(${getDisplayName(WrappedComponent)})`;
        return WithSection;
    }
}


function getDisplayName(WrappedComponent){
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
