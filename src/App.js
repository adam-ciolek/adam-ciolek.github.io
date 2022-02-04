import { Navigation, Welcome } from "./components";

function App() {
	return (
		<div className="bg-bg-color w-full min-h-screen bg-hero">
			<div className="relative min-h-screen  max-w-7xl mx-auto  w-full">
				<Navigation />
				<Welcome />
			</div>
		</div>
	);
}

export default App;
