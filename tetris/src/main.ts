import * as THREE from 'three';
import MainScene from './Scene/MainScene';

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


// Scene 
const scene = new THREE.Scene;

renderer.render(scene, camera);