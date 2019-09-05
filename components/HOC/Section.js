import React from 'react';

// This function takes a component
export default function withSection(WrappedComponent, stylesForWrappedComponent){
    return (styles) => {
        const WithSection = (props) => (
            <section style={styles}>
                <WrappedComponent {...props} styles={stylesForWrappedComponent}/>
            </section>
        )
        
        WithSection.displayName = `WithSection(${getDisplayName(WrappedComponent)})`;
        return WithSection;
    }
}


function getDisplayName(WrappedComponent){
    return console.log(WrappedComponent.displayName || WrappedComponent.name || 'Component');
}
