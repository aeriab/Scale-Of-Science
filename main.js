import scene from './js/scene.js';
import camera from './js/camera.js';
import renderer from './js/renderer.js';
import Cube from './js/Cube.js';

const cube = new Cube(scene);

function animate() {
    requestAnimationFrame(animate);
    cube.update();
    renderer.render(scene, camera);
}

animate();
