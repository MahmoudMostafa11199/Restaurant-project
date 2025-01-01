'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';
import FramerAnimated from './FramerAnimated';

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container py-5">
        <div className="portfolio-area my-5">
          <FramerAnimated direction="up">
            <ul
              className="nav nav-pills justify-content-center mb-5"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-All-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-All"
                  type="button"
                  role="tab"
                  aria-controls="pills-All"
                  aria-selected="true"
                >
                  All Categories
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-Sandwiches-tab  "
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Sandwiches"
                  type="button"
                  role="tab"
                  aria-controls="pills-Sandwiches"
                  aria-selected="false"
                >
                  Sandwiches
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-Snack-tab  "
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Snack"
                  type="button"
                  role="tab"
                  aria-controls="pills-Snack"
                  aria-selected="false"
                >
                  Snack foods
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-Fast-tab  "
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Fast"
                  type="button"
                  role="tab"
                  aria-controls="pills-Fast"
                  aria-selected="false"
                >
                  Fast food
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-Noodles-tab  "
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Noodles"
                  type="button"
                  role="tab"
                  aria-controls="pills-Noodles"
                  aria-selected="false"
                >
                  Noodles
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-Snack-tab  "
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Snack"
                  type="button"
                  role="tab"
                  aria-controls="pills-Snack"
                  aria-selected="false"
                >
                  Snack foods
                </button>
              </li>
            </ul>
          </FramerAnimated>

          <FramerAnimated direction="up">
            <div className="tab-content " id="pills-tabContent">
              <div
                className="tab-pane fade show active "
                id="pills-All"
                role="tabpanel"
                aria-labelledby="pills-All-tab"
              >
                <div className="row isotope-container position-relative">
                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="offer-lable">
                        <span>20% Off</span>
                      </div>

                      <div className="food-item">
                        <Image
                          src="/images/menu/fresh-healthy-masala-pasta-2.png"
                          alt="fresh"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail text-center">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Fresh & Healthy Masala Pasta</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/flower-vegetable-dish-parcel-2.png"
                          alt="vegetable"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Flower Vegetable Dish & Parcel</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/potato-vegetable-dish-parcel-2.png"
                          alt="potato"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Potato Vegetable Dish & Parcel</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/fresh-healthy-masala-salad-2.png"
                          alt="salad"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Fresh & Healthy Masala Pasta</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/dal-tadka-yellow-indian-lentils-2.png"
                          alt="tadka"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Dal Tadka Yellow Indian Lentils</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/palak-paneer-saag-paneer-2.png"
                          alt="tadka"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Sautéed Spinach and Potatoes</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/palak-paneer-saag-paneer-2.png"
                          alt="tadka"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Palak Paneer Saag Paneer</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/dal-tadka-yellow-indian-lentils-2.png"
                          alt="tadka"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Dal Tadka Yellow Indian Lentils</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/flower-vegetable-dish-parcel-2.png"
                          alt="vegetable"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Flower Vegetable Dish & Parcel</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/potato-vegetable-dish-parcel-2.png"
                          alt="potato"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Potato Vegetable Dish & Parcel</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/fresh-healthy-masala-salad-2.png"
                          alt="salad"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Fresh & Healthy Masala Pasta</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/dal-tadka-yellow-indian-lentils-2.png"
                          alt="tadka"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Dal Tadka Yellow Indian Lentils</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/palak-paneer-saag-paneer-2.png"
                          alt="tadka"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Sautéed Spinach and Potatoes</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/palak-paneer-saag-paneer-2.png"
                          alt="tadka"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Palak Paneer Saag Paneer</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/dal-tadka-yellow-indian-lentils-2.png"
                          alt="tadka"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Dal Tadka Yellow Indian Lentils</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade show "
                id="pills-Sandwiches"
                role="tabpanel"
                aria-labelledby="pills-Sandwiches-tab"
              >
                <div className="row isotope-container position-relative">
                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="offer-lable">
                        <span>20% Off</span>
                      </div>

                      <div className="food-item">
                        <Image
                          src="/images/menu/fresh-healthy-masala-pasta-2.png"
                          alt="fresh"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail text-center">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Fresh & Healthy Masala Pasta</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/flower-vegetable-dish-parcel-2.png"
                          alt="vegetable"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Flower Vegetable Dish & Parcel</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/potato-vegetable-dish-parcel-2.png"
                          alt="potato"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Potato Vegetable Dish & Parcel</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/fresh-healthy-masala-salad-2.png"
                          alt="salad"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Fresh & Healthy Masala Pasta</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade show "
                id="pills-Snack"
                role="tabpanel"
                aria-labelledby="pills-Snack-tab"
              >
                <div className="row isotope-container position-relative">
                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/fresh-healthy-masala-pasta-2.png"
                          alt="fresh"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail text-center">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Fresh & Healthy Masala Pasta</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/flower-vegetable-dish-parcel-2.png"
                          alt="vegetable"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Flower Vegetable Dish & Parcel</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/potato-vegetable-dish-parcel-2.png"
                          alt="potato"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Potato Vegetable Dish & Parcel</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/fresh-healthy-masala-salad-2.png"
                          alt="salad"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Fresh & Healthy Masala Pasta</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/potato-vegetable-dish-parcel-2.png"
                          alt="potato"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Potato Vegetable Dish & Parcel</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade show "
                id="pills-Fast"
                role="tabpanel"
                aria-labelledby="pills-Fast-tab"
              >
                <div className="row isotope-container position-relative">
                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/palak-paneer-saag-paneer-2.png"
                          alt="tadka"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Sautéed Spinach and Potatoes</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/dal-tadka-yellow-indian-lentils-2.png"
                          alt="tadka"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Dal Tadka Yellow Indian Lentils</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/potato-vegetable-dish-parcel-2.png"
                          alt="potato"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Potato Vegetable Dish & Parcel</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade show "
                id="pills-Noodles"
                role="tabpanel"
                aria-labelledby="pills-Noodles-tab"
              >
                <div className="row isotope-container position-relative">
                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/potato-vegetable-dish-parcel-2.png"
                          alt="potato"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Potato Vegetable Dish & Parcel</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/fresh-healthy-masala-salad-2.png"
                          alt="salad"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Fresh & Healthy Masala Pasta</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-6 portfolio-item overflow-hidden">
                    <div className="item-box-two d-flex position-relative overflow-hidden">
                      <div className="food-item">
                        <Image
                          src="/images/menu/dal-tadka-yellow-indian-lentils-2.png"
                          alt="tadka"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="item-detail">
                        <p>
                          4.5 <FontAwesomeIcon icon={faStar} />
                        </p>

                        <h3>Dal Tadka Yellow Indian Lentils</h3>
                        <div className="d-flex price justify-content-between align-items-center">
                          <h4>$20.50</h4>
                          <div className="plus-bg">
                            <Link href="/menu">
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="icon-plus"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FramerAnimated>

          <div className="text-center">
            <Button btnType="secondary" linkTo="menu">
              View More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
