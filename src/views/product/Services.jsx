import React, { useState } from 'react';

// Import images directly
import img1 from "../../assets/images/news-1.jpg"
import img2 from "../../assets/images/news-2.jpg"
import img3 from "../../assets/images/news-3.jpg"
import "../../css/cart.css"

import img4 from "../../assets/images/news-4.jpg"

import "../../css/services.css"
const Services = () => {
  const [activeTab, setActiveTab] = useState('page1');

  const openCity = (event, cityName) => {
    setActiveTab(cityName);
  };

  return (
<>

<div class="services tnb7 carts" id="services">
	<div class="container">
		<div class="small-heading-center"> Services</div>
		<div class="big-heading-center"> Our Services</div>
		<div class="row">
			<div class="col-md-3 col-sm-3 col-xs-12">
				<div class="services-text">
					<div class="services-img">
						<img src={img4}/>
					</div>
					<div class="services-img-text">
						<h4>Training <br/>Workshops</h4>
					</div>
					<div class="more">
						<a href="<?php echo base_url(); ?>home/services">Read more..</a>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-sm-3 col-xs-12">
				<div class="services-text">
					<div class="services-img">
						<img src={img2} />
					</div>
					<div class="services-img-text">
						<h4>Psychometric <br/>Testing</h4>
					</div>
					<div class="more">
						<a href="<?php echo base_url(); ?>home/services">Read more..</a>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-sm-3 col-xs-12">
				<div class="services-text">
					<div class="services-img">
						<img src={img1}/>
					</div>
					<div class="services-img-text">
						<h4>Statistical <br/>Data Processing</h4>
					</div>
					<div class="more">
						<a href="">Read more..</a>
					</div>
				</div>
			</div>
			<div class="col-md-3 col-sm-3 col-xs-12">
				<div class="services-text">
					<div class="services-img">
						<img src={img2}/>
					</div>
					<div class="services-img-text">
						<h4>Publications <br/>& Trainers</h4>
					</div>
					<div class="more">
						<a href="">Read more..</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</>
  );
};

export default Services;
