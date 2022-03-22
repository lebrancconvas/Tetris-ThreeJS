import * as THREE from 'three';

// const BackgroundLoader = new THREE.TextureLoader();

class BackgroundTexture extends THREE.TextureLoader {
	private readonly scene = new THREE.Scene();
	constructor(scene: THREE.Scene) {
		super();
		this.scene = scene;
	}

	textureLoading(path: string) {
		new BackgroundTexture(this.scene).load(path, texture => {
			this.scene.background = texture;
		})
	}
}

// const BackgroundTexture = (path: string) => {
// 	const scene = new THREE.Scene;
// 	const loader = new BackgroundLoader(scene);
// 	loader.load(path, texture => {
// 		scene.background = texture;
// 	})
// }

export default BackgroundTexture;