import * as THREE from 'three';
import ObjectFactory from '../ObjectFactory';

// Create Mesh and then add mesh to Scene. 

class TetrominoS extends THREE.Mesh {
	private readonly scene = new THREE.Scene;
	private readonly Color = 0x0000ff; // Blue

	constructor(scene: THREE.Scene) {
		super();
		this.scene = scene;
	}

	create() {
		const cube = new ObjectFactory(this.scene);

		cube.createCube(this.Color, 3, 0.5, 0);
		cube.createCube(this.Color, 4, 0.5, 0);
		cube.createCube(this.Color, 4, 1.5, 0);
		cube.createCube(this.Color, 5, 1.5, 0);
	
		this.scene.add(cube);
	}
}

export default TetrominoS;