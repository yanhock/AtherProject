import React from "react";

import './ProductBar.css';

import { Link } from "react-router-dom";

import "boxicons";



function ProductBar() {
    function activeMenuBar(){
        let body = document.querySelector("body");
        let btnMenu = document.querySelector("#btn-menu");
        let cancelBtn = document.querySelector("#cancel-btn");
        let pointReoBox = document.querySelector(".back-pointReo-sys-box");

        body.classList.toggle("bodyScrollNone");

        btnMenu.classList.toggle("btnMenuNone");    
        cancelBtn.classList.toggle("cancelBtnActive");
        pointReoBox.classList.toggle("pointReoBoxActive");
    }
    return(
        <div className="products">
            <div className="mask-box">
                <span>Frontend Mentor</span>
                <span>Freedback Board</span>
                <div className="menu-box" onClick={ activeMenuBar }>
                    <box-icon id="btn-menu" name='menu' color="#ffffff" size="30px" ></box-icon>
                    <box-icon id="cancel-btn" name='x' color="#ffffff" size="30px"></box-icon>
                </div>
            </div>
            <div className="back-pointReo-sys-box">
              <div className="resSCh-PR-box">
                <div className="sch-preview-box">
                    <div className="line">
                        <Link to="/">
                            <div className="beta-currents-box">
                                <span className="beta-currents-v">All</span>
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="beta-currents-box">
                                <span className="beta-currents-v">UI</span>
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="beta-currents-box">
                                <span className="beta-currents-v">UX</span>
                            </div>
                        </Link>
                    </div>
                    <div className="line">
                        <Link to="/">
                            <div className="beta-currents-box">
                                <span className="beta-currents-v">Enhancement</span>
                            </div>
                        </Link>
                        <Link to="/">
                            <div className="beta-currents-box">
                                <span className="beta-currents-v">Bug</span>
                            </div>
                        </Link>
                    </div>
                    <div className="line">
                        <Link to="/">
                            <div className="beta-currents-box">
                                <span className="beta-currents-v">Feature</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="metaPer-data">
                    <div className="sb-line" style={{ margin: "0 0 20px 0" }}>
                        <h3>Roadmap</h3>
                        <Link to="/" className="meta_link">View</Link>
                    </div>
                    <div className="sb-line">
                        <span className="mini-dick">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 10px 0 0" }}>
                                <circle cx="4" cy="4" r="4" fill="#F49F85"/>
                            </svg>
                            Planned
                        </span>
                        <span className="mini-ct">2</span>
                    </div>
                    <div className="sb-line">
                        <span className="mini-dick">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 10px 0 0" }}>
                                <circle cx="4" cy="4" r="4" fill="#AD1FEA"/>
                            </svg>
                            In-Progress
                        </span>
                        <span className="mini-ct">3</span>
                    </div>
                    <div className="sb-line">
                        <span className="mini-dick">
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: "0 10px 0 0" }}>
                                <circle cx="4" cy="4" r="4" fill="#62BCFA"/>
                            </svg>
                            Live
                        </span>
                        <span className="mini-ct">1</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductBar;