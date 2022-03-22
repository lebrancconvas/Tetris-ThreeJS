import * as THREE from 'three';
import ObjectFactory from '../ObjectFactory';

class TetrominoJ extends THREE.Mesh {
	private readonly scene = new THREE.Scene;
	private readonly Color = 0xad32ff; // Violet 

	constructor(scene: THREE.Scene) {
		super();
		this.scene = scene;
	}

	create() {
		const cube = new ObjectFactory(this.scene);

		cube.createCube(this.Color, 7, 0.5, 0);
		cube.createCube(this.Color, 8, 0.5, 0);
		cube.createCube(this.Color, 8, 1.5, 0);
		cube.createCube(this.Color, 8, 2.5, 0);
	
		this.scene.add(cube);
	}
}

export default TetrominoJ;