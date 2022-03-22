import * as THREE from 'three';

enum ObjectColor {
	WHITE = 0xffffff
}

class ObjectFactory extends THREE.Mesh {
	private readonly scene = new THREE.Scene;

	constructor(scene: THREE.Scene) {
		super();
		this.scene = scene;
	}

	createCube(colorObject: ObjectColor, xAxis: number, yAxis: number, zAxis: number) {
		const cube = new THREE.Mesh(
			new THREE.BoxGeometry(),
			new THREE.MeshBasicMaterial({color: colorObject})
		)
		cube.position.x = xAxis;
		cube.position.y = yAxis;
		cube.position.z = zAxis;

		this.scene.add(cube);
	}

	createSphere(colorObject: ObjectColor, xAxis: number, yAxis: number, zAxis: number) {
		const sphere = new THREE.Mesh(
			new THREE.SphereGeometry(),
			new THREE.MeshBasicMaterial({color: colorObject})
		)
		sphere.position.x = xAxis;
		sphere.position.y = yAxis;
		sphere.position.z = zAxis;

		this.scene.add(sphere);
	}

	createCone(colorObject: ObjectColor, xAxis: number, yAxis: number, zAxis: number) {
		const cone = new THREE.Mesh(
			new THREE.ConeGeometry(),
			new THREE.MeshBasicMaterial({color: colorObject})
		)
		cone.position.x = xAxis;
		cone.position.y = yAxis;
		cone.position.z = zAxis;

		this.scene.add(cone);
	}

	createTorus(colorObject: ObjectColor, xAxis: number, yAxis: number, zAxis: number) {
		const torus = new THREE.Mesh(
			new THREE.TorusGeometry(),
			new THREE.MeshBasicMaterial({color: colorObject})
		)
		torus.position.x = xAxis;
		torus.position.y = yAxis;
		torus.position.z = zAxis;

		this.scene.add(torus);
	}

	translateObject(xAxis: number, yAxis: number, zAxis: number) {
		this.translateX(xAxis);
		this.translateY(yAxis);
		this.translateZ(zAxis);

		this.scene.add(this);
	}

	rotateObject(xAxis: number, yAxis: number, zAxis: number) {
		this.rotateX(xAxis);
		this.rotateY(yAxis);
		this.rotateZ(zAxis);

		this.scene.add(this);
	}

	scaleObject(xAxis: number, yAxis: number, zAxis: number) {
		this.scale.x = xAxis;
		this.scale.y = yAxis;
		this.scale.z = zAxis;

		this.scene.add(this);
	}

	// addToScene() {
	// 	this.scene.add(this);
	// }

}

export default ObjectFactory;