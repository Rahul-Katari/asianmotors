const footerHtml = `<div class="footer-top">
                <div class="boxcar-container">
                    <div class="right-box">
                        <div class="top-left wow fadeInUp">
                            <h6 class="title">Join Asian Motors</h6>
                            <div class="text">Receive pricing updates, shopping tips & more!</div>
                        </div>
                        <div class="subscribe-form wow fadeInUp" data-wow-delay="100ms">
                            <form method="post" action="#">
                                <div class="form-group">
                                    <input type="email" name="email" class="email" value=""
                                        placeholder="Your e-mail address" required="">
                                    <button type="button" class="theme-btn btn-style-one hover-light"><span
                                            class="btn-title">Sign Up</span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="widgets-section">
                <div class="boxcar-container">
                    <!-- Footer COlumn -->
                    <div class="footer-column-two ">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <iframe class="w-100 h-100 rounded"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5126382721237!2d78.42766897516495!3d17.387169083499945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974c8699442f%3A0x313ffd283ff2a494!2sASIAN%20MOTORS%20ATTAPUR!5e0!3m2!1sen!2sin!4v1731341219369!5m2!1sen!2sin"
                                    style="border:0; min-height: 225px;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div class="row col-lg-8 mt-md-0 mt-5">
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <div class="footer-widget links-widget wow fadeInUp" data-wow-delay="100ms">
                                        <h4 class="widget-title">Quick Links</h4>
                                        <div class="widget-content">
                                            <ul class="user-links style-two">
                                                <li><a href="#">Home</a></li>
                                                <li><a href="#">Cars</a></li>
                                                <li><a href="#">Blogs</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <div class="footer-widget links-widget wow fadeInUp" data-wow-delay="200ms">
                                        <h4 class="widget-title">Our Brands</h4>
                                        <div class="widget-content">
                                            <ul class="user-links style-two">
                                                <li><a href="#">Aston Martin</a></li>
                                                <li><a href="#">Audi</a></li>
                                                <li><a href="#">Bentley</a></li>
                                                <li><a href="#">BMW</a></li>
                                                <li><a href="#">Bugatti</a></li>
                                                <li><a href="#">Ferrari</a></li>
                                                <li><a href="#">Jaguar</a></li>
                                                <li><a href="#">Lamborghini</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <div class="footer-widget links-widget wow fadeInUp" data-wow-delay="300ms">
                                        <h4 class="widget-title">Vehicles Type</h4>
                                        <div class="widget-content">
                                            <ul class="user-links style-two">
                                                <li><a href="#">Pickup</a></li>
                                                <li><a href="#">Coup</a></li>
                                                <li><a href="#">Family MPV</a></li>
                                                <li><a href="#">Sedan</a></li>
                                                <li><a href="#">SUVs</a></li>
                                                <li><a href="#">Sport Coupe</a></li>
                                                <li><a href="#">Convertible</a></li>
                                                <li><a href="#">Wagon</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <div class="footer-widget social-widget wow fadeInUp" data-wow-delay="400ms">
                                        <div class="widget-content">
                                            <div class="social-icons">
                                                <h6 class="widget-title">Connect With Us</h6>
                                                <div>
                                                    <a href="tel:093910 37686" class="text-white">093910 37686</a>
                                                </div>
                                                <ul>
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--  Footer Bottom -->
            <div class="footer-bottom">
                <div class="boxcar-container">
                    <div class="inner-container">
                        <div class="copyright-text wow fadeInUp">© 2024 asianmotors.com. All rights
                            reserved.</div>

                        <ul class="footer-nav wow fadeInUp" data-wow-delay="200ms">
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Notice</a></li>
                        </ul>
                    </div>
                </div>
            </div>`;
$('onload', function () {
    $('footer').html(footerHtml);
})