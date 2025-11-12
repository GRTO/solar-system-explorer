import { Vector3 } from "three";

export function computeOrbitPosition(t: number, orbitRadius: number, speed: number): Vector3 {
	const angle = speed * t;
	const x = Math.cos(angle) * orbitRadius;
	const z = Math.sin(angle) * orbitRadius;
	return new Vector3(x, 0, z);
}
