import * as THREE from 'three';
import ObjectFactory from '../../ObjectFactory';

class TetrominoL extends THREE.Mesh {
	private readonly scene = new THREE.Scene;
	private readonly Color = 0x057812; // Grass 

	constructor(scene: THREE.Scene) {
		super();
		this.scene = scene;
	}

	create() {
		const cube = new ObjectFactory(this.scene);

		cube.createCube(this.Color, -9, 0.5, 0);
		cube.createCube(this.Color, -9, 1.5, 0);
		cube.createCube(this.Color, -9, 2.5, 0);
		cube.createCube(this.Color, -8, 0.5, 0);
	
		this.scene.add(cube);
	}
}

export default TetrominoL;