import React from 'react';
import img2 from "../../assets/images/abt_img_2.png"
import img3 from "../../assets/images/all_icon.png"
import "../../css/public.css"
import "../../css/cart.css"

import { RiArrowRightSLine } from "react-icons/ri";

import { Link } from 'react-router-dom';

const Publication = () => {
	return (
		<>
			<div className="publications tnb7" id="publications">
				<div className="container">
					<div className="row">
						<div className="col-md-7 col-sm-7 col-xs-12">
							<div className="publications-text">
								<div className="small-heading"> Publications</div>
								<div className="big-heading"> Related Publications</div>
								<p>Listed below are publications involving the LEONARD Personality Inventory (LPI) and the Yong EQ Inventory.</p>
								<Link className="more_btn animated fadeIn go" to="publication">
									Read More
									<RiArrowRightSLine size={20} />
								</Link>
							</div>
						</div>
						<div className="col-md-5 col-sm-5 col-xs-12">
							<div className="publications-img">
								<img src={img2} className='public-i' alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="dot-6">
					<img src={img3} alt="" />
				</div>
			</div>

			<div className="licensed tnb7" id="trainer">
				<div className="container-fluid">
					<div className="row justify-content-end">
						<div className="col-md-7 col-sm-7 col-xs-12 ml-auto pnm p-0">
							<div className="licensed-text">
								<div className="small-heading"> Licensed Trainers</div>
								<div className="big-heading"> List of Licensed LPI trainers.</div>
								<Link className="more_btn animated fadeIn go" to="license">
									More Details
									<RiArrowRightSLine size={20} />
								</Link>
							</div>

						</div>
					</div>
				</div>
			</div>

		</>
	);
};

export default Publication;
