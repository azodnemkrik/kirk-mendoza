import brandClients from '../../images/brands-clients.png';

const BrandCrawler = ({ className }) => {

   return (
      <div className={`brand-crawler-wrapper ${className}`}>
				{/* <div className="brand-crawler-section">
					<h2 className="dark">Brands I've worked with</h2>
				</div> */}
         <div className="brand-crawler-container">
            <img className="brands" src={brandClients} alt="Brands" />
            <img className="brands" src={brandClients} alt="Brands" />
         </div>
      </div>
   )
}

export default BrandCrawler;