import React from 'react'
import {Link} from 'react-router-dom'
import '../StyleSheets/Footer.css'

export default function Footer() {
  return (
    <div>
<footer className="footer" id='Footerbg'>
    <hr />
<div className="container bottom_border">
<div className="row">
<div className=" col-sm-4 col-md col-sm-4  col-12 col">
<h5 className="headin5_amrc col_white_amrc pt2"> <ins>Find us</ins></h5>
<p className="mb10">601-602 Colonnade 2 B/h Rajpath club, Rajpath Rangoli Rd, Ahmedabad, Gujarat 380059</p>
<p><i className="fa fa-phone"></i> +91-7435880006 </p>
<p><i className="fa fa fa-envelope"></i> info@codiot.com </p>
</div>
<div className=" col-sm-4 col-md  col-6 col">
<h5 className="headin5_amrc col_white_amrc pt2 "> <ins>Social Media</ins></h5>
<ul className="footer_ul_amrc">
<div><Link to="https://www.instagram.com">Instagram</Link></div>
<div><Link to="https://www.facebook.com/">FaceBook</Link></div>
<div><Link to="https://in.linkedin.com/">Linkedin</Link></div>
<div><Link to="https://twitter.com/">Twitter</Link></div>

</ul>
</div>
<div className=" col-sm-4 col-md  col-6 col">
<h5 className="headin5_amrc col_white_amrc pt2"> <ins>To Project</ins></h5>
This working for a patient time scheduling and managening bill and appointment
</div>


<div className=" col-sm-4 col-md  col-12 col">
<h5 className="headin5_amrc col_white_amrc pt2"><ins>About Us</ins></h5>

<ul className="footer_ul2_amrc">
<div><i className="fab fa-twitter fleft padding-right"></i> Our Compony...
    <Link  to="https://www.codiot.com/" >codiot technologies llp</Link>
    </div>
<div><i className="fab fa-twitter fleft padding-right"></i> Refernce...</div>
<div><Link to="https://nodejs.org/">Nodejs</Link></div>
<div><Link to="https://react.dev/">React Js</Link></div>
<div><Link to="https://getbootstrap.com/">Bootstrap</Link></div>
</ul>
</div>
</div>
</div>
<p className="text-center">Copyright @2023 | Designed With by <Link to="https://www.codiot.com/">codiot technologies llp</Link></p>
</footer>
    </div>
  )
}
