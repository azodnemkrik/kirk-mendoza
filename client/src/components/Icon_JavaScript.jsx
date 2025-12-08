import React, { useEffect } from 'react';
import iconJavaScript from '../images/javascript.svg';

const Icon_JavaScript = ({ className }) => {

   useEffect(() => {

   }, []);

   return (
      <div className="skill">
         <img className={`skillIcon ${className}`} src={iconJavaScript} alt="JavaScript" style={{ width: '100%', maxWidth: '400px' }} />
         <p className='float skillLabel' style={{color: '#ffe944ff', fontWeight: 'bold'}}>JavaScript</p>
      </div>
   );
}

export default Icon_JavaScript;