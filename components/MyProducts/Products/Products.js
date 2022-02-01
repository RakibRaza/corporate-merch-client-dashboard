import { Accordion } from "react-bootstrap";

const Product = () => {
  return (
    <section className="my-product">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Accordion defaultActiveKey="0" className="my-product__accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span className="accordion-button-text">
                    Team New York - HR
                    <span>(04)</span>
                  </span>
                  <span className="accordion-button-bar"></span>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="product__item">
                        <div className="product__item__top">
                          <h2>#CM101</h2>
                          <a href="#">
                            <img src="/images/icons/bag-2.svg" alt="" />
                            <span>Reorder</span>
                          </a>
                        </div>
                        <div className="product__item__img">
                          <img src="/images/product/tshirt01.png" alt="product-img" />
                        </div>
                        <h2 className="product__item__name">Aenean nec suscip T-Shirt New 2021 Vol 3</h2>
                        <ul className="product__item__info">
                          <li>
                            <div className="product__item__gender">
                              Gender: <select className="select-gender">
                                <option value="male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                          </li>
                          <li>
                            <div className="product__item__color">
                              Color: <span className="color bg-amber"></span>
                            </div>
                          </li>
                        </ul>
                        <div className="inventory">
                          <div className="single-size">
                            <div className="size-box">
                              s
                            </div>
                            <span>10</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              m
                            </div>
                            <span>22</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              l
                            </div>
                            <span>42</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              xl
                            </div>
                            <span>32</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              2xl
                            </div>
                            <span>12</span>
                          </div>
                        </div>
                        {/* <ul className="product__item__size">
                          <li><a className="active" href="#">S</a></li>
                          <li><a href="#">M</a></li>
                          <li><a href="#">L</a></li>
                          <li><a href="#">XL</a></li>
                          <li><a href="#">2XL</a></li>
                        </ul> */}
                        <div className="product__item__button">
                          <a className="btn btn-cart" href="#">
                            <i className="fa fa-plus"></i>
                            <span>Add Item</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="product__item">
                        <div className="product__item__top">
                          <h2>#CM101</h2>
                          <a href="#">
                            <img src="/images/icons/bag-2.svg" alt="" />
                            <span>Reorder</span>
                          </a>
                        </div>
                        <div className="product__item__img">
                          <img src="/images/product/tshirt02.png" alt="product-img" />
                        </div>
                        <h2 className="product__item__name">Aenean nec suscip T-Shirt New 2021 Vol 3</h2>
                        <ul className="product__item__info">
                          <li>
                            <div className="product__item__gender">
                              Gender: <select className="select-gender">
                                <option value="male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                          </li>
                          <li>
                            <div className="product__item__color">
                              Color: <span className="color bg-cloud"></span>
                            </div>
                          </li>
                        </ul>
                        <div className="inventory">
                          <div className="single-size">
                            <div className="size-box">
                              s
                            </div>
                            <span>10</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              m
                            </div>
                            <span>22</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              l
                            </div>
                            <span>42</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              xl
                            </div>
                            <span>32</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              2xl
                            </div>
                            <span>12</span>
                          </div>
                        </div>
                        <div className="product__item__button">
                          <a className="btn btn-cart" href="#">
                            <i className="fa fa-plus"></i>
                            <span>Add Item</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="product__item">
                        <div className="product__item__top">
                          <h2>#CM101</h2>
                          <a href="#">
                            <img src="/images/icons/bag-2.svg" alt="" />
                            <span>Reorder</span>
                          </a>
                        </div>
                        <div className="product__item__img">
                          <img src="/images/product/tshirt03.png" alt="product-img" />
                        </div>
                        <h2 className="product__item__name">Aenean nec suscip T-Shirt New 2021 Vol 3</h2>
                        <ul className="product__item__info">
                          <li>
                            <div className="product__item__gender">
                              Gender: <select className="select-gender">
                                <option value="male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                          </li>
                          <li>
                            <div className="product__item__color">
                              Color: <span className="color bg-mine"></span>
                            </div>
                          </li>
                        </ul>
                        <div className="inventory">
                          <div className="single-size">
                            <div className="size-box">
                              s
                            </div>
                            <span>10</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              m
                            </div>
                            <span>22</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              l
                            </div>
                            <span>42</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              xl
                            </div>
                            <span>32</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              2xl
                            </div>
                            <span>12</span>
                          </div>
                        </div>
                        <div className="product__item__button">
                          <a className="btn btn-cart" href="#">
                            <i className="fa fa-plus"></i>
                            <span>Add Item</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="product__item">
                        <div className="product__item__top">
                          <h2>#CM101</h2>
                          <a href="#">
                            <img src="/images/icons/bag-2.svg" alt="" />
                            <span>Reorder</span>
                          </a>
                        </div>
                        <div className="product__item__img">
                          <img src="/images/product/tshirt04.png" alt="product-img" />
                        </div>
                        <h2 className="product__item__name">Aenean nec suscip T-Shirt New 2021 Vol 3</h2>
                        <ul className="product__item__info">
                          <li>
                            <div className="product__item__gender">
                              Gender: <select className="select-gender">
                                <option value="male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                          </li>
                          <li>
                            <div className="product__item__color">
                              Color: <span className="color bg-tundora"></span>
                            </div>
                          </li>
                        </ul>
                        <div className="inventory">
                          <div className="single-size">
                            <div className="size-box">
                              s
                            </div>
                            <span>10</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              m
                            </div>
                            <span>22</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              l
                            </div>
                            <span>42</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              xl
                            </div>
                            <span>32</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              2xl
                            </div>
                            <span>12</span>
                          </div>
                        </div>
                        <div className="product__item__button">
                          <a className="btn btn-cart" href="#">
                            <i className="fa fa-plus"></i>
                            <span>Add Item</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <span className="accordion-button-text">
                    Team New York - HR
                    <span>(04)</span>
                  </span>
                  <span className="accordion-button-bar"></span>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="product__item">
                        <div className="product__item__top">
                          <h2>#CM101</h2>
                          <a href="#">
                            <img src="/images/icons/bag-2.svg" alt="" />
                            <span>Reorder</span>
                          </a>
                        </div>
                        <div className="product__item__img">
                          <img src="/images/product/tshirt01.png" alt="product-img" />
                        </div>
                        <h2 className="product__item__name">Aenean nec suscip T-Shirt New 2021 Vol 3</h2>
                        <ul className="product__item__info">
                          <li>
                            <div className="product__item__gender">
                              Gender: <select className="select-gender">
                                <option value="male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                          </li>
                          <li>
                            <div className="product__item__color">
                              Color: <span className="color bg-amber"></span>
                            </div>
                          </li>
                        </ul>
                        <div className="inventory">
                          <div className="single-size">
                            <div className="size-box">
                              s
                            </div>
                            <span>10</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              m
                            </div>
                            <span>22</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              l
                            </div>
                            <span>42</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              xl
                            </div>
                            <span>32</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              2xl
                            </div>
                            <span>12</span>
                          </div>
                        </div>
                        <div className="product__item__button">
                          <a className="btn btn-cart" href="#">
                            <i className="fa fa-plus"></i>
                            <span>Add Item</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="product__item">
                        <div className="product__item__top">
                          <h2>#CM101</h2>
                          <a href="#">
                            <img src="/images/icons/bag-2.svg" alt="" />
                            <span>Reorder</span>
                          </a>
                        </div>
                        <div className="product__item__img">
                          <img src="/images/product/tshirt02.png" alt="product-img" />
                        </div>
                        <h2 className="product__item__name">Aenean nec suscip T-Shirt New 2021 Vol 3</h2>
                        <ul className="product__item__info">
                          <li>
                            <div className="product__item__gender">
                              Gender: <select className="select-gender">
                                <option value="male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                          </li>
                          <li>
                            <div className="product__item__color">
                              Color: <span className="color bg-cloud"></span>
                            </div>
                          </li>
                        </ul>
                        <div className="inventory">
                          <div className="single-size">
                            <div className="size-box">
                              s
                            </div>
                            <span>10</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              m
                            </div>
                            <span>22</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              l
                            </div>
                            <span>42</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              xl
                            </div>
                            <span>32</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              2xl
                            </div>
                            <span>12</span>
                          </div>
                        </div>
                        <div className="product__item__button">
                          <a className="btn btn-cart" href="#">
                            <i className="fa fa-plus"></i>
                            <span>Add Item</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="product__item">
                        <div className="product__item__top">
                          <h2>#CM101</h2>
                          <a href="#">
                            <img src="/images/icons/bag-2.svg" alt="" />
                            <span>Reorder</span>
                          </a>
                        </div>
                        <div className="product__item__img">
                          <img src="/images/product/tshirt03.png" alt="product-img" />
                        </div>
                        <h2 className="product__item__name">Aenean nec suscip T-Shirt New 2021 Vol 3</h2>
                        <ul className="product__item__info">
                          <li>
                            <div className="product__item__gender">
                              Gender: <select className="select-gender">
                                <option value="male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                          </li>
                          <li>
                            <div className="product__item__color">
                              Color: <span className="color bg-mine"></span>
                            </div>
                          </li>
                        </ul>
                        <div className="inventory">
                          <div className="single-size">
                            <div className="size-box">
                              s
                            </div>
                            <span>10</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              m
                            </div>
                            <span>22</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              l
                            </div>
                            <span>42</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              xl
                            </div>
                            <span>32</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              2xl
                            </div>
                            <span>12</span>
                          </div>
                        </div>
                        <div className="product__item__button">
                          <a className="btn btn-cart" href="#">
                            <i className="fa fa-plus"></i>
                            <span>Add Item</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="product__item">
                        <div className="product__item__top">
                          <h2>#CM101</h2>
                          <a href="#">
                            <img src="/images/icons/bag-2.svg" alt="" />
                            <span>Reorder</span>
                          </a>
                        </div>
                        <div className="product__item__img">
                          <img src="/images/product/tshirt04.png" alt="product-img" />
                        </div>
                        <h2 className="product__item__name">Aenean nec suscip T-Shirt New 2021 Vol 3</h2>
                        <ul className="product__item__info">
                          <li>
                            <div className="product__item__gender">
                              Gender: <select className="select-gender">
                                <option value="male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                          </li>
                          <li>
                            <div className="product__item__color">
                              Color: <span className="color bg-tundora"></span>
                            </div>
                          </li>
                        </ul>
                        <div className="inventory">
                          <div className="single-size">
                            <div className="size-box">
                              s
                            </div>
                            <span>10</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              m
                            </div>
                            <span>22</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              l
                            </div>
                            <span>42</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              xl
                            </div>
                            <span>32</span>
                          </div>
                          <div className="single-size">
                            <div className="size-box">
                              2xl
                            </div>
                            <span>12</span>
                          </div>
                        </div>
                        <div className="product__item__button">
                          <a className="btn btn-cart" href="#">
                            <i className="fa fa-plus"></i>
                            <span>Add Item</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Product;
