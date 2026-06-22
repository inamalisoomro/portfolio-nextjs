'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check for WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Isolate variables for clean up
    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;

    // Create scene with clear background
    scene = new THREE.Scene();

    // Camera setup
    camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Create renderer
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Group to hold all 3D mesh elements for easier mouse rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Create Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xa5b4fc, 1.2); // Indigo tint
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 1); // Sky blue tint
    dirLight2.position.set(-5, -5, 5);
    scene.add(dirLight2);

    const softLight = new THREE.PointLight(0xffffff, 1, 10);
    softLight.position.set(0, 0, 3);
    scene.add(softLight);

    // Centerpiece: A complex geometric mesh
    // We combine a wireframe Icosahedron with a smooth physical Icosahedron
    const geoOuter = new THREE.IcosahedronGeometry(1.8, 1);
    const matOuter = new THREE.MeshBasicMaterial({
      color: 0x6366f1, // Indigo
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const outerMesh = new THREE.Mesh(geoOuter, matOuter);
    mainGroup.add(outerMesh);

    // Inner morphing mesh (glassmorphism look with physical material)
    const geoInner = new THREE.IcosahedronGeometry(1.2, 2);
    const matInner = new THREE.MeshPhysicalMaterial({
      color: 0xfdfdfd,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.6, // Glass transparency
      thickness: 1.5,
      ior: 1.5,
      transparent: true,
      opacity: 0.8,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(geoInner, matInner);
    mainGroup.add(innerMesh);

    // Floating Particles Field
    const particleCount = 180;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Create random coordinate inside a sphere
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.5 + Math.random() * 3.5; // distance from center

      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    // Create soft custom round texture for particles
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x4f46e5, // Slate Indigo
      size: 0.12,
      map: particleTexture,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Mouse movement state
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates (-1 to 1)
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle Resize
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const entry = entries[0];
      const newWidth = entry.contentRect.width || container.clientWidth;
      const newHeight = entry.contentRect.height || container.clientHeight;

      if (camera && renderer) {
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    });

    resizeObserver.observe(container);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow elegant default rotation
      mainGroup.rotation.y = elapsedTime * 0.15;
      mainGroup.rotation.x = elapsedTime * 0.08;

      // Subtle dynamic geometry manipulation for organic breathing
      const time = elapsedTime * 1.5;
      
      // Let's slightly scale and morph the outer wireframe too
      const pulse = 1 + Math.sin(time) * 0.04;
      outerMesh.scale.set(pulse, pulse, pulse);

      // Smooth mouse follow interaction (lerping)
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      mainGroup.position.x = mouse.x * 0.8;
      mainGroup.position.y = mouse.y * 0.8;
      
      // Rotate group slightly towards cursor
      mainGroup.rotation.x += mouse.y * 0.3;
      mainGroup.rotation.y += mouse.x * 0.3;

      // Particle system movement
      particles.rotation.y = elapsedTime * -0.05;
      particles.rotation.z = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up function on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Dispose resources
      geoOuter.dispose();
      matOuter.dispose();
      geoInner.dispose();
      matInner.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    // Beautiful pure CSS animated SVG canvas fallback in case WebGL is blocked or unsupported in iframe
    return (
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center bg-[#fafafa] dark:bg-[#0F0F0E] transition-colors duration-305">
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-indigo-100 dark:bg-indigo-955/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-sky-100 dark:bg-sky-955/20 rounded-none mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700" />
        <div className="relative w-80 h-80 flex items-center justify-center opacity-60">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-spin [animation-duration:40s] text-indigo-505/10 dark:text-indigo-400/5">
            <path fill="currentColor" d="M40.1,-63C53,-57.8,65.3,-48.5,73.1,-35.8C80.8,-23,83.9,-6.8,81.4,8.4C78.9,23.6,70.7,37.8,59.8,48.2C48.9,58.7,35.2,65.4,20.8,69.5C6.4,73.6,-8.8,75.1,-23.4,72C-38,68.9,-51.9,61.1,-61.8,49.8C-71.7,38.5,-77.6,23.7,-79.8,8.2C-82,-7.3,-80.5,-23.5,-73,-36C-65.5,-48.5,-52,-57.3,-38.3,-62C-24.6,-66.6,-12.3,-67.2,0.6,-68C13.5,-68.9,27.1,-68.2,40.1,-63Z" transform="translate(100 100)" />
          </svg>
          <div className="absolute p-8 glass-panel rounded-full border border-slate-205 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50">
            <div className="w-16 h-16 rounded-full border-2 border-indigo-505 border-t-transparent animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="absolute inset-0 w-full h-full select-none" 
      ref={containerRef}
      style={{ pointerEvents: 'none' }}
    />
  );
}
