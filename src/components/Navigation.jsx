import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react/cjs/react.production.min";

import logo from "../assets/logo.svg";
import { links } from "../data";

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(true);
	};
	const handleClose = () => {
		setIsOpen(false);
	};

	const link = links.map((link) => {
		const { id, url, name } = link;
		return (
			<a
				href={`#${url}`}
				key={id}
				className="text-white transition -m-3 p-3 flex items-start rounded-lg hover:bg-extra-green md:hover:bg-transparent text-lg capitalize relative  after:absolute after:top-full after:left-0 after:w-full after:h-px after:bg-extra-orange after:transition after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left"
			>
				{name}
			</a>
		);
	});

	return (
		<>
			<div className="relative bg-bg-color bg-hero">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
						<div className="flex justify-start lg:w-0 lg:flex-1">
							<a href="#">
								<img src={logo} alt="Adam Ciołek" />
							</a>
						</div>
						<div className="-mr-2 -my-2 md:hidden">
							<button
								onClick={handleOpen}
								type="button"
								className="bg-bg-color bg-hero rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-extra-green"
								aria-expanded="false"
							>
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
						<nav className="hidden md:flex space-x-10">{link}</nav>
					</div>
				</div>

				<Transition
					as={Fragment}
					show={isOpen}
					enter="transition ease-out duration-200"
					enterFrom="opacity-0 translate-y-1"
					enterTo="opacity-100 translate-y-0"
					leave="transition ease-in duration-150"
					leaveFrom="opacity-100 translate-y-0"
					leaveTo="opacity-0 translate-y-1"
				>
					<div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10 ">
						<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-bg-color bg-hero divide-y-2 divide-gray-50 ">
							<div className="pt-5 pb-6 px-5">
								<div className="flex items-center justify-between">
									<div>
										<img src={logo} alt="Adam Ciołek" />
									</div>
									<div className="-mr-2">
										<button
											onClick={handleClose}
											type="button"
											className="bg-bg-color bg-hero rounded-md p-2 inline-flex items-center justify-center text-gray-100 hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-extra-green"
										>
											<svg
												className="h-6 w-6"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</button>
									</div>
								</div>
								<div className="mt-6">
									<nav className="grid gap-y-8">{link}</nav>
								</div>
							</div>
						</div>
					</div>
				</Transition>
			</div>
		</>
	);
};

export default Navigation;
