import { use } from "react"
import { useEffect } from "react";
import brandClients from '../../images/brands-clients.png';

const BrandCrawler = () => {

   useEffect(() => {

   }, []);

   return (
      <div className="brand-crawler-container centered-container">
         <img className="brands" src={brandClients} alt="Brands"/>
      </div>
   )
}

export default BrandCrawler;