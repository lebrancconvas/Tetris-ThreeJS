import * as THREE from 'three';

class BasicMaterial extends THREE.MeshBasicMaterial {
	constructor(color: any) {
		super();
		this.color = color;
	}
}

export default BasicMaterial;