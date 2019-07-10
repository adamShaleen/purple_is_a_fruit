import React from "react";
import Icon from "../../components/Icon/Icon";
import "./Footer.css";

const Footer = () => {
    return (
            <section id="social_icons">
                <Icon url="https://github.com/adamShaleen" icon_class="fab fa-github-alt" />
                <Icon url="https://www.instagram.com/adam_shaleen/" icon_class="fab fa-instagram" />
                <Icon url="https://www.linkedin.com/in/adamshaleen/" icon_class="fab fa-linkedin" />
            </section>
    )
}

export default Footer;