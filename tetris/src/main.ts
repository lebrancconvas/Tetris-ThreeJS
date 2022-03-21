import * as THREE from 'three';
import MainScene from './Scene/MainScene';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

import TetrominoO from './GameObject/Tetrominoes/TetrominoO';
import TetrominoS from './GameObject/Tetrominoes/TetrominoS';
import TetrominoI from './GameObject/Tetrominoes/TetrominoI';
import TetrominoL from './GameObject/Tetrominoes/TetrominoL';
import TetrominoT from './GameObject/Tetrominoes/TetrominoT';
import TetrominoJ from './GameObject/Tetrominoes/TetrominoJ';
import TetrominoZ from './GameObject/Tetrominoes/TetrominoZ';

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
// Texture Credit: https://pixabay.com/photos/gameboy-tetris-nintendo-5759550
const textureLoader = new THREE.TextureLoader();
const texturePath = 'assets/image/background/Gameboy.jpeg';
textureLoader.load(texturePath, texture => {
  scene.background = texture;
})

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
const listener = new THREE.AudioListener();
camera.add(listener);

const audioLoader = new THREE.AudioLoader();

const bgm = new THREE.Audio(listener);

audioLoader.load('assets/audio/BGM/Tetris_Theme.mp3', buffer => {
  bgm.setBuffer(buffer);
  bgm.setLoop(true);
  bgm.setVolume(0.3);
});

function draw() {
  renderer.render(scene, camera);
  requestAnimationFrame(draw);
}

draw();