import React, { Fragment } from "react";

function Index() {
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
                <div className="banner full-height" id="slide1">
                    <div className="kratka">
                        <h1>Historia kalkulatora</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere exercitationem nulla asperiores voluptatem, culpa at enim doloribus maiores debitis molestias dicta distinctio, aspernatur perspiciatis libero commodi repellat velit dolor.</p>
                    </div>
                </div>
                <div className="desc full-height" id="slide2">
                    <div className="photo">Photo</div>
                    <div className="desc">Description</div>
                </div>
                <div className="paralax full-height" id="slide3">
                    <div className="kratka">
                        <h1>GIT</h1>
                        <p>System kontroli wersji jak został wykorzystany w projekcie to GIT.
                            Wykorzystanie tego oprogramowania pozwala man łatwy sposób kontrolować pracę nad projektem.
                            Dodatkowo GIT cechują elastyczność, bezpieczeństwo, wydajność i funkcjonalność
                            Platforma na której przetrzymywane jest repozytorum to github. </p>
                        <a href="https://github.com/teresakramek?tab=repositories" target="_blank"><i className="fa-brands fa-square-github"></i>Link</a>
                    </div>
                </div>
                <div className="tools_and_technologies" id="slide4">
                    <h1>Wykorzystane narzędzia i technologie</h1>
                    <ul className="icons">
                        <li><a href="https://react.dev/" target="_blank"><i className="fa-brands fa-react"></i></a></li>
                        <li><a href="https://dev.w3.org/html5/spec-LC/" target="_blank"><i className="fa-brands fa-html5"></i></a></li>
                        <li><a href="https://sass-lang.com/" target="_blank"><i className="fa-brands fa-sass"></i></a></li>
                        <li><a href="https://github.com/" target="_blank"><i className="fa-brands fa-square-github"></i></a></li>
                        <li><a href="https://react.dev/" target="_blank"><i className="fa-brands fa-trello"></i></a></li>
                        <li><a href="https://trello.com/home" target="_blank"><i className="fa-solid fa-font-awesome"></i></a></li>
                        <li><a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank"><i className="fa-brands fa-css3-alt"></i></a></li>
                    </ul>
                </div>
                <div className="footer">
                    <div className="inside_footer">Project by Teresa Kramek</div>
                </div>
            </div>
        </Fragment>
    )
}

export default Index;