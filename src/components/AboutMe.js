import React from "react";
import pictureofme from "../assets/ja.jpg";
import { skills } from "../data";
import { passions } from "../data";

const AboutMe = () => {
	return (
		<section className="mt-20 " id="about">
			<div className="text-white font-text px-4 ">
				<h2 className="text-4xl border-l-8 border-extra-orange pl-2">O mnie</h2>
				<div className=" mt-16 ">
					<div className="flex flex-col lg:flex-row lg:mb-10 ">
						<div className="order-2 my-10 lg:order-1 lg:flex-1 xl:ml-40">
							<p className="text-lg tracking-wide sm:w-9/12 sm:mx-auto lg:w-11/12 xl:w-full">
								Cześć mam na imię Adam mam 25 lat od roku uczę się
								programowania.Poświęcam na naukę każdą wolną chwilę, a ponieważ
								sprawia mi to przyjemność, to chciałbym żeby stało się to
								również moją pracą.Moimi ulubionymi technologiami są Javascript
								oraz React ,ale także jestem otwarty na inne technologie,
								których chciałbym też poznać.
							</p>
						</div>
						<div className="order-1 mx-auto lg:order-2 lg:flex-1 xl:ml-40">
							<img
								src={pictureofme}
								alt="Adam Ciołek"
								className="h-picture rounded z-10 lg:mx-auto xl:mx-0"
							/>
						</div>
					</div>
					<div className="flex flex-col">
						<div className="lg:mt-10">
							<h2 className="text-xl mb-4 tracking-wide text-center 500:text-left 500:ml-2">
								Umiejętności:
							</h2>
							<div className="w-max flex-col flex mx-auto 500:flex-row 500:flex-wrap 500:w-auto">
								{skills.map((skill, index) => {
									return (
										<span
											key={index}
											className="border-extra-orange border-2 py-2.5 px-4 my-2 text-center text-lg rounded-full tracking-wide 500:mx-2 "
										>
											{skill.skill}
										</span>
									);
								})}
							</div>
						</div>
						<div className="mt-10">
							<h2 className="text-xl tracking-wide mb-4 text-center 500:text-left 500:ml-2">
								Zainteresowania:
							</h2>
							<div className="w-max flex-col flex mx-auto 500:flex-row 500:flex-wrap 500:w-auto">
								{passions.map((passion, index) => {
									return (
										<span
											key={index}
											className="text-lg block border-light-blue border-2 py-2.5 px-4 my-2 text-center text-lg rounded-full tracking-wide 500:mx-2"
										>
											{passion.passion}
										</span>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
