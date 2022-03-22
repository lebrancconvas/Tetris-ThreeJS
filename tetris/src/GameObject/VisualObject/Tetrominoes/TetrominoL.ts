import * as THREE from 'three';
import ObjectFactory from '../ObjectFactory';

class TetrominoL extends THREE.Mesh {
	private readonly scene = new THREE.Scene;
	private readonly Color = 0x057812;

	constructor(scene: THREE.Scene) {
		super();
		this.scene = scene;
	}

	create() {
		const cube1 = new ObjectFactory(this.scene);
		cube1.createCube(this.Color, -9, 0.5, 0);

		const cube2 = new ObjectFactory(this.scene);
		cube1.createCube(this.Color, -9, 1.5, 0);

		const cube3 = new ObjectFactory(this.scene);
		cube1.createCube(this.Color, -9, 2.5, 0);
		
		const cube4 = new ObjectFactory(this.scene);
		cube1.createCube(this.Color, -8, 0.5, 0);
	
		this.scene.add(cube1, cube2, cube3, cube4);
	}
}

export default TetrominoL;