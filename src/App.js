import { Navigation, Welcome, AboutMe, Work } from "./components";

function App() {
	return (
		<div className="bg-bg-color  min-h-screen bg-hero ">
			<div className="max-w-7xl mx-auto  w-full">
				<div className="relative min-h-screen">
					<Navigation />
					<Welcome />
				</div>
				<AboutMe />
				<Work />
			</div>
		</div>
	);
}

export default App;
