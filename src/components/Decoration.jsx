import React from "react";
// small
import smcircleone from "../assets/phone/smallcircleone.svg";
import smcircletwo from "../assets/phone/smallcircletwo.svg";
import smcirclethree from "../assets/phone/smallcirclethree.svg";
// medium
import mdcircleone from "../assets/tablet/mdcircleone.svg";
import mdcircletwo from "../assets/tablet/mdcircletwo.svg";
import mdcirclethree from "../assets/tablet/mdcirclethree.svg";
// 500
import sm from "../assets/500/500three.svg";
import md from "../assets/500/500two.svg";
import big from "../assets/500/500one.svg";

const Decoration = () => {
	return (
		<>
			<div className="absolute  top-52 right-0  ">
				<img src={smcircleone} alt="small circle" className="500:hidden" />
				<img src={sm} alt="circle" className="hidden 500:block md:hidden" />
				<img
					src={mdcircleone}
					alt="medium circle"
					className="hidden md:block"
				/>
			</div>
			<div className="absolute  left-0 500:left-10 md:left-10 sm:left-24 top-32 lg:left-24 xl:left-32">
				<img src={smcircletwo} alt="small circle" className="500:hidden" />
				<img src={md} alt="circle" className="hidden 500:block md:hidden" />
				<img src={mdcircletwo} alt="small circle" className="hidden md:block" />
			</div>
			<div className="absolute  bottom-0 -left-0">
				<img src={smcirclethree} alt="small circle" className="500:hidden" />
				<img src={big} alt="circle" className="hidden 500:block md:hidden" />
				<img
					src={mdcirclethree}
					alt="small circle"
					className="hidden md:block"
				/>
			</div>
		</>
	);
};

export default Decoration;
