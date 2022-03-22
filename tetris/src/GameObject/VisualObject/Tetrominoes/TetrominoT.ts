import * as THREE from 'three';
import ObjectFactory from '../ObjectFactory';

class TetrominoT extends THREE.Mesh {
	private readonly scene = new THREE.Scene;
	private readonly Color = 0xff0000; // Red

	constructor(scene: THREE.Scene) {
		super();
		this.scene = scene;
	}

	create() {
		const cube = new ObjectFactory(this.scene);

		cube.createCube(this.Color, 0, 0.5, 0);
		cube.createCube(this.Color, -1, 1.5, 0);
		cube.createCube(this.Color, 1, 1.5, 0);
		cube.createCube(this.Color, 0, 1.5, 0);
	
		this.scene.add(cube);
	}
}

export default TetrominoT;