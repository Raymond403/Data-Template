let camera, scene, renderer;

function init() {
  const container = document.createElement('div');
  document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);
  camera.position.set(500, 500, 1500);

  scene = new THREE.Scene();

  renderer = new THREE.CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  createElements();
  animate();

  window.addEventListener('resize', onWindowResize);
}

function createElements() {
  for (let i = 0; i < 100; i++) {
    const element = document.createElement('div');
    element.style.width = '100px';
    element.style.height = '120px';
    element.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    element.style.border = '1px solid #ccc';
    element.textContent = `Item ${i + 1}`;

    const object = new THREE.CSS3DObject(element);
    object.position.x = Math.random() * 4000 - 2000;
    object.position.y = Math.random() * 4000 - 2000;
    object.position.z = Math.random() * 4000 - 2000;

    scene.add(object);
  }
}

function switchToLayout(layout) {
  console.log(`Switching to layout: ${layout}`);
  // Add your layout switching logic here
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

init();