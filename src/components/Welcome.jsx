import React from "react";
import { Decoration } from "./";
import smdev from "../assets/phone/smalldev.svg";
import mddev from "../assets/tablet/mddev.svg";

const Welcome = () => {
	return (
		<>
			<Decoration />
			<section className="absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 text-white">
				<h1 className="font-front text-2xl mb-4 mt-8 sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
					FRONT-END
				</h1>
				<img src={smdev} alt="developer" className="mx-auto animate-circle" />
			</section>
			<div
				className="absolute bottom-40 left-1/2
       -translate-y-2/4 -translate-x-2/4 md:bottom-20 lg:bottom-0"
			>
				<h3 className="text-white">Scroll down</h3>
			</div>
		</>
	);
};

export default Welcome;
