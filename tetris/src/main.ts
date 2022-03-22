import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

import {TetrominoO, TetrominoS, TetrominoI, TetrominoL, TetrominoT, TetrominoJ, TetrominoZ} from './GameObject/VisualObject/Tetrominoes';

import BGM from './GameObject/AudioObject/BGM';

import BackgroundTexture from './GameObject/VisualObject/BackgroundTexture';

// Setting
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const aRatio = WIDTH / HEIGHT;
const π = Math.PI;
console.log(π);

// Renderer 
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('app') as HTMLCanvasElement
});

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(WIDTH, HEIGHT);

// Camera 
const camera = new THREE.PerspectiveCamera(60, aRatio, 0.1, 1000);

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
console.log(control);

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

// Add Sound. 
const backgroundmusic = new BGM();
backgroundmusic.bgmLoad();

// Let the scene animated. 
function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();