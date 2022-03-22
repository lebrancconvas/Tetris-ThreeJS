import * as THREE from 'three';
import ObjectFactory from '../ObjectFactory';

// Create Mesh and then add mesh to Scene. 

class TetrominoO extends THREE.Mesh {
	private readonly scene = new THREE.Scene;
	private readonly Color = 0x00f0ff;

	constructor(scene: THREE.Scene) {
		super();
		this.scene = scene;
	}

	create() {
		const cube1 = new ObjectFactory(this.scene);
		cube1.createCube(this.Color, -5, 0.5, 0);

		const cube2 = new ObjectFactory(this.scene);
		cube1.createCube(this.Color, -5, 1.5, 0);

		const cube3 = new ObjectFactory(this.scene);
		cube1.createCube(this.Color, -6, 0.5, 0);
		
		const cube4 = new ObjectFactory(this.scene);
		cube1.createCube(this.Color, -6, 1.5, 0);
	
		this.scene.add(cube1, cube2, cube3, cube4);
	}
}

export default TetrominoO;