const navbarHtml = `<div class="header-inner">
    <div class="inner-container">
        <div class="c-box">
            <div class="logo-inner">
                <div class="logo"><a href="index.html"><img src="images/logo.png" alt="" title="Boxcar"></a></div>
                <div class="layout-search d-none">
                    <div class="search-box"><svg class="icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.29301 1.2876C3.9872 1.2876 1.29431 3.98048 1.29431 7.28631C1.29431 10.5921 3.9872 13.2902 7.29301 13.2902C8.70502 13.2902 10.0036 12.7954 11.03 11.9738L13.5287 14.4712C13.6548 14.5921 13.8232 14.6588 13.9979 14.657C14.1725 14.6552 14.3395 14.5851 14.4631 14.4617C14.5867 14.3382 14.6571 14.1713 14.6591 13.9967C14.6611 13.822 14.5947 13.6535 14.474 13.5272L11.9753 11.0285C12.7976 10.0006 13.293 8.69995 13.293 7.28631C13.293 3.98048 10.5988 1.2876 7.29301 1.2876ZM7.29301 2.62095C9.87824 2.62095 11.9584 4.70108 11.9584 7.28631C11.9584 9.87153 9.87824 11.9569 7.29301 11.9569C4.70778 11.9569 2.62764 9.87153 2.62764 7.28631C2.62764 4.70108 4.70778 2.62095 7.29301 2.62095Z"
                                fill="white" />
                        </svg><input type="search" placeholder="Search Cars eg. Audi Q7" class="show-search" name="name"
                            tabindex="2" value="" aria-required="true" required=""></div>
                    <div class="box-content-search" id="box-content-search">
                        <ul class="box-car-search">
                            <li><a href="car-details.html" class="car-search-item">
                                    <div class="box-img"><img src="images/resource/car-search.jpg" alt="img"></div>
                                    <div class="info">
                                        <p class="name">Audi, Q5 - 2023 C300e AMG Line Night Ed Premium Plus 5dr
                                            9G-Tronic</p><span class="price">$399</span>
                                    </div>
                                </a></li>
                            <li><a href="car-details.html" class="car-search-item">
                                    <div class="box-img"><img src="images/resource/car-search.jpg" alt="img"></div>
                                    <div class="info">
                                        <p class="name">Audi, Q5 - 2023 C300e AMG Line Night Ed Premium Plus 5dr
                                            9G-Tronic</p><span class="price">$399</span>
                                    </div>
                                </a></li>
                            <li><a href="car-details.html" class="car-search-item">
                                    <div class="box-img"><img src="images/resource/car-search.jpg" alt="img"></div>
                                    <div class="info">
                                        <p class="name">Audi, Q5 - 2023 C300e AMG Line Night Ed Premium Plus 5dr
                                            9G-Tronic</p><span class="price">$399</span>
                                    </div>
                                </a></li>
                            <li><a href="car-details.html" class="car-search-item">
                                    <div class="box-img"><img src="images/resource/car-search.jpg" alt="img"></div>
                                    <div class="info">
                                        <p class="name">Audi, Q5 - 2023 C300e AMG Line Night Ed Premium Plus 5dr
                                            9G-Tronic</p><span class="price">$399</span>
                                    </div>
                                </a></li>
                        </ul><a href="car-details.html" class="btn-view-search">View Details <svg width="14"
                                height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3114_6864)">
                                    <path
                                        d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z"
                                        fill="#eb5e21" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3114_6864">
                                        <rect width="14" height="14" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></a>
                    </div>
                </div>
            </div>
            <div class="nav-out-bar">
                <nav class="nav main-menu">
                    <ul class="navigation" id="navbar">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="cars.html">Listed Cars</a></li>
                        <li><a href="#">Sell Your Car</a></li>
                        <li><a href="#">Our Showroom</a></li>
                        <li><a href="#">Finance</a></li>
                        <li><a href="#">Insurance</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
            <div class="right-box">
                <div class="mobile-navigation"><a href="#nav-mobile" title=""><svg width="22" height="11"
                            viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="22" height="2" fill="white"></rect>
                            <rect y="9" width="22" height="2" fill="white"></rect>
                        </svg></a></div>
            </div>
        </div>
    </div>
</div>
<div class="search-popup"><span class="search-back-drop"></span><button class="close-search"><span
            class="fa fa-times"></span></button>
    <div class="search-inner">
        <form method="post" action="https://creativelayers.net/themes/boxcar-html/index.html">
            <div class="form-group"><input type="search" name="search-field" value="" placeholder="Search..."
                    required=""><button type="submit"><i class="fa fa-search"></i></button></div>
        </form>
    </div>
</div>
<div id="nav-mobile"></div>`;

$('onload', function () {
    const navbar = $('header');
    $('header').html(navbarHtml);
    let lastScrollTop = 0;

    $(window).on('scroll', function () {
        const currentScroll = $(this).scrollTop();

        if (currentScroll > lastScrollTop) {
            // User scrolling down - hide the navbar
            navbar.css({ position: 'fixed', backgroundColor: '#fff'});
            navbar.addClass('sticky-nav shadow');
        } if(currentScroll == 0){
            if(window.location.pathname === "/" || window.location.pathname.includes("index")){
                navbar.css({transform: 'translateY(0)', backgroundColor: 'transparent'});
            }
            else{
                navbar.css({backgroundColor: '', })
            }
            navbar.removeClass('sticky-nav shadow');
        }
         else if (currentScroll < lastScrollTop) {
            // User scrolling up - show the navbar
            navbar.css({transform: 'translateY(0)'});

            // navbar.css('transform', 'translateY(0)');
        }

        lastScrollTop = currentScroll;
    });
})