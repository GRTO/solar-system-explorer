import { useFrame } from '@react-three/fiber';
import type { Group, Mesh, Object3DEventMap } from 'three';
import { Suspense, useRef, type FC } from 'react';
import { computeOrbitPosition } from '../physics/orbit.ts';

interface PlanetProps {
	orbitRadius: number;
	speed: number;
	scene: Group<Object3DEventMap>;
}

export const Planet: FC<PlanetProps> = ({ orbitRadius, speed, scene }) => {
	const ref = useRef<Mesh>(null);

	useFrame(({ clock }) => {
		if (ref.current) {
			const [x, y, z] = computeOrbitPosition(clock.getElapsedTime(), orbitRadius, speed);
            ref.current.position.set(x, y, z);
	    }
	});

	return (
		<mesh ref={ref}>
			<Suspense fallback={"Loading..."}>
				<primitive object={scene} />
			</Suspense>
		</mesh>
	);
}
