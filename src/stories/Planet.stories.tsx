import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/planet.tsx";
import earthGLTF from "../assets/earth.glb";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { AxesHelper, GridHelper } from "three";

export default {
	title: "Solar System/Planet",
	component: Planet,
};

export const Default = () => {
	const { scene } = useGLTF<string>(earthGLTF);
	return (
		<div style={{ width: "100%", height: "95vh" }}>
			<Canvas camera={{ position: [0, 0, 1000], fov: 75 }}>
				<ambientLight intensity={30} />
				<pointLight position={[10, 10, 10]} />
				<primitive object={new AxesHelper(5)} />
				<primitive object={new GridHelper(10, 10)} />
				<OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

				<Planet orbitRadius={5} speed={0.1} scene={scene} />
			</Canvas>
		</div>
	);
};
