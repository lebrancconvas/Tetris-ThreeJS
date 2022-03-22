import * as THREE from 'three';
import MainScene from './Scene/MainScene';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

import TetrominoO from './GameObject/VisualObject/Tetrominoes/TetrominoO';
import TetrominoS from './GameObject/VisualObject/Tetrominoes/TetrominoS';
import TetrominoI from './GameObject/VisualObject/Tetrominoes/TetrominoI';
import TetrominoL from './GameObject/VisualObject/Tetrominoes/TetrominoL';
import TetrominoT from './GameObject/VisualObject/Tetrominoes/TetrominoT';
import TetrominoJ from './GameObject/VisualObject/Tetrominoes/TetrominoJ';
import TetrominoZ from './GameObject/VisualObject/Tetrominoes/TetrominoZ';

import BGM from './GameObject/AudioObject/BGM';

import BackgroundTexture from './GameObject/VisualObject/BackgroundTexture';

// Setting
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const aRatio = WIDTH / HEIGHT;

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

// 3D Object
const Tetromino_T = new TetrominoT(scene);
Tetromino_T.create(); 

const Tetromino_S = new TetrominoS(scene);
Tetromino_S.create();

const Tetromino_I = new TetrominoI(scene);
Tetromino_I.create();

const Tetromino_O = new TetrominoO(scene);
Tetromino_O.create();

const Tetromino_L = new TetrominoL(scene); 
Tetromino_L.create();

const Tetromino_J = new TetrominoJ(scene);
Tetromino_J.create();

const Tetromino_Z = new TetrominoZ(scene);
Tetromino_Z.create(); 

// Add Sound. 
const backgroundmusic = new BGM();
backgroundmusic.bgmLoad();

// Let the scene animated. 
function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();