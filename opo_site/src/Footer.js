import React, { Component } from 'react';

function Footer(props) {
    return (
            <footer className="elegant-color">
                <div className="row justify-content-center" style={{display: "flex"}} >
                    <div className="col-md-2 offset-md-1 footer-col text-center">
                        <img id="footer-logo-full" className="center-block" src="/img/OPO Logo Symbol White.png"/>
                            <p style={{color:"white"}}>The Ottawa Pops Orchestra is a Registered Not-for-Profit Corporation 1017269-3</p>
                    </div>
                    <div className="col-md footer-col text-center">
                        {/*Button trigger modal*/}
                        <button id="subscribe" type="button" className="btn btn-maroon" data-toggle="modal" data-target="#exampleModalCenter">
                            Subscribe to our newsletter <i className="far fa-paper-plane fa-fw"></i>
                        </button>
                        <div className="social-icons text-center">
                            <a href="https://www.facebook.com/ottawapopsorchestra/" className="social" target="_blank"><i className="fab fa-facebook-f fa-2x"></i></a>
                            <a href="https://twitter.com/OttawaPopsOrch" className="social" target="_blank"><i className="fab fa-twitter fa-2x"></i></a>
                            <a href="https://www.instagram.com/ottawapops/" className="social" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
                            <a href="https://www.youtube.com/channel/UCvD4B1NFC_2HD5jxXl3U-SQ?pbjreload=10" className="social" target="_blank"><i className="fab fa-youtube fa-2x"></i></a>

                           {/*Modal*/}
                            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <link href="//cdn-images.mailchimp.com/embedcode/classNameic-10_7.css" rel="stylesheet" type="text/css"/>
                                                <div id="mc_embed_signup">
                                                    <form action="https://ottawapopsorchestra.us20.list-manage.com/subscribe/post?u=b1f09a6ff661dacb3f98fcfe3&amp;id=71f457fdc4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                                                        <div id="mc_embed_signup_scroll">
                                                            <h2>Subscribe to our mailing list</h2>
                                                            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                                                            <div className="mc-field-group">
                                                                <label for="mce-EMAIL">Email Address  <span className="asterisk">*</span>
                                                                </label>
                                                                <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL"/>
                                                            </div>
                                                            <div className="mc-field-group">
                                                                <label for="mce-FNAME">First Name </label>
                                                                <input type="text" value="" name="FNAME" className="" id="mce-FNAME"/>
                                                            </div>
                                                            <div className="mc-field-group">
                                                                <label for="mce-LNAME">Last Name </label>
                                                                <input type="text" value="" name="LNAME" className="" id="mce-LNAME"/>
                                                            </div>
                                                            <div className="mc-field-group">
                                                                <label for="mce-MMERGE5">Age </label>
                                                                <input type="text" value="" name="MMERGE5" className="" id="mce-MMERGE5"/>
                                                            </div>
                                                            <div className="mc-field-group input-group">
                                                                <strong>Would you like to subscribe to: </strong>
                                                                <ul><li><input type="checkbox" value="1" name="group[881][1]" id="mce-group[881]-881-0"/><label for="mce-group[881]-881-0">News and Special Offers</label></li>
                                                                    <li><input type="checkbox" value="2" name="group[881][2]" id="mce-group[881]-881-1"/><label for="mce-group[881]-881-1">Pops Series</label></li>
                                                                    <li><input type="checkbox" value="4" name="group[881][4]" id="mce-group[881]-881-2"/><label for="mce-group[881]-881-2">classNameics Series</label></li>
                                                                    <li><input type="checkbox" value="8" name="group[881][8]" id="mce-group[881]-881-3"/><label for="mce-group[881]-881-3">Season Updates</label></li>
                                                                    <li><input type="checkbox" value="16" name="group[881][16]" id="mce-group[881]-881-4"/><label for="mce-group[881]-881-4">Education</label></li>
                                                                </ul>
                                                            </div>
                                                            <div id="mce-responses" className="clear">
                                                                <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                                                                <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                                                            </div>
                                                            <div aria-hidden="true"><input type="text" name="b_b1f09a6ff661dacb3f98fcfe3_71f457fdc4" tabindex="-1" value=""/></div>
                                                            <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
                                                        </div>
                                                    </form>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 footer-col" style={{color: "white"}}>
                        Box Office:
                        <p>10 am to 8pm daily</p>
                        <p>   Telephone: 613-580-2700</p>
                            <p>   Toll-free: 1-866-752-5231</p>
                                <p>   In Person: Mon to Sat, 5 pm to 8:30 pm</p>
                                <p>   Online: 24/7</p>

                    </div>
                </div>

                <div className="row justify-content-center pages-row">
                    <div className="col-md-2 text-center pages"><a href="index.html">Home</a></div>
                    <div className="col-md-2 text-center pages"><a href="about-us.html">About Us</a></div>
                    <div className="col-md-2 text-center pages"><a href="concerts.html">Concerts</a></div>
                    <div className="col-md-2 text-center pages"><a href="conductors.html">Orchestra</a></div>
                    <div className="col-md-2 text-center pages"><a href="contact.html">Contact</a></div>
                </div>
        </footer>
    );
}

export default Footer;