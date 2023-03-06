import Image from "next/image";

const House = () => {
  const photos = [
    { src: "/../public/assets/house_series/h1.png", alt: "House No. 1" },
    { src: "/../public/assets/house_series/h2.png", alt: "House No. 2" },
    { src: "/../public/assets/house_series/h3.png", alt: "House No. 3" },
    { src: "/../public/assets/house_series/h4.png", alt: "House No. 4" },
    { src: "/../public/assets/house_series/h5.png", alt: "House No. 5" },
    { src: "/../public/assets/house_series/h6.png", alt: "House No. 6" },
    { src: "/../public/assets/house_series/h7.png", alt: "House No. 7" },
    { src: "/../public/assets/house_series/h8.png", alt: "House No. 8" },
    { src: "/../public/assets/house_series/h9.png", alt: "House No. 9" },
    { src: "/../public/assets/house_series/h10.png", alt: "House No. 10" },
    { src: "/../public/assets/house_series/h11.png", alt: "House No. 11" },
    { src: "/../public/assets/house_series/h12.png", alt: "House No. 12" },
  ];

  return (
    <>
      <div className="tokyo_tm_portfolio">
        <div className="tokyo_tm_title">
          <div className="series_title">
            <div className="left">
              {/* <span>House Series</span> */}
              <h3
                className="series_title"
                data-aos="fade-down"
                data-aos-duration="1200"
              >
                House
              </h3>
              <p data-aos="fade-down" data-aos-duration="1200">
                “The house has grown into a knowledgeable witness. It has been
                party to early seductions, it has watched homework being
                written, it has observed swaddled babies freshly arrived from
                hospital, it has been surprised in the middle of the night by
                whispered conferences in the kitchen. It has experienced winter
                evenings when its windows were as cold as bags of frozen peas
                and midsummer dusks when its brick walls held the warmth of
                newly baked bread”.
              </p>
              <p data-aos="fade-down" data-aos-duration="1200">
                - Alain de Botton
              </p>
            </div>
          </div>
        </div>

        <div className="portfolio_filter">
          
            {/* END TABLIST */}
            <div className="list_wrapper">
          
                <div className="portfolio_list">
                  {photos.map((photo) => (
                    <li data-aos="fade-right" data-aos-duration="1200">
                      <div className="inner">
                        <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <a>
                            <Image src={photo.src} width={300} height={300} />
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </div>
              
            </div>
          
        </div>
      </div>
    </>
  );
};

export default House;
