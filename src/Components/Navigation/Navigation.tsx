import React from 'react';
import { Link } from "react-router-dom";
  


const Navigation: React.FC = (props) => {
  
  return (
    <>
        <nav>
        <Link to={'/home'}></Link>
            <Link to={'/rent'}></Link>
            <Link to={'/invoices'}></Link>
        </nav>
    </>
  );
}

export default Navigation;
