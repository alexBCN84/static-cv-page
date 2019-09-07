import {details} from '../styles';

const grid = {
    display: 'grid',
    gridGap: '20px',
    gridTemplateColumns: 'repeat(12, 1fr)'
  }
  
  export default function Skills({content, type}){
    let counter = 1;
    return (
      <ul style={grid}>
        {content.map(({skill, heading, subheading}, i) => {
          let startColumn = counter;
          counter = startColumn === 9 ? 1 : counter+=4; 
          return (
            <React.Fragment key={i}>
              {type === 'key' && <li style={{...details, gridColumn: `${startColumn} / span 4`, marginTop: 0, marginBottom: -10}}>{skill}</li>}
              {type === 'soft' && <li style={{...details, gridColumn: `${startColumn} / span 4`, marginTop: 0, marginBottom: -10}}><strong>{heading}: </strong>{subheading}</li>}
            </React.Fragment> 
            )
          })
        }
      </ul>
  
    );
  }