
import brandClients from '../../images/brands-clients.png';


const BrandCrawler = ({ className, onOpenModal, onUserInteraction }) => {

           // All dimensions and coordinates reduced by 50%
           // Old: width=5170, height=140, area coords=3850,0,4164,140
           // New: width=2585, height=70, area coords=1925,0,2082,70

           return (
                         <div className={`brand-crawler-wrapper ${className}`}>
                                    {/* <div className="brand-crawler-section">
					<h2 className="dark">Brands I've worked with</h2>
				</div> */}
                                    <div className="brand-crawler-container">
                                                  <img className="brands" src={brandClients} width="2585" height="70" useMap="#imageMap" alt="Brands" />
                                                  <img className="brands" src={brandClients} width="2585" height="70" useMap="#imageMap" alt="Brands" />
                                                  <img className="brands" src={brandClients} width="2585" height="70" useMap="#imageMap" alt="Brands" />
                                                  <img className="brands" src={brandClients} width="2585" height="70" useMap="#imageMap" alt="Brands" />
                                    </div>

                                    <map name="imageMap">
                                                  <area shape="rect" coords="1925,0,2082,70" alt="Contact" onClick={() => {
                                                  	if (onUserInteraction) {
                                                  		onUserInteraction("BrandCrawler ImageMap Click: P&G Site");
                                                  	}
                                                  	if (onOpenModal) {
                                                  		onOpenModal(<video className="flash-content" src="https://www.littlerobotmedia.com/media/video/pg-site.mp4" type="video/mp4" autoPlay loop muted controls width="auto" height="20%"></video>, "https://www.littlerobotmedia.com/video/pg-site.mp4");
                                                  	}
                                                  }}/>
                                    </map>

                         </div>
           )
}

export default BrandCrawler;