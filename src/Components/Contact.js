import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="six columns">
            <h3 class="light-text">Social Media Links</h3>
            <a href="https://www.linkedin.com/in/vishal-kumar-saw/">LinkedIn Profile</a><br/>
            <a href="https://github.com/vishal-kumar-saw">GitHub Profile</a>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Location</h4>
              <p className="address">
                {city}, {state} {zip}
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
