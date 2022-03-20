import * as THREE from 'three';
import MainScene from './Scene/MainScene';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

// Setting
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const aRatio = WIDTH / HEIGHT;

enum ColorTexture {
  SKY = 0x00f0ff,
  RED = 0xff0000,
  GREEN = 0x00ff00,
  BLUE = 0x0000ff
}

// Renderer 
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('app') as HTMLCanvasElement
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(WIDTH, HEIGHT);

// Camera 
const camera = new THREE.PerspectiveCamera(60, aRatio, 0.1, 1000);

camera.position.set(0, 5, 5);
camera.lookAt(0, 0, 0);

// Scene 
const scene = new THREE.Scene;

// Grid
const grid = new THREE.GridHelper(4, 12, 0x888888, 0x444444);
scene.add(grid);

// Orbital Controls
const control = new OrbitControls(camera, renderer.domElement);

// 3D Object
const Tetromino_T = () => {
  const cube1_1 = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshBasicMaterial({color: ColorTexture.RED})
  );
  cube1_1.position.x = 0;
  cube1_1.position.y = 0.5;

  const cube1_2 = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshBasicMaterial({color: ColorTexture.RED})
  );
  cube1_2.position.x = 1;
  cube1_2.position.y = 1.5;
  
  const cube1_3 = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshBasicMaterial({color: ColorTexture.RED})
  );
  cube1_3.position.x = -1;
  cube1_3.position.y = 1.5;

  const cube1_4 = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshBasicMaterial({color: ColorTexture.RED})
  );
  cube1_4.position.x = 0;
  cube1_4.position.y = 1.5;

  scene.add(cube1_1, cube1_2, cube1_3, cube1_4);
}

const Tetromino_S = () => {
  const cube2_1 = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshBasicMaterial({color: ColorTexture.BLUE})
  );
  cube2_1.position.x = 3;
  cube2_1.position.y = 0.5;

  const cube2_2 = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshBasicMaterial({color: ColorTexture.BLUE})
  );
  cube2_2.position.x = 4;
  cube2_2.position.y = 0.5;

  const cube2_3 = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshBasicMaterial({color: ColorTexture.BLUE})
  );
  cube2_3.position.x = 4;
  cube2_3.position.y = 1;

  const cube2_4 = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshBasicMaterial({color: ColorTexture.BLUE})
  );
  cube2_4.position.x = 5;
  cube2_4.position.y = 1;

  scene.add(cube2_1, cube2_2, cube2_3, cube2_4);
}

const Tetromino_I = () => {
  const cube3_1 = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshBasicMaterial({color: ColorTexture.GREEN})
  );
  cube3_1.position.x = -3;
  cube3_1.position.y = 0.5;

  const cube3_2 = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshBasicMaterial({color: ColorTexture.GREEN})
  );
  cube3_2.position.x = -3;
  cube3_2.position.y = 1.5;
  
  const cube3_3 = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshBasicMaterial({color: ColorTexture.GREEN})
  );
  cube3_3.position.x = -3;
  cube3_3.position.y = 2.5;

  const cube3_4 = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshBasicMaterial({color: ColorTexture.GREEN})
  );
  cube3_4.position.x = -3;
  cube3_4.position.y = 2.5;

  scene.add(cube3_1, cube3_2, cube3_3, cube3_4);
}

Tetromino_T();
Tetromino_S();
Tetromino_I();


function draw() {
  renderer.render(scene, camera);
  requestAnimationFrame(draw);
}

draw();