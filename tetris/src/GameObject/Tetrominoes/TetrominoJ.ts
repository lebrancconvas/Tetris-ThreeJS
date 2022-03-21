import * as THREE from 'three';

class TetrominoJ extends THREE.Mesh {
	private readonly scene = new THREE.Scene;
	private readonly Color = 0xad32ff;

	constructor(scene: THREE.Scene) {
		super();
		this.scene = scene;
	}

	create() {
		const cube1 = new THREE.Mesh(
			new THREE.BoxGeometry(),
			new THREE.MeshBasicMaterial({color: this.Color})
		);
		cube1.position.x = 7;
		cube1.position.y = 0.5;
	
		const cube2 = new THREE.Mesh(
			new THREE.BoxGeometry(),
			new THREE.MeshBasicMaterial({color: this.Color})
		);
		cube2.position.x = 8;
		cube2.position.y = 0.5;
	
		const cube3 = new THREE.Mesh(
			new THREE.BoxGeometry(),
			new THREE.MeshBasicMaterial({color: this.Color})
		);
		cube3.position.x = 8;
		cube3.position.y = 1.5;
	
		const cube4 = new THREE.Mesh(
			new THREE.BoxGeometry(),
			new THREE.MeshBasicMaterial({color: this.Color})
		);
		cube4.position.x = 8;
		cube4.position.y = 2.5;
	
		this.scene.add(cube1, cube2, cube3, cube4);
	}
}

export default TetrominoJ;