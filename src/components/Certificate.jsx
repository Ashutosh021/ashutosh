import React from "react";
import certificateData from '../assets/certificates.json'
import { Link } from "react-router-dom";

import '../styles/certificate.scss'

const Certificate = () => {
  return (
    <div className="certificate-container">
      <h2>Certificates</h2>
      <hr className="animated-hr"/>

      <div className="certificate-cards">

      {
        certificateData.map((data,index)=>{
       return(
        <div className="card">
          <img src={data.certImgSrc} alt={data.skillName} />
          <div className="card-info">
            <h4>{data.skillName}</h4>
            <p>Completion Date : {data.completionDate}</p>
            <p>Platform : {data.platform}</p>
            <Link to={data.link} className="link">Checkout</Link>
          </div>
        </div>
       );
        })}
      </div>
      <Link to={'/certificates'} className="see-more-btn"> See More </Link>
    </div>
  );
};

export default Certificate;