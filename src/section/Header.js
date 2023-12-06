import React, { Fragment } from "react";

function Header() {
    return (
        <Fragment>
            <div>
                <div className="header">
                    <div className="logo">
                        <a href="https://merito.pl">
                            <div className="logo"><img src="https://www.merito.pl/sites/wsb/files/animLogo.gif" /></div>
                        </a>
                    </div>
                    <div className="nav">
                        <ul>
                            <li><a href="#slide1">Historia kalkulatora</a></li>
                            <li><a href="#slide2">Kalkulator</a></li>
                            <li><a href="#slide3">Repozytorium</a></li>
                            <li><a href="#slide4">Narzędzia i technologie</a></li>
                        </ul>

                    </div>
                    <div className="social-media">
                        <a href="https://www.facebook.com/UczelnieMerito/" target="_blank">
                            <i className="fa-brands fa-square-facebook"></i>
                        </a>
                        <a href="https://www.youtube.com/@uczelnie_merito" target="_blank">
                            <i className="fa-brands fa-square-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;