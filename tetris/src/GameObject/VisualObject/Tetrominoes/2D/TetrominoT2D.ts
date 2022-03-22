import * as THREE from 'three';
import ShapeFactory from '../../ShapeFactory';

class TetrominoT2D extends THREE.Mesh {
	private readonly scene = new THREE.Scene();
	private readonly Color = 0x0000ff;

	constructor(scene: THREE.Scene) {
		super();
		this.scene = scene;
	}

	createRect() {
		const rect = new ShapeFactory(this.scene);
		rect.createSquare(this.Color, 5, 5, 1, 1);
		rect.createSquare(this.Color, 4, 6, 1, 1);
		rect.createSquare(this.Color, 5, 6, 1, 1);
		rect.createSquare(this.Color, 6, 6, 1, 1);
	}
}

export default TetrominoT2D;