import React from 'react'
import Aux from '../../hoc/Aux'

const Footer = (props) => (
    <Aux>
        <footer id="footer">
            <div className="container">
                <h3>fortune</h3>

                {/*
                <div className="social-links">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
                */}

                <div className="copyright">
                    &copy; Copyright <strong><span>Selecao</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    {/*
                    <!-- All the links in the footer should remain intact. -->
                    <!-- You can delete the links only if you purchased the pro version. -->
                    <!-- Licensing information: https://bootstrapmade.com/license/ -->
                    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/selecao-bootstrap-template/ -->
                    */}
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
            </div>
        </footer>

    </Aux>
)

export default Footer
