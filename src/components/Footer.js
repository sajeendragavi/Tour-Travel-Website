import "./FooterStyles.css"

const Footer = () => {
    return(
        <div className="footer">
            

            <div className="top">
                <div>
                    <h1>Rus Cey Tours</h1>
                    <p>Connecting cultures, Discovering beauty</p>
                </div>

                <div>
                    <a href="/https://www.facebook.com/profile.php?id=61569028637347&mibextid=LQQJ4d">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>

                    <a href="/https://www.instagram.com/ruscey_tours?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>

                    <a href="/">
                        <i className="fa-brands fa-telegram"></i>
                    </a>

                    <a href="/">
                        <i className="fa-brands fa-vk"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>

                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>  
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Telegram</a>
                </div>

                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact us</a>
                    
                </div>

                <div>
                    <h4>Other</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                    
                </div>  

            </div>

        </div>

    )
}
export default Footer;