import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

import {TetrominoO, TetrominoS, TetrominoI, TetrominoL, TetrominoT, TetrominoJ, TetrominoZ} from './GameObject/VisualObject/Tetrominoes';

import ShapeFactory from './GameObject/VisualObject/ShapeFactory';

import BGM from './GameObject/AudioObject/BGM';

import BackgroundTexture from './GameObject/VisualObject/BackgroundTexture';

// Setting
const Settings = {
  WIDTH: window.innerWidth,
  HEIGHT: window.innerHeight,
  FIELDOFVIEW: 60,
  NEARPLANE: 0.1,
  FARPLANE: 1000
};
const aspect = Settings.WIDTH / Settings.HEIGHT;
const π = Math.PI;
console.log(π);

// Renderer 
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('app') as HTMLCanvasElement
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(Settings.WIDTH, Settings.HEIGHT);

// Camera 
const camera = new THREE.PerspectiveCamera(Settings.FIELDOFVIEW, aspect, Settings.NEARPLANE, Settings.FARPLANE);

camera.position.set(0, 2, 16);
camera.lookAt(0, 0, 0);

// Scene 
const scene = new THREE.Scene;

// Background Texture 
const texture = new BackgroundTexture(scene);
texture.textureLoading('./assets/image/background/Gameboy.jpeg'); 

// Grid
// const grid = new THREE.GridHelper(4, 12, 0x888888, 0x444444);
// scene.add(grid);

// Orbital Controls
const control = new OrbitControls(camera, renderer.domElement);
control.autoRotate = true;

// 3D Object

const Tetrominoes = [
  new TetrominoT(scene), 
  new TetrominoS(scene), 
  new TetrominoI(scene), 
  new TetrominoO(scene), 
  new TetrominoL(scene), 
  new TetrominoJ(scene), 
  new TetrominoZ(scene)
];

Tetrominoes.map(Tetromino => {
  Tetromino.create();
})

// 2D Object 
// const square = new THREE.Shape();
// square.moveTo(0, 9);
// square.lineTo(0, 10);
// square.lineTo(1, 10);
// square.lineTo(1, 9);

// const geometry = new THREE.ShapeGeometry(square);

// const material = new THREE.MeshBasicMaterial({
//   color: 0xff0f00,
//   side: THREE.DoubleSide,
//   depthWrite: false
// });

// const mesh = new THREE.Mesh(geometry, material);

// scene.add(mesh);

const square2D = new ShapeFactory(scene);
square2D.createSquare(0x0000ff, 5, 5, 1, 1);
square2D.createSquare(0x0000ff, 5, 6, 1, 1);
square2D.createSquare(0x0000ff, 6, 6, 1, 1);
square2D.createSquare(0x0000ff, 4, 6, 1, 1);

// Add Sound. 
const backgroundmusic = new BGM();
backgroundmusic.bgmLoad();

// Let the scene animated. 
function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();