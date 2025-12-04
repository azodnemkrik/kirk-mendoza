import brandClients from '../../images/brands-clients.png';

const BrandCrawler = () => {

   return (
      <div className="brand-crawler-wrapper">
         <p>Brands I've worked with</p>
         <div className="brand-crawler-container">
            <img className="brands" src={brandClients} alt="Brands"/>
            <img className="brands" src={brandClients} alt="Brands"/>
         </div>
      </div>
   )
}

export default BrandCrawler;