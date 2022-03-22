import * as THREE from 'three';
import ObjectFactory from '../../ObjectFactory';

class TetrominoZ extends THREE.Mesh {
	private readonly scene = new THREE.Scene;
	private readonly Color = 0xaf0f33; // Scarlet

	constructor(scene: THREE.Scene) {
		super();
		this.scene = scene;
	}

	create() {
		const cube = new ObjectFactory(this.scene);

		cube.createCube(this.Color, 10, 1.5, 0);
		cube.createCube(this.Color, 11, 1.5, 0);
		cube.createCube(this.Color, 11, 0.5, 0);
		cube.createCube(this.Color, 12, 0.5, 0);
	
		this.scene.add(cube);
	}
}

export default TetrominoZ;