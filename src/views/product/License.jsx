import React from 'react'
import "../../css/license.css"
const License = () => {
  return (
<>
<div class="licensed tnb7" id="trainer">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-7 col-sm-7 col-xs-12 ml-auto pnm">
				<div class="licensed-text">
					<div class="small-heading"> Licensed Trainers</div>
					<div class="big-heading"> List of Licensed LPI trainers.</div>
					<a class="more_btn animated fadeIn go" href="<?php echo base_url(); ?>home/license"><i class="fa fa-long-arrow-right" aria-hidden="true"></i> More Details</a>
				</div>

			</div>
		</div>
	</div>
</div>
</>  )
}

export default License