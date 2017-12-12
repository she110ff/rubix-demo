import React from 'react';

import { withRouter } from 'react-router';
import classNames from 'classNames';

import Header from '../common/header';

import {
  Row,
  Col,
  Tab,
  Nav,
  Grid,
  Label,
  Button,
  NavItem,
} from '@sketchpixy/rubix';


import Maps2 from './Maps2'

class Hero extends React.Component {
  render() {
    return (
      <div {...this.props}
           className={classNames(this.props.className,
                                 'homepage-hero')}>
        <Grid fixed>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

class HeroHeader extends React.Component {
  render() {
    return (
      <div {...this.props}
           className={classNames(this.props.className,
                                 'homepage-hero-header')}>
        {this.props.children}
      </div>
    );
  }
}

class HeroHeader2 extends React.Component {
  render() {
    return (
      <div {...this.props}
           className={classNames(this.props.className,
                                 'homepage-hero-header2')}>
        {this.props.children}
      </div>
    );
  }
}



class SliderPanel extends React.Component {
  componentDidMount() {

    var tpj=jQuery;
          
          var revapi490;
          tpj(document).ready(function() {
            if(tpj("#rev_slider_490_1").revolution == undefined){
              revslider_showDoubleJqueryError("#rev_slider_490_1");
            }else{
              revapi490 = tpj("#rev_slider_490_1").show().revolution({
                sliderType:"hero",
                jsFileLocation:"revolution/js/",
                sliderLayout:"fullwidth",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[600,500,400,300],
                lazyType:"none",
                parallax: {
                  type:"mouse",
                  origo:"slidercenter",
                  speed:2000,
                  levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
                  type:"mouse",
                },
                shadow:0,
                spinner:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                  simplifyAll:"off",
                  disableFocusListener:false,
                }
              });
            }
          }); /*ready*/
  
  }
  render() {
    return (
           <Grid>
              <Row>
                <Col xs={12}>

                    <div id="rev_slider_490_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="image-hero39" data-source="gallery" style={{margin: '0px auto', backgroundColor: 'transparent', padding: 0, marginTop: 0, marginBottom: 0}}>
                      <div id="rev_slider_490_1" className="rev_slider fullwidthabanner" style={{display: 'none'}} data-version="5.4.1">


                        <ul>
                          <li data-index="rs-1699" data-transition="zoomout" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed={2000} data-thumb="/imgs/assets/images/notgenericherobg-100x50.jpg" data-rotate={0} data-saveperformance="off" data-title="Intro" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                            <img src="/imgs/assets/images/notgenericherobg.jpg" alt data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={10} className="rev-slidebg" data-no-retina />
                            <div className="tp-caption tp-shape tp-shapewrapper  " id="slide-1699-layer-10" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:750,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;ease&quot;:&quot;nothing&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 5, textTransform: 'left', backgroundColor: 'rgba(0, 0, 0, 0.40)', borderColor: 'rgba(0, 0, 0, 0.50)', borderWidth: 0}}> </div>
                            <div className="tp-caption NotGeneric-Icon   tp-resizeme" id="slide-1699-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-66','-68','-78','-78']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 6, whiteSpace: 'nowrap', textTransform: 'left', cursor: 'default'}}><i className="pe-7s-paper-plane" /> </div>
                            <div className="tp-caption NotGeneric-Title   tp-resizeme" id="slide-1699-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','-22','-29']" data-fontsize="['70','70','70','50']" data-lineheight="['70','70','70','50']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;z:0;rX:0deg;rY:0;rZ:0;sX:1.5;sY:1.5;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[10,10,10,10]" data-paddingright="[0,0,0,0]" data-paddingbottom="[10,10,10,10]" data-paddingleft="[0,0,0,0]" style={{zIndex: 7, whiteSpace: 'nowrap', textTransform: 'left'}}>I'M A HERO TITLE </div>
                            <div className="tp-caption NotGeneric-SubTitle   tp-resizeme" id="slide-1699-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['52','52','28','13']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 8, whiteSpace: 'nowrap', textTransform: 'left'}}>REVOLUTION SLIDER TEMPLATE </div>
                            <div className="tp-caption NotGeneric-CallToAction rev-btn " id="slide-1699-layer-7" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['124','124','80','65']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-actions="[{&quot;event&quot;:&quot;click&quot;,&quot;action&quot;:&quot;scrollbelow&quot;,&quot;offset&quot;:&quot;0px&quot;,&quot;delay&quot;:&quot;&quot;}]" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1250,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:[175%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;300&quot;,&quot;ease&quot;:&quot;Power1.easeInOut&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[10,10,10,10]" data-paddingright="[30,30,30,30]" data-paddingbottom="[10,10,10,10]" data-paddingleft="[30,30,30,30]" style={{zIndex: 9, whiteSpace: 'nowrap', textTransform: 'left', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer'}}>HOOK ME UP </div>
                          </li>
                        </ul>

                        <div className="tp-bannertimer tp-bottom" style={{visibility: 'hidden !important'}} />

                      </div>
                    </div>
-

              </Col>
            </Row>
          </Grid>
    );
  }
}



class ContactForm extends React.Component{
    render() {
        return (
            <div className="content_wrap padding_top_5_2857em padding_bottom_6_1429em scheme_original ">
                <div id="sc_form_1_wrap" className="sc_form_wrap ">
                    <div id="sc_form_1" className="sc_form sc_form_style_form_2 aligncenter">
                        <h6 className="sc_form_subtitle sc_item_subtitle">Contact Form</h6>
                        <h2 className="sc_form_title sc_item_title">Get in Touch With Us</h2>
                        <div className="sc_form_descr sc_item_descr">We welcome visitors at NewLife Church and would love to have you join us in church this weekend.</div>
                        <div className="sc_columns columns_wrap">

                
                                <div className="sc_form_address column-1_3" >
                                    <div className="sc_form_address_field sc_form_address_field_icon_address">
                                        <span className="sc_form_address_label">Address:</span>
                                        <span className="sc_form_address_data">123, New Lenox, Chicago, IL 60606</span>
                                    </div>
                                    <div className="sc_form_address_field sc_form_address_field_icon_phone">
                                        <span className="sc_form_address_label">Phone number:</span>
                                        <span className="sc_form_address_data">123-456-7890</span>
                                    </div>
                                    <div className="sc_form_address_field sc_form_address_field_icon_email">
                                        <span className="sc_form_address_label">Have any questions?</span>
                                        <span className="sc_form_address_data">support@axiomthemes.com</span>
                                    </div>
                                    <div className="sc_form_address_field sc_form_address_field_hours">
                                        <span className="sc_form_address_label">We are open:</span>
                                        <span className="sc_form_address_data">Monday - Friday 10AM - 8PM</span>
                                    </div>
                                </div>
                                <div className="sc_form_fields column-2_3">
                                    <Maps2/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export const Header2 = () =>

    <header className="top_panel_wrap top_panel_style_3 scheme_original menu_show_ys">
        <div className="top_panel_wrap_inner top_panel_inner_style_3 top_panel_position_above">

            <div className="top_panel_middle">
                <div className="content_wrap">
                    <div className="contact_logo">
                        <div className="logo">
                            <a href="index.html">
                                <img src="http://placehold.it/122x60" className="logo_main" alt=""/>
                                <img src="http://placehold.it/122x60" className="logo_fixed" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="menu_main_wrap">
                        <nav className="menu_main_nav_area">
                            <ul id="menu_main" className="menu_main_nav">
                                <li className="menu-item current-menu-item">
                                  <a href="#" className="sf-with-ul">Home</a>
                                </li>
                                <li className="menu-item">
                                  <a href="#" className="sf-with-ul">Events</a>
                                </li>
                                <li className="menu-item">
                                  <a href="#" className="sf-with-ul">Sermons</a>
                                </li>
                                <li className="menu-item">
                                  <a href="#" className="sf-with-ul">Gallery</a>
                                </li>
                                <li className="menu-item">
                                  <a href="#" className="sf-with-ul">Contacts</a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>


export const Welcome = () =>
    <div className="scheme_original  content_container hp1_welcome_section">
        <div className="content_wrap">
            <div className="columns_wrap">
              <div className="column-1_2 sc_column_item sc_column_item_1 odd first">
                <figure className="sc_image sc_image_shape_square">
                    <a href="service-single.html">
                        <img src="http://placehold.it/520x660" alt="" />
                    </a>
                </figure>
              </div>
              <div className="column-1_2 sc_column_item sc_column_item_2 even">
                    <div className="sc_services_wrap">
                        <div className="sc_services sc_services_style_services-5 sc_services_type_icons sc_slider_nopagination sc_slider_nocontrols width_100_per" data-interval="5040" data-slides-min-width="250">
                            <h6 className="sc_services_subtitle sc_item_subtitle">Welcome</h6>
                            <h2 className="sc_services_title sc_item_title">Loving God, Loving Others and Serving the World</h2>
                            <div className="sc_services_descr sc_item_descr">We’d love to meet you! Come check us out this SUNDAY where you can meet us and see if New Life Church might be a good fit for you. Our heart and soul is to introduce and connect people with the living and powerful God.</div>
                            <div className="sc_services_item sc_services_item_1 odd first">
                                <span className="sc_icon icon-house306"></span>
                                <div className="sc_services_item_content">
                                    <h4 className="sc_services_item_title">
                                        <a href="service-single.html">Follow with us</a>
                                    </h4>
                                    <div className="sc_services_item_description">
                                        <p>We would love to see you and your family &amp; friends this weekend in our church at 10 am.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sc_services_item sc_services_item_2 even">
                                <span className="sc_icon icon-open-book6"></span>
                                <div className="sc_services_item_content">
                                    <h4 className="sc_services_item_title">
                                        <a href="service-single.html">What We Believe</a></h4>
                                    <div className="sc_services_item_description">
                                        <p>We believe that the Bible is God’s Word. It is accurate, authoritative and applicable to our everyday lives.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sc_services_item sc_services_item_3 odd">
                                <span className="sc_icon icon-avatar110"></span>
                                <div className="sc_services_item_content">
                                    <h4 className="sc_services_item_title">
                                        <a href="service-single.html">New Here?</a>
                                    </h4>
                                    <div className="sc_services_item_description">
                                        <p>Tell us about yourself to begin your journey with connecting to our community.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

const Upcomming = () =>
    <div className="hp1_upcoming_events_section">
        <div className="content_wrap">
            <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_2">
                <div className="column-1_2 sc_column_item sc_column_item_1 odd first">
                    <div className="sc_section">
                        <div className="sc_section_inner">
                            <h6 className="sc_section_subtitle sc_item_subtitle">Worship</h6>
                            <h2 className="sc_section_title sc_item_title margin_bottom_1_2em_imp">The sound of our worship</h2>
                            <div id="myplayer"></div>
                        </div>
                    </div>
                </div><div className="column-1_2 sc_column_item sc_column_item_2 even">
                    <div className="sc_section">
                        <div className="sc_section_inner">
                            <h6 className="sc_section_subtitle sc_item_subtitle">Upcoming Events</h6>
                            <h2 className="sc_section_title sc_item_title margin_bottom_1_2em_imp">Conferences & Events</h2>
                            <div className="sc_events_wrap">
                                <div className="sc_events sc_events_style_events-2 sc_slider_nopagination sc_slider_nocontrols width_100_per" data-interval="7691">
                                    <div className="sc_events_item sc_events_item_1 odd first">
                                        <span className="sc_events_item_date">
                                            <span className="sc_events_item_month">Apr</span>
                                            <span className="sc_events_item_day">24</span>
                                        </span>
                                        <h6 className="sc_events_item_title">
                                            <a href="event-single.html">Church Leaders meeting</a>
                                        </h6>
                                        <span className="sc_events_item_time">1:00 pm - 7:00 pm</span>
                                        <span className="sc_events_item_details">
                                            <a href="event-single.html">Details</a>
                                        </span>
                                    </div>
                                    <div className="sc_events_item sc_events_item_2 even">
                                        <span className="sc_events_item_date">
                                            <span className="sc_events_item_month">Apr</span>
                                            <span className="sc_events_item_day">09</span>
                                        </span>
                                        <h6 className="sc_events_item_title">
                                            <a href="event-single.html">Prayer Day</a>
                                        </h6>
                                        <span className="sc_events_item_time">6:00 pm - 8:00 pm</span>
                                        <span className="sc_events_item_details">
                                            <a href="event-single.html">Details</a>
                                        </span>
                                    </div>
                                    <div className="sc_events_item sc_events_item_3 odd">
                                        <span className="sc_events_item_date">
                                            <span className="sc_events_item_month">Mar</span>
                                            <span className="sc_events_item_day">02</span>
                                        </span>
                                        <h6 className="sc_events_item_title">
                                            <a href="event-single.html">Monthly Band Tryouts</a>
                                        </h6>
                                        <span className="sc_events_item_time">3:00 pm - 7:00 pm</span>
                                        <span className="sc_events_item_details">
                                            <a href="event-single.html">Details</a>
                                        </span>
                                    </div>
                                    <div className="sc_events_item sc_events_item_4 even">
                                        <span className="sc_events_item_date">
                                            <span className="sc_events_item_month">Jan</span>
                                            <span className="sc_events_item_day">31</span>
                                        </span>
                                        <h6 className="sc_events_item_title">
                                            <a href="event-single.html">WOW Conference</a>
                                        </h6>
                                        <span className="sc_events_item_time">10:00 am - 2:00 pm</span>
                                        <span className="sc_events_item_details">
                                            <a href="event-single.html">Details</a>
                                        </span>
                                    </div>
                                    <div className="sc_events_item sc_events_item_5 odd">
                                        <span className="sc_events_item_date">
                                            <span className="sc_events_item_month">Jun</span>
                                            <span className="sc_events_item_day">24</span>
                                        </span>
                                        <h6 className="sc_events_item_title">
                                            <a href="event-single.html">Seniors Bible Study</a>
                                        </h6>
                                        <span className="sc_events_item_time">4:00 pm - 6:00 pm</span>
                                        <span className="sc_events_item_details">
                                            <a href="event-single.html">Details</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>





class NextEvent extends React.Component {
  componentDidMount() {
    $(".sc_countdown_placeholder")
    .countdown("2018/01/01", function(event) {
        $('#count_down_day').html(event.strftime('%D'));
        $('#count_down_hour').html(event.strftime('%H'));
        $('#count_down_minute').html(event.strftime('%M'));
        $('#count_down_second').html(event.strftime('%S'));
    });
  }


  render() {
    return (    
      <div className="hp1_next_event_section tpl_add_bg scheme_original ">
          <div className="content_wrap">
              <div className="columns_wrap sc_columns columns_nofluid sc_columns_count_3 margin_bottom_null">
                  <div className="column-1_3 sc_column_item sc_column_item_1 odd first">
                      <div className="sc_section margin_left_6_4286">
                          <div className="sc_section_inner">
                              <h3 className="sc_title sc_title_regular hp1_event_title_1 tpl_light" style={{paddingTop: 17}}>가족 찬양 대회:</h3>
                          </div>
                      </div>
                  </div><div className="column-1_3 sc_column_item sc_column_item_2 even">
                      <div id="sc_countdown_1" className="sc_countdown sc_countdown_style_1 aligncenter margin_top_null" data-date="2017-06-08" data-time="12:00:00">
                          <div className="sc_countdown_inner">
                              <div className="sc_countdown_item sc_countdown_days">
                                  <span className="sc_countdown_digits">
                                      <span></span>
                                      <span id="count_down_day">5</span>
                                      <span></span>
                                  </span>
                                  <span className="sc_countdown_label">Days</span>
                              </div>
                              <div className="sc_countdown_separator">:</div>
                              <div className="sc_countdown_item sc_countdown_hours">
                                  <span className="sc_countdown_digits">
                                      <span id="count_down_hour">4</span>
                                      <span></span>
                                  </span>
                                  <span className="sc_countdown_label">Hours</span>
                              </div>
                              <div className="sc_countdown_separator">:</div>
                              <div className="sc_countdown_item sc_countdown_minutes">
                                  <span className="sc_countdown_digits">
                                      <span id="count_down_minute">4</span>
                                      <span></span>
                                  </span>
                                  <span className="sc_countdown_label">Minutes</span>
                              </div>
                              <div className="sc_countdown_separator">:</div>
                              <div className="sc_countdown_item sc_countdown_seconds">
                                  <span className="sc_countdown_digits">
                                      <span id="count_down_second">4</span>
                                      <span></span>
                                  </span>
                                  <span className="sc_countdown_label">Seconds</span>
                              </div>
                              <div className="sc_countdown_placeholder hide"></div>
                              <div id="sc_countdown_placeholder"></div>
                          </div>
                      </div>
                  </div><div className="column-1_3 sc_column_item sc_column_item_3 odd">
                      <div className="sc_section aligncenter margin_top_null">
                          <div className="sc_section_inner">
                              <a href="#" className="sc_button sc_button_square sc_button_style_border sc_button_color_style_4 sc_button_size_large">EVENT DETAIL</a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="clearfix"></div>
          </div>
      </div>
    )
  }
}


@withRouter
export default class Homepage extends React.Component {
  handleNavigation() {
    this.props.router.push('/ltr/dashboard');
  }

  render() {
    return (
      <div id='homepage-container'>
        <Header2 />
        <Button bsStyle='deepred' id='demo-btn' onClick={::this.handleNavigation}>View Demo</Button>

        <div>
          <Hero className='text-center hidden-xs' style={{height: 475, backgroundImage: 'url(/imgs/app/homepage/background.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden'}}>
            <img src='/imgs/app/homepage/simplepowerful.png' style={{marginTop: 5}} />
          </Hero>
          <Hero className='text-center visible-xs' style={{height: 270, backgroundImage: 'url(/imgs/app/homepage/background.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden'}}>
            <img width='270' className='visible-xs' src='/imgs/app/homepage/simplepowerful.png' style={{margin: 'auto', marginTop: 30}} />
          </Hero>
        </div>


        <NextEvent />
        <Upcomming />
        <Welcome />
        <ContactForm />
        

        <Hero>
          <HeroHeader>
            <span>{"Don't wait for Web Components "}</span>
            <sup><Label className='bg-deepred fg-white'>NEW!</Label></sup>
          </HeroHeader>
          <HeroHeader2>{"Embrace React "}<sup><small><Label className='bg-deepred fg-white'>v15.3.1</Label></small></sup></HeroHeader2>
          <Grid>
            <Row>
              <Col sm={7} collapseLeft collapseRight>
                <p style={{marginTop: 60}}>
                  Rubix is built on top of React which uses a Virtual DOM implementation for ultra-high performance and semantic markup coupled with CommonJS for composable Components.
                </p>
                <p>The result: <strong>clean and elegant code.</strong></p>
              </Col>
              <Col sm={5} collapseLeft collapseRight>
                <div className='hidden-xs text-right'>
                  <img src='/imgs/app/homepage/reactcode.png' />
                </div>
                <div className='visible-xs text-center'>
                  <img width='250' src='/imgs/app/homepage/reactcode.png' />
                </div>
              </Col>
            </Row>
          </Grid>
        </Hero>
        <Hero>
          <HeroHeader2>
            <span>{"Bootstrap on Steroids "}</span>
            <sup><Label className='bg-deepred fg-white'>NEW!</Label></sup>
          </HeroHeader2>
          <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
            <div className='hidden-xs'>
              <img src='/imgs/app/homepage/bootstrapreact.png' />
            </div>
            <div className='visible-xs'>
              <img width='250' src='/imgs/app/homepage/bootstrapreact.png' />
            </div>
          </div>
          <p className='text-center'>
            Rubix implements custom React Components on top of the popular react-bootstrap project enabling you to write shorter, semantic markup. Say Goodbye to unwieldy classNames and spaghetti code!
          </p>
        </Hero>
        <Hero style={{position: 'relative', zIndex: 2}}>
          <HeroHeader>
            <span>{"Multiple Language + Framework Integrations "}</span>
            <sup><Label className='bg-deepred fg-white'>NEW!</Label></sup>
          </HeroHeader>
          <div className='text-center visible-xs' style={{marginTop: 50, marginBottom: 50}}>
            <img width='100%' src='/imgs/app/homepage/rubix-implementations.png' />
          </div>
          <p className='text-center' style={{marginTop: 25}}>
            {"Rubix comes integrated with starter kits for various backends including:"} <strong><em><small>NodeJS</small></em></strong>, <strong><em><small>Redux + GraphQL</small></em></strong>, <strong><em><small>Relay + GraphQL</small></em></strong>, <strong><em><small>Ruby on Rails</small></em></strong>, <strong><em><small>Laravel</small></em></strong> and <strong><em><small>Meteor</small></em></strong>.
          </p>
          <p className='text-center hidden-xs'>
            <small><em>The complete list of features for each integration is detailed below:</em></small>
          </p>
          <hr className='hidden-xs' />
          <div className='text-center hidden-xs'>
            <Tab.Container id="integration-description" defaultActiveKey="redux">
              <Row className="clearfix">
                <Col sm={12}>
                  <Nav bsStyle="pills">
                    <NavItem eventKey="redux">
                      <img src='/imgs/app/homepage/redux.png' alt='redux' />
                    </NavItem>
                    <NavItem eventKey="relay">
                      <img src='/imgs/app/homepage/relay.png' alt='relay' />
                    </NavItem>
                    <NavItem eventKey="graphql">
                      <img src='/imgs/app/homepage/graphql.png' alt='graphql' />
                    </NavItem>
                    <NavItem eventKey="laravel">
                      <img src='/imgs/app/homepage/laravel.png' alt='laravel' />
                    </NavItem>
                    <NavItem eventKey="rails">
                      <img src='/imgs/app/homepage/rails.png' alt='rails' />
                    </NavItem>
                    <NavItem eventKey="meteor">
                      <img src='/imgs/app/homepage/meteor.png' alt='meteor' />
                    </NavItem>
                    <NavItem eventKey="nodejs">
                      <img src='/imgs/app/homepage/nodejs.png' alt='nodejs' />
                    </NavItem>
                  </Nav>
                  <Tab.Content animation={false}>
                    <Tab.Pane eventKey="redux">
                      <ul>
                        <li>Integrated with <strong>GraphQL</strong>.</li>
                        <li>Integrates with <strong>Chrome Redux DevTools</strong>.</li>
                        <li>Provides a <strong>GraphiQL in-browser IDE</strong> for interactively exploring GraphQL schemas.</li>
                        <li>Integrated with <strong>redux</strong>, <strong>redux-fetch-data</strong>, <strong>react-router</strong> and <strong>react-router-redux</strong>.</li>
                        <li><strong>Isomorphic/Universal:</strong> Server-side rendering enabled.</li>
                        <li>An example <strong>Todo List</strong> app demonstrating the complete integration. Includes a tutorial which re-creates the entire example app.</li>
                        <li>Deployment guides for <strong>Heroku + mLab</strong> and <strong>DigitalOcean</strong>.</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="relay">
                      <ul>
                        <li>Integrated with <strong>GraphQL</strong>.</li>
                        <li>Provides a <strong>GraphiQL in-browser IDE</strong> for interactively exploring GraphQL schemas.</li>
                        <li>Integrated with <strong>isomorphic-relay</strong>, <strong>isomorphic-relay-router</strong>, <strong>react-relay</strong> and <strong>react-router</strong>.</li>
                        <li><strong>Isomorphic/Universal:</strong> Server-side rendering enabled.</li>
                        <li>An example <strong>Todo List</strong> app demonstrating the complete integration. Includes a tutorial which re-creates the entire example app.</li>
                        <li>Deployment guides for <strong>Heroku + mLab</strong> and <strong>DigitalOcean</strong>.</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="graphql">
                      <ul>
                        <li>Integrates with both <strong>Relay</strong> and <strong>Redux</strong>.</li>
                        <li>Includes a <strong>GraphiQL in-browser IDE</strong> for interactively exploring GraphQL schemas.</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="laravel">
                      <ul>
                        <li>Integrates with <strong>Laravel 5.1 LTS</strong>.</li>
                        <li>Managed using <strong>Homestead</strong> to provide same virtual environment for all platforms.</li>
                        <li><strong>Isomorphic/Universal:</strong> Server-side rendering enabled. Makes use of <strong><em>react-php-v8js</em></strong> for compiling React components server-side.</li>
                        <li>An example <strong>Todo List</strong> app demonstrating the complete integration. Includes a tutorial which re-creates the entire example app.</li>
                        <li>Complete Deployment guide for pushing the entire app to <strong>Forge</strong>.</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="rails">
                      <ul>
                        <li>Integrates with <strong>Rails 5</strong>.</li>
                        <li><strong>Isomorphic/Universal:</strong> Server-side rendering enabled.</li>
                        <li>An example <strong>Todo List</strong> app demonstrating the complete integration. Includes a tutorial which re-creates the entire example app.</li>
                        <li>Deployment guides for <strong>Heroku</strong>.</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="meteor">
                      <ul>
                        <li>Integrates with <strong>Meteor 1.4</strong>.</li>
                        <li><strong>Isomorphic/Universal:</strong> Server-side rendering enabled.</li>
                        <li>An example <strong>Todo List</strong> app demonstrating the complete integration. Includes a tutorial which re-creates the entire example app.</li>
                        <li>Deployment guides for <strong>Galaxy + mLab</strong>.</li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="nodejs">
                      <ul>
                        <li><strong>Isomorphic/Universal:</strong> Server-side rendering enabled.</li>
                        <li>Ability to create <strong>distributables</strong> for integrations not provided.</li>
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Hero>
        <Hero style={{position: 'relative', zIndex: 2}}>
          <HeroHeader>
            <span>{"The Asset Pipeline "}</span>
            <sup><Label className='bg-deepred fg-white'>NEW!</Label></sup>
          </HeroHeader>
          <HeroHeader2>{"NPM, Webpack and Go!"}</HeroHeader2>
          <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
            <div className='hidden-xs'>
              <img src='/imgs/app/homepage/assetpipeline.png' />
            </div>
            <div className='visible-xs'>
              <img width='250' src='/imgs/app/homepage/assetpipeline.png' />
            </div>
          </div>
          <p className='text-center'>
            {"The new architecture in Rubix 4.0, removes the complexity of previous versions and implements a better and simpler asset pipeline using NPM scripts. It uses Webpack to transpile React code, compile SASS files, compile fonts and even provide RTL support by flipping stylesheets."}
          </p>
          <p className='text-center'>
            {"Rubix uses Babel for Javascript transformations. It ships with a set of ES6/ES7 syntax transformers. These allow you to use new ES6/ES7 syntax, right now, without waiting for browser support."}
          </p>
        </Hero>
        <Hero style={{position: 'relative', zIndex: 2}}>
          <HeroHeader>
            <span>{"Modular and Distributable "}</span>
            <sup><Label className='bg-deepred fg-white'>NEW!</Label></sup>
          </HeroHeader>
          <div className='text-center' style={{marginTop: 50, marginBottom: 50}}>
            <div className="logo-container" id="npm-logo">
              <svg viewBox="0 0 18 7" style={{ width: 200 }}>
                <path fill="#CB3837" d="M0,0v6h5v1h4v-1h9v-6"></path>
                <path fill="#FFF" d="M1,1v4h2v-3h1v3h1v-4h1v5h2v-4h1v2h-1v1h2v-4h1v4h2v-3h1v3h1v-3h1v3h1v-4"></path>
              </svg>
            </div>
          </div>
          <p className='text-center' style={{marginTop: 25}}>
            Already have a <strong>existing React project</strong> and not willing to make the transition to our starter-kits? No worries! We are now providing Rubix as a module which you can <strong>directly import</strong> into your existing projects.
          </p>
          <p className='text-center' style={{marginTop: 25}}>
            Rubix 4.0 allows you to create static sites using a feature called <strong>distributables</strong>. These distributables can be deployed directly to any static server (e.g. Apache2 / Nginx etc).
          </p>
        </Hero>
        <Hero>
          <HeroHeader2>{"Rubix Charts"}</HeroHeader2>
          <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
            <div className='hidden-xs'>
              <img src='/imgs/app/homepage/rubixcharts.png' />
            </div>
            <div className='visible-xs'>
              <img width='250' src='/imgs/app/homepage/rubixcharts.png' />
            </div>
          </div>
          <p className='text-center'>
            Rubix Charts is an aesthetically beautiful, hand-crafted charting library created exclusively for Rubix Admin app. We used the awesome D3.JS library to write all the charting components (Line, Area, Stacked, Bar, Column, Pie and Donut) that power Rubix Charts.
          </p>
        </Hero>
        <Hero>
          <HeroHeader>{"Internationalization and Localization"}</HeroHeader>
          <HeroHeader2>{"Mozilla L20n.js"}</HeroHeader2>
          <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
            <div className='hidden-xs'>
              <img src='/imgs/app/homepage/mozflags.png' />
            </div>
            <div className='visible-xs'>
              <img width='250' src='/imgs/app/homepage/mozflags.png' />
            </div>
          </div>
          <p className='text-center'>
            {"Mozilla L20n is a developer friendly framework that places languages in the localizer's hand to create better translations. "}
          </p>
          <p className='text-center'>
            {"It removes the need for developers to thoroughly understand the specifics of a natural language and provides an opportunity for localizers to create better translations. Rubix ships with custom React component bindings for the framework."}
          </p>
        </Hero>
        <Hero style={{position: 'relative', zIndex: 2}}>
          <HeroHeader>
            <span>{"Universal Javascript "}</span>
            <sup><Label className='bg-deepred fg-white'>NEW!</Label></sup>
          </HeroHeader>
          <HeroHeader2>{"Render client code on the server!"}</HeroHeader2>
          <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
            <div className='hidden-xs'>
              <img src='/imgs/app/homepage/isomorphic.png' />
            </div>
            <div className='visible-xs'>
              <img width='250' src='/imgs/app/homepage/isomorphic.png' />
            </div>
          </div>
          <p className='text-center'>
            {"Rubix uses React-Router to provide routing client side and reuses the same routing logic for rendering compiled HTML from the server making your app SEO friendly."}
          </p>
        </Hero>
        <Hero>
          <HeroHeader>{"Create complex layouts easily"}</HeroHeader>
          <HeroHeader2>{"Panels"}</HeroHeader2>
          <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
            <div className='hidden-xs'>
              <img src='/imgs/app/homepage/panels.png' />
            </div>
            <div className='visible-xs'>
              <img width='250' src='/imgs/app/homepage/panels.png' />
            </div>
          </div>
          <p className='text-center'>
            {"Rubix Panels empowers developers to create complex layouts in addition to the awesome Grid provided by Twitter Bootstrap. Pretty much every example page showcased in the demo makes use of Panels for layout."}
          </p>
        </Hero>
        <Hero style={{position: 'relative', zIndex: 2}}>
          <HeroHeader>
            <span>{"React Hot Loader v3.0 "}</span>
            <sup><Label className='bg-deepred fg-white'>NEW!</Label></sup>
          </HeroHeader>
          <HeroHeader2>{"Time-saving synchronised browser testing!"}</HeroHeader2>
          <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
            <video loop autoPlay width='100%'>
              <source src="/video/app/homepage/livereload.mp4" type="video/mp4" />
              <source src="/video/app/homepage/livereload.ogv" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className='text-center'>
            {"When you’re making responsive websites, there’s a lot of tweaking and testing to do. React Hot Loader makes your workflow faster by "}<strong>hot-reloading code as soon as a change is made.</strong>{" Hot reloading is enabled for SASS files, Image files, Locale files and WebFonts."}
          </p>
        </Hero>
        <Hero style={{position: 'relative', zIndex: 2}}>
          <HeroHeader>
            <span>{"Advanced Theming and Customizations "}</span>
            <sup><Label className='bg-deepred fg-white'>NEW!</Label></sup>
          </HeroHeader>
          <HeroHeader2><small>Using SASS mixins!</small></HeroHeader2>
          <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
            <div className='hidden-xs'>
              <img src='/imgs/app/homepage/themes.png' />
            </div>
            <div className='visible-xs'>
              <img width='250' src='/imgs/app/homepage/themes.png' />
            </div>
          </div>
          <p className='text-center'>
            {"We provide SASS mixins to customize individual UI elements or even the entire theme!"}
          </p>
        </Hero>
        <div>
          <Hero className='text-center' style={{height: 215, backgroundImage: 'url(/imgs/app/homepage/background.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden', backgroundPosition: '0% 100%'}}>
            <h1 className='fg-white' style={{marginTop: 0, marginBottom: 25, fontWeight: 100}}>So what are you waiting for?</h1>
            <Button lg outlined inverse retainBackground bsStyle='red' onClick={::this.handleNavigation}>Click here to View Demo</Button>
          </Hero>
        </div>
      </div>
    );
  }
}
