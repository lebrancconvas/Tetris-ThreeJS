import * as THREE from 'three';

class Audio extends THREE.Audio {
	readonly listener = new THREE.AudioListener; 

	constructor(listener: THREE.AudioListener) {
		super(listener);
	}
}

class BGM {
	private audioLoader = new THREE.AudioLoader();
	private bgm = new Audio(new THREE.AudioListener);
	private bgmPath = './assets/audio/BGM/Tetris_Theme.mp3';

	bgmLoad() {
		this.audioLoader.load(this.bgmPath, buffer => {
			this.bgm.setBuffer(buffer);
			this.bgm.setLoop(true);
			this.bgm.setVolume(0.3); 
		})
	}
}

export default BGM;