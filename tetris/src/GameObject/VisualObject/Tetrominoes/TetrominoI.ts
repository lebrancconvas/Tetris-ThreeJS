import * as THREE from 'three';
import ObjectFactory from '../ObjectFactory';

// Create Mesh and then add mesh to Scene. 

class TetrominoI extends THREE.Mesh {
	private readonly scene = new THREE.Scene;
	private readonly Color = 0x00ff00; // Green 

	constructor(scene: THREE.Scene) {
		super();
		this.scene = scene;
	}

	create() {
		const cube = new ObjectFactory(this.scene);

		cube.createCube(this.Color, -3, 0.5, 0);
		cube.createCube(this.Color, -3, 1.5, 0);
		cube.createCube(this.Color, -3, 2.5, 0);
		cube.createCube(this.Color, -3, 3.5, 0);
	
		this.scene.add(cube);
	}
}

export default TetrominoI;