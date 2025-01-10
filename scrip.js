import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("scene-container").appendChild(renderer.domElement);

camera.position.z = 5;

const loadAvatar = (url) => {
    const loader = new GLTFLoader();
    loader.load(
        url,
        (gltf) => {
            scene.add(gltf.scene);
            console.log("Avatar loaded successfully!");
        },
        undefined,
        (error) => {
            console.error("Error loading avatar:", error);
        }
    );
};

document.getElementById("load-avatar-btn").addEventListener("click", () => {
    const url = document.getElementById("avatar-url").value.trim();
    if (url) {
        loadAvatar(url);
    } else {
        alert("Please enter a valid URL!");
    }
});

const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
animate();