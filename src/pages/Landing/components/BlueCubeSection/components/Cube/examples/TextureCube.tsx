import { useRef, useEffect } from "react";
import Nick from "../assets/nick.jpg";
import * as THREE from "three";

export const TextureCube = () => {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current?.appendChild(renderer.domElement);

    // Create a simple cube and add it to the scene
    const geometry = new THREE.BoxGeometry();

    const textureLoader = new THREE.TextureLoader();
    const texture1 = textureLoader.load(Nick); // Первая текстура

    const materials = [
      new THREE.MeshStandardMaterial({ map: texture1 }), // Front
      new THREE.MeshStandardMaterial({ map: texture1 }), // Back
      new THREE.MeshStandardMaterial({ map: texture1 }), // Top
      new THREE.MeshStandardMaterial({ map: texture1 }), // Bottom
      new THREE.MeshStandardMaterial({ map: texture1 }), // Right
      new THREE.MeshStandardMaterial({ map: texture1 }), // Left
    ];

    const cube = new THREE.Mesh(geometry, materials);

    scene.add(cube);

    // Position the camera
    camera.position.z = 2;

    // Add light
    const light = new THREE.PointLight(0xffffff, 15);

    light.position.set(0, 0, 3);
    scene.add(light);

    // Cube rotation
    cube.rotation.x = Math.PI / 4;
    cube.rotation.y = Math.PI / 4;

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={sceneRef} />;
};
