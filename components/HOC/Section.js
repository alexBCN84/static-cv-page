import React from 'react';

// This function takes a component
export default function withSection(WrappedComponent){
    const WithStyledSection = (styles) => {
        const WithSection = (props) => (
            <section style={styles}>
                <WrappedComponent {...props}/>
            </section>
        )
        
        WithSection.displayName = `WithSection(${getDisplayName(WrappedComponent)})`;
        return WithSection;
    }
    
    WithStyledSection.displayName = `WithStyledSection(${getDisplayName(withSection)})`;
        return WithStyledSection;

    function getDisplayName(Component){
        return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }
    
}

