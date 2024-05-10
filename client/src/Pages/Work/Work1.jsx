import React from "react";
import "./Work.css";
import img1 from "../../Assets/Cover images/01.jpg";
import img2 from "../../Assets/Cover images/02.jpg";
import img3 from "../../Assets/Cover images/03.jpg";
import img4 from "../../Assets/Cover images/04.jpg";
import img5 from "../../Assets/Cover images/05.jpg";
import img6 from "../../Assets/Cover images/06.jpg";
import img7 from "../../Assets/Cover images/07.jpg";
import img8 from "../../Assets/Cover images/08.jpg";
import img9 from "../../Assets/Cover images/09.jpg";
import img10 from "../../Assets/Cover images/010.jpg";
import img11 from "../../Assets/Cover images/011.jpg";
import img12 from "../../Assets/Cover images/012.jpg";
import img13 from "../../Assets/Cover images/013.jpg";
import img14 from "../../Assets/Cover images/014.jpg";
import img15 from "../../Assets/Cover images/015.png";
const Work = () => {
  return (
    <section id="work" className="pb-0 bg-dark1">
      <div className="container-fluid">
        <div
          // className="row"
          className="row-style"
        >
          <div className="col-md-12">
            <div className="main-title wow fadeIn" data-wow-delay="300ms">
              <h5 className="mb-4"> Some of our finest work</h5>
              <h2 className="mb-0">
                Creative <span className="color-pink"> Portfolio</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row d-block ">
          <div
            id="js-filters-mosaic-flat"
            className="cbp-l-filters-alignCenter"
          >
            <div
              data-filter="*"
              className="cbp-filter-item-active cbp-filter-item cbp-filter-style"
            >
              All <div className="cbp-filter-counter"></div>
            </div>
            <div
              data-filter=".fashion"
              className="cbp-filter-item cbp-filter-style"
            >
              Fashion <div className="cbp-filter-counter"></div>
            </div>
            <div
              data-filter=".travel"
              className="cbp-filter-item cbp-filter-style"
            >
              Travel <div className="cbp-filter-counter"></div>
            </div>
            <div
              data-filter=".tech"
              className="cbp-filter-item cbp-filter-style"
            >
              Tech <div className="cbp-filter-counter"></div>
            </div>
            <div
              data-filter=".product"
              className="cbp-filter-item cbp-filter-style"
            >
              Product <div className="cbp-filter-counter"></div>
              {/*              
                <!-- <div data-filter=".other" className="cbp-filter-item">
                    Others <div className="cbp-filter-counter"></div>
                </div> --> */}
            </div>
            <div
              id="js-grid-mosaic-flat"
              className="cbp cbp-l-grid-mosaic-flat no-transition"
            >
              <div className="cbp-item product">
                <a href="/Projects/Earthen soil.html" data-title="Commercial">
                  <div className="cbp-caption-defaultWrap">
                    <img src={img1} alt="work" height="720" width="1280" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <div className="cbp-l-caption-alignCenter">
                      <div className="cbp-l-caption-body">
                        <div className="cbp-l-caption-title">Earthern Soil</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="cbp-item product tech">
                <a
                  href="/Projects/manfroto.html"
                  data-title="Earthern Soil<br>by 1shdeep Creatives"
                >
                  <div className="cbp-caption-defaultWrap">
                    <img src={img2} alt="work" height="720" width="1280" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <div className="cbp-l-caption-alignCenter">
                      <div className="cbp-l-caption-body">
                        <div className="cbp-l-caption-title">Manfroto</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="cbp-item web-designs product tech">
                <a href="/Projects/realme.html">
                  <div className="cbp-caption-defaultWrap">
                    <img src={img3} alt="work" height="720" width="1280" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <div className="cbp-l-caption-alignCenter">
                      <div className="cbp-l-caption-body">
                        <div className="cbp-l-caption-title">Realme</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="cbp-item web-designs fashion">
                <a href="/Projects/lekme.html">
                  <div className="cbp-caption-defaultWrap">
                    <img src={img4} alt="work" height="720" width="1280" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <div className="cbp-l-caption-alignCenter">
                      <div className="cbp-l-caption-body">
                        <div className="cbp-l-caption-title">
                          Lakmé Fashion Week
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="cbp-item tech ">
                <a href="/Projects/OnePlus.html">
                  <div className="cbp-caption-defaultWrap">
                    <img src={img5} alt="work" height="720" width="1280" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <div className="cbp-l-caption-alignCenter">
                      <div className="cbp-l-caption-body">
                        <div className="cbp-l-caption-title">OnePlus</div>
                        <span className="work-icon">
                          <i className="fa fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>{" "}
              <div className="cbp-item travel">
                <a href="/Projects/Samode hotels.html">
                  <div className="cbp-caption-defaultWrap">
                    <img src={img6} alt="work" height="720" width="1280" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <div className="cbp-l-caption-alignCenter">
                      <div className="cbp-l-caption-body">
                        <div className="cbp-l-caption-title">Samode Hotels</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>{" "}
              <div className="cbp-item tech ">
                <a href="/Projects/Samsung.html">
                  <div className="cbp-caption-defaultWrap">
                    <img src={img7} alt="work" height="720" width="1280" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <div className="cbp-l-caption-alignCenter">
                      <div className="cbp-l-caption-body">
                        <div className="cbp-l-caption-title">Samsung</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>{" "}
              <div className="cbp-item travel">
                <a href="/Projects/SriLanka Tourism.html">
                  <div className="cbp-caption-defaultWrap">
                    <img src={img8} alt="work" height="720" width="1280" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <div className="cbp-l-caption-alignCenter">
                      <div className="cbp-l-caption-body">
                        <div className="cbp-l-caption-title">
                          SriLanka Tourism
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>{" "}
              <div className="cbp-item travel">
                <a href="/Projects/Taj seleqtions.html">
                  <div className="cbp-caption-defaultWrap">
                    <img src={img9} alt="work" height="720" width="1280" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <div className="cbp-l-caption-alignCenter">
                      <div className="cbp-l-caption-body">
                        <div className="cbp-l-caption-title">
                          Taj seleqtions
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>{" "}
              <div className="cbp-item travel">
                <a href="/Projects/Vietnam.html">
                  <div className="cbp-caption-defaultWrap">
                    <img src={img10} alt="work" height="720" width="1280" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <div className="cbp-l-caption-alignCenter">
                      <div className="cbp-l-caption-body">
                        <div className="cbp-l-caption-title">Vietnam</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="cbp-item tech product">
                <a href="/Projects/IQOO.html">
                  <div className="cbp-caption-defaultWrap">
                    <img src={img11} alt="work" height="720" width="1280" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <div className="cbp-l-caption-alignCenter">
                      <div className="cbp-l-caption-body">
                        <div className="cbp-l-caption-title">IQOO</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="cbp-item travel">
                <a href="/Projects/Cordelia cruises.html">
                  <div className="cbp-caption-defaultWrap">
                    <img src={img12} alt="work" height="720" width="1280" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <div className="cbp-l-caption-alignCenter">
                      <div className="cbp-l-caption-body">
                        <div className="cbp-l-caption-title">
                          Cordelia cruises
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>{" "}
              <div className="cbp-item travel">
                <a href="/Projects/abu dhabi.html">
                  <div className="cbp-caption-defaultWrap">
                    <img src={img13} alt="work" height="720" width="1280" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <div className="cbp-l-caption-alignCenter">
                      <div className="cbp-l-caption-body">
                        <div className="cbp-l-caption-title">Abu Dhabi</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>{" "}
              <div className="cbp-item  fashion">
                <a href="Projects/bonkers.html">
                  <div className="cbp-caption-defaultWrap">
                    <img src={img14} alt="work" height="720" width="1280" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <div className="cbp-l-caption-alignCenter">
                      <div className="cbp-l-caption-body">
                        <div className="cbp-l-caption-title">Bonkers</div>
                        <span className="work-icon">
                          <i className="fa fa-arrow-right"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>{" "}
              <div className="cbp-item travel">
                <a href="/Projects/Safari with Suyash.html">
                  <div className="cbp-caption-defaultWrap">
                    <img src={img15} alt="work" height="720" width="1280" />
                  </div>
                  <div className="cbp-caption-activeWrap">
                    <div className="cbp-l-caption-alignCenter">
                      <div className="cbp-l-caption-body">
                        <div className="cbp-l-caption-title">
                          Safari with Suryansh
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/* <!-- <div className="cbp-item graphic-designs seo">
                    <a href="/lib/Cover images/02.jpg" className="cbp-caption cbp-lightbox"
                        data-title="World Clock<br>by Paul Flavius Nechita">
                        <div className="cbp-caption-defaultWrap">
                            <img src="/lib/Cover images/02.jpg" alt="work"  width="449" height="450">
                        </div>
                        <div className="cbp-caption-activeWrap">
                            <div className="cbp-l-caption-alignCenter">
                                <div className="cbp-l-caption-body">
                                   
                                    <div className="cbp-l-caption-title">Creative art work</div>
                                    <span className="work-icon">
                                        <i className="fa fa-arrow-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div> -->
                <!-- <div className="cbp-item graphic-designs web-designs">
                    <a href="/ad-agency/img/work3.jpg" className="cbp-caption cbp-lightbox"
                        data-title="WhereTO App<br>by Tiberiu Neamu">
                        <div className="cbp-caption-defaultWrap">
                            <img src="/ad-agency/img/work3.jpg" alt="work">
                        </div>
                        <div className="cbp-caption-activeWrap">
                            <div className="cbp-l-caption-alignCenter">
                                <div className="cbp-l-caption-body">
                                   
                                    <div className="cbp-l-caption-title">Modern portfolio</div>
                                    <span className="work-icon">
                                        <i className="fa fa-arrow-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div> -->
                <!-- <div className="cbp-item seo marketing">
                    <a href="/ad-agency/img/work6.jpg" className="cbp-caption cbp-lightbox"
                        data-title="Remind~Me Widget<br>by Tiberiu Neamu">
                        <div className="cbp-caption-defaultWrap">
                            <img src="/ad-agency/img/work6.jpg" alt="work">
                        </div>
                        <div className="cbp-caption-activeWrap">
                            <div className="cbp-l-caption-alignCenter">
                                <div className="cbp-l-caption-body">
                                   
                                    <div className="cbp-l-caption-title">Digital art works</div>
                                    <span className="work-icon">
                                        <i className="fa fa-arrow-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div> -->
<!-- 
                <div className="cbp-item web-designs seo">
                    <a href="/ad-agency/img/work4.jpg" className="cbp-caption cbp-lightbox"
                        data-title="Seemple* Music<br>by Tiberiu Neamu">
                        <div className="cbp-caption-defaultWrap">
                            <img src="/ad-agency/img/work4.jpg" alt="work">
                        </div>
                        <div className="cbp-caption-activeWrap">
                            <div className="cbp-l-caption-alignCenter">
                                <div className="cbp-l-caption-body">
                                   
                                    <div className="cbp-l-caption-title">Photography</div>
                                    <span className="work-icon">
                                        <i className="fa fa-arrow-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div> -->
                <!-- <div className="cbp-item web-designs marketing">
                    <a href="/ad-agency/img/work5.jpg" className="cbp-caption cbp-lightbox"
                        data-title="iDevices<br>by Tiberiu Neamu">
                        <div className="cbp-caption-defaultWrap">
                            <img src="/ad-agency/img/work5.jpg" alt="work">
                        </div>
                        <div className="cbp-caption-activeWrap">
                            <div className="cbp-l-caption-alignCenter">
                                <div className="cbp-l-caption-body">
                                   
                                    <div className="cbp-l-caption-title">Modern workspace</div>
                                    <span className="work-icon">
                                        <i className="fa fa-arrow-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div> --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
