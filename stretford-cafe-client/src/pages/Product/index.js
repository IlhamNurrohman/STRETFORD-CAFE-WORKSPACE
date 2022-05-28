import React, { Component } from "react";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import mothersImg from "../../assets/img/image 46.png";
import sundayImg from "../../assets/img/image 43.png";
import halloweenImg from "../../assets/img/image 45.png";
import veggieImg from "../../assets/img/image 2.png";
import hazulnutImg from "../../assets/img/image 22 (1).png";
import summerImg from "../../assets/img/image 2 (3).png";
import creamImg from "../../assets/img/image 22 (2).png";
import drumImg from "../../assets/img/image 23.png";
import saltyImg from "../../assets/img/image 2 (2).png";


import Badge from 'react-bootstrap/Badge';
import "./Product.css";

export default class Product extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row" style={{ height: "100%", maxWidth: "100%", paddingLeft: "5%" }}>
                        <div className="col-sm-4" style={{ width: "40%" }}>
                            <h3 className="user-profile" style={{ color: "rgba(106, 64, 41, 1)", fontFamily: "Rubik", paddingLeft: "19%" }}>Promo Today</h3>
                            <h6 className="desc"
                                style={{ color: "black", fontSize: "14px", fontFamily: "Rubik", paddingTop: "5%", paddingLeft: "10%" }}>
                                Coupons will be updated every weeks.</h6>
                            <h6 className="desc"
                                style={{ color: "black", fontSize: "14px", fontFamily: "Rubik", paddingBottom: "5%", paddingLeft: "25%" }}>
                                Check them out!</h6>
                            <div className="card mb-3" style={{ maxWidth: "80%", background: "rgba(136, 183, 136, 1)" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={mothersImg} className="img-fluid rounded-start" style={{ paddingTop: "10%" }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h6 className="card-text" style={{ fontFamily: "Rubik" }}>HAPPY MOTHER’S DAY!</h6>
                                            <p className="card-text" style={{ fontFamily: "Rubik", fontSize: "14px" }}>Get one of our
                                                favorite menu for
                                                free!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3" style={{ maxWidth: "80%", background: "rgba(245, 195, 97, 1)" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={sundayImg} className="img-fluid rounded-start" style={{ paddingTop: "8%" }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h6 className="card-text" style={{ fontFamily: "Rubik", paddingTop: "2%" }}>Get a cup of coffee
                                                for free on sunday morning</h6>
                                            <p className="card-text" style={{ fontFamily: "Rubik", fontSize: "14px" }}>Only at 7 to 9 AM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3" style={{ maxWidth: "80%", background: "rgba(136, 183, 136, 1)" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={mothersImg} className="img-fluid rounded-start" style={{ paddingTop: "8%" }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h6 className="card-text" style={{ fontFamily: "Rubik" }}>HAPPY MOTHER’S DAY!</h6>
                                            <p className="card-text" style={{ fontFamily: "Rubik", fontSize: "14px" }}>Get one of our
                                                favorite menu for
                                                free!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3" style={{ maxWidth: "80%", background: "rgba(197, 147, 120, 1)" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={halloweenImg} className="img-fluid rounded-start" style={{ paddingTop: "8%" }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h6 className="card-text" style={{ fontFamily: "Rubik" }}>HAPPY HALLOWEEN!</h6>
                                            <p className="card-text" style={{ fontFamily: "Rubik", fontSize: "14px" }}>Do you like chicken
                                                wings? Get 1 free only if you buy pinky promise</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn btn-lg"
                                style={{ width: "80%", marginBottom: "10%", background: "rgba(106, 64, 41, 1)", color: "white", borderRadius: "20px" }}>Apply Coupon</button>
                            <h6 style={{ fontFamily: "Rubik", paddingTop: "10%" }}>Terms and Condition</h6>
                            <p style={{ fontFamily: "Rubik" }}>1. You can only apply 1 coupon per day
                                <br />2. It only for dine in
                                <br />3. Buy 1 get 1 only for new user
                                <br />4. Should make member card to apply coupon</p>
                        </div>
                        <div className="col-sm-8" style={{ borderLeft: "1px rgba(159, 159, 159, 1)", width: "60%" }}>
                            <nav className="nav" style={{ paddingLeft: "10%", width: "100%" }}>
                                <a className="nav-link active" aria-current="page" href="#"
                                    style={{ color: "rgba(106, 64, 41, 1)", borderBottom: "2px", solid: "rgba(106, 64, 41, 1)" }}>Favorite &
                                    Promo</a>
                                <a className="nav-link disabled" href="#">Coffee</a>
                                <a className="nav-link disabled" href="#">Non Coffee</a>
                                <a className="nav-link disabled">Foods</a>
                                <a className="nav-link disabled">Add-on</a>
                            </nav>
                            <div className="row row-cols-1 row-cols-md-4 g-3" style={{ paddingTop: "10%", maxWidth: "600px" }}>
                                <div className="col" style={{ paddingLeft: "3%" }}>
                                    <div className="card"
                                        style={{ borderRadius: "30px", width: "126px", height: "212.41px", boxShadow: "0px 30px 60px", color: "rgba(57, 57, 57, 0.1)" }}>
                                        <img src={veggieImg} className="" style={{ borderRadius: "100px", width: "70%", marginTop: "-30%", marginLeft: "15%" }}>
                                            {/* <Badge bg="secondary">10%
                                            <span classNameName="visually-hidden">unread messages</span>
                                            </Badge> */}
                                        </img>
                                        <div className="card-body">
                                            <h5 className="card-title">Veggie tomato mix</h5>
                                            <p className="card-text"
                                                style={{ textAlign: "center", fontFamily: "Rubik", color: "rgba(106, 64, 41, 1)" }}>IDR
                                                34.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" style={{ paddingLeft: "6%" }}>
                                    <div className="card"
                                        style={{ borderRadius: "30px", width: "126px", height: "212.41px", boxShadow: "0px 30px 60px rgba(57, 57, 57, 0.1)" }}>
                                        <img src={hazulnutImg} className="" style={{ borderRadius: "100px", width: "70%", marginTop: "-30%", marginLeft: "15%" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">Hazelnut Latte</h5>
                                            <p className="card-text"
                                                style={{ textAlign: "center", fontFamily: "Rubik", color: "rgba(106, 64, 41, 1)", paddingTop: "35%" }}>
                                                IDR 25.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" style={{ paddingLeft: "9%" }}>
                                    <div className="card"
                                        style={{ borderRadius: "30px", width: "126px", height: "212.41px", boxShadow: "0px 30px 60px rgba(57, 57, 57, 0.1)" }}>
                                        <img src={summerImg} className="" style={{ borderRadius: "100px", width: "70%", marginTop: "-30%", marginLeft: "15%" }}></img>
                                        <div className="card-body">
                                            <h5 className="card-title">Summer fried rice</h5>
                                            <p className="card-text"
                                                style={{ textAlign: "center", fontFamily: "Rubik", color: "rgba(106, 64, 41, 1)", paddingTop: "35%" }}>
                                                IDR 32.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" style={{ paddingLeft: "12%" }}>
                                    <div className="card"
                                        style={{ borderRadius: "30px", width: "126px", height: "212.41px", boxShadow: "0px 30px 60px rgba(57, 57, 57, 0.1)" }}>
                                        <img src={creamImg} className="" style={{ borderRadius: "100px", width: "70%", marginTop: "-30%", marginLeft: "15%" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">Creamy Ice Latte</h5>
                                            <p className="card-text"
                                                style={{ paddingTop: "30%", textAlign: "center", fontFamily: "Rubik", color: "rgba(106, 64, 41, 1)" }}>
                                                IDR 27.000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-cols-1 row-cols-md-4 g-3" style={{ paddingTop: "10%", maxWidth: "600px" }}>
                                <div className="col" style={{ paddingLeft: "3%" }}>
                                    <div className="card"
                                        style={{ borderRadius: "30px", width: "126px", height: "212.41px", boxShadow: "0px 30px 60px rgba(57, 57, 57, 0.1)" }}>
                                        <img src={drumImg} className="" style={{ borderRadius: "100px", width: "70%", marginTop: "-30%", marginLeft: "15%" }}></img>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ fontFamily: "Rubik" }}>Drum <br />Sticks</h5>
                                            <p className="card-text"
                                                style={{ paddingTop: "30%", textAlign: "center", fontFamily: "Rubik", color: "rgba(106, 64, 41, 1)" }}>
                                                IDR
                                                30.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" style={{ paddingLeft: "6%" }}>
                                    <div className="card"
                                        style={{ borderRadius: "30px", width: "126px", height: "212.41px", boxShadow: "0px 30px 60px rgba(57, 57, 57, 0.1)" }}>
                                        <img src={saltyImg} className="" style={{ borderRadius: "100px", width: "70%", marginTop: "-30%", marginLeft: "15%" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">Salty<br /> Rice</h5>
                                            <p className="card-text"
                                                style={{ paddingTop: "30%", textAlign: "center", fontFamily: "Rubik", color: "rgba(106, 64, 41, 1)" }}>
                                                IDR
                                                25.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" style={{ paddingLeft: "9%" }}>
                                    <div className="card"
                                        style={{ borderRadius: "30px", width: "126px", height: "212.41px", boxShadow: "0px 30px 60px rgba(57, 57, 57, 0.1)" }}>
                                        <img src={summerImg} className="" style={{ borderRadius: "100px", width: "70%", marginTop: "-30%", marginLeft: "15%" }}></img>
                                        <div className="card-body">
                                            <h5 className="card-title">Summer fried rice</h5>
                                            <p className="card-text"
                                                style={{ paddingTop: "30%", textAlign: "center", fontFamily: "Rubik", color: "rgba(106, 64, 41, 1)" }}>
                                                IDR
                                                32.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" style={{ paddingLeft: "12%" }}>
                                    <div className="card"
                                        style={{ borderRadius: "30px", width: "126px", height: "212.41px", boxShadow: "0px 30px 60px rgba(57, 57, 57, 0.1)" }}>
                                        <img src={creamImg} className="" style={{ borderRadius: "100px", width: "70%", marginTop: "-30%", marginLeft: "15%" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">Creamy Ice Latte</h5>
                                            <p className="card-text"
                                                style={{ paddingTop: "30%", textAlign: "center", fontFamily: "Rubik", color: "rgba(106, 64, 41, 1)" }}>
                                                IDR 27.000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-cols-1 row-cols-md-4 g-3" style={{ paddingTop: "10%", maxWidth: "600px" }}>
                                <div className="col" style={{ paddingLeft: "3%" }}>
                                    <div className="card"
                                        style={{ borderRadius: "30px", width: "126px", height: "212.41px", boxShadow: "0px 30px 60px", color: "rgba(57, 57, 57, 0.1)" }}>
                                        <img src={veggieImg} className="" style={{ borderRadius: "100px", width: "70%", marginTop: "-30%", marginLeft: "15%" }}>
                                            {/* <Badge bg="secondary">10%
                                            <span classNameName="visually-hidden">unread messages</span>
                                            </Badge> */}
                                        </img>
                                        <div className="card-body">
                                            <h5 className="card-title">Veggie tomato mix</h5>
                                            <p className="card-text"
                                                style={{ textAlign: "center", fontFamily: "Rubik", color: "rgba(106, 64, 41, 1)" }}>IDR
                                                34.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" style={{ paddingLeft: "6%" }}>
                                    <div className="card"
                                        style={{ borderRadius: "30px", width: "126px", height: "212.41px", boxShadow: "0px 30px 60px rgba(57, 57, 57, 0.1)" }}>
                                        <img src={hazulnutImg} className="" style={{ borderRadius: "100px", width: "70%", marginTop: "-30%", marginLeft: "15%" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">Hazelnut Latte</h5>
                                            <p className="card-text"
                                                style={{ textAlign: "center", fontFamily: "Rubik", color: "rgba(106, 64, 41, 1)", paddingTop: "35%" }}>
                                                IDR 25.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" style={{ paddingLeft: "9%" }}>
                                    <div className="card"
                                        style={{ borderRadius: "30px", width: "126px", height: "212.41px", boxShadow: "0px 30px 60px rgba(57, 57, 57, 0.1)" }}>
                                        <img src={summerImg} className="" style={{ borderRadius: "100px", width: "70%", marginTop: "-30%", marginLeft: "15%" }}></img>
                                        <div className="card-body">
                                            <h5 className="card-title">Summer fried rice</h5>
                                            <p className="card-text"
                                                style={{ textAlign: "center", fontFamily: "Rubik", color: "rgba(106, 64, 41, 1)", paddingTop: "35%" }}>
                                                IDR 32.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" style={{ paddingLeft: "12%" }}>
                                    <div className="card"
                                        style={{ borderRadius: "30px", width: "126px", height: "212.41px", boxShadow: "0px 30px 60px rgba(57, 57, 57, 0.1)" }}>
                                        <img src={creamImg} className="" style={{ borderRadius: "100px", width: "70%", marginTop: "-30%", marginLeft: "15%" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">Creamy Ice Latte</h5>
                                            <p className="card-text"
                                                style={{ paddingTop: "30%", textAlign: "center", fontFamily: "Rubik", color: "rgba(106, 64, 41, 1)" }}>
                                                IDR 27.000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}