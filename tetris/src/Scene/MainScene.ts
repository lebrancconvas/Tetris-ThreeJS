import * as THREE from 'three';

class MainScene extends THREE.Scene {
	private readonly camera = new THREE.PerspectiveCamera;

	constructor(camera: THREE.PerspectiveCamera) {
		super();
		this.camera = camera;
	}
}

export default MainScene;