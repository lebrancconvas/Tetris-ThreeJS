import * as THREE from 'three';

// Create Mesh and then add mesh to Scene. 

class TetrominoI extends THREE.Mesh {
	private readonly scene = new THREE.Scene;
	private readonly Color = 0x00ff00;

	constructor(scene: THREE.Scene) {
		super();
		this.scene = scene;
	}

	create() {
		const cube1 = new THREE.Mesh(
			new THREE.BoxGeometry(),
			new THREE.MeshBasicMaterial({color: this.Color})
		);
		cube1.position.x = -3;
		cube1.position.y = 0.5;
	
		const cube2 = new THREE.Mesh(
			new THREE.BoxGeometry(),
			new THREE.MeshBasicMaterial({color: this.Color})
		);
		cube2.position.x = -3;
		cube2.position.y = 1.5;
	
		const cube3 = new THREE.Mesh(
			new THREE.BoxGeometry(),
			new THREE.MeshBasicMaterial({color: this.Color})
		);
		cube3.position.x = -3;
		cube3.position.y = 2.5;
	
		const cube4 = new THREE.Mesh(
			new THREE.BoxGeometry(),
			new THREE.MeshBasicMaterial({color: this.Color})
		);
		cube4.position.x = -3;
		cube4.position.y = 3.5;
	
		this.scene.add(cube1, cube2, cube3, cube4);
	}
}

export default TetrominoI;