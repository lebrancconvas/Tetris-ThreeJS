import * as THREE from 'three';
import { Mesh } from 'three';

enum ColorType {
	BLUE = 0x0000ff
}

class ShapeFactory extends THREE.Mesh {
	private readonly scene = new THREE.Scene;
	// private readonly Color = 0x0000ff;

	constructor(scene: THREE.Scene) {
		super();
		this.scene = scene;
	}

	createSquare(Color: ColorType, x1: number, y1: number, width: number, height: number) {
		const square = new THREE.Shape();

		square.moveTo(x1, y1);
		square.lineTo(x1, y1 + height);
		square.lineTo(x1 + width, y1 + height);
		square.lineTo(x1 + width, y1);

		const MeshSettings = {
			color: Color,
			side: THREE.DoubleSide,
			depthWrite: false
		}; 

		const geometry = new THREE.ShapeGeometry(square);
		const material = new THREE.MeshBasicMaterial(MeshSettings);
		const mesh = new THREE.Mesh(geometry, material);

		this.scene.add(mesh);
	}

	createCircle() {
		const circle = new THREE.Shape();
	}

	createTriangle() {
		const triangle = new THREE.Shape();
	}
}

export default ShapeFactory;