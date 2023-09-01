import * as THREE from './node_modules/three/build/three.module.js'
import {GLTFLoader} from './node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {DRACOLoader} from './node_modules/three/examples/jsm/loaders/DRACOLoader.js'
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js'
 
 const canvas = document.getElementById('web')
const scene = new THREE.Scene()
// var loadera = new THREE.TextureLoader();
// loadera.load("./fol.jpg",function(texture){
// scene.background = texture;
// })


const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('./draco/');
dracoLoader.setDecoderConfig({type : 'js'});

let currentModel= null;
const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);


loadModel('gl/casa.glb');
function loadModel(modelUrl){
    if (currentModel){
        scene.remove(currentModel);
    }

   loader.load(modelUrl, (gltf) => {
    currentModel = gltf.scene;
    scene.add(currentModel);
   });
}

function changeModel(modelUrl){
    loadModel(modelUrl);
}

const boton = document.getElementById('mod1');
boton.addEventListener('click', () => {
    changeModel('gl/casa2.glb'); // Cambia al segundo modelo
});
const boton1 = document.getElementById('mod2');
boton1.addEventListener('click', () => {
    changeModel('gl/bob.glb'); // Cambia al segundo modelo
});

const boton2 = document.getElementById('mod3');
boton2.addEventListener('click', () => {
    changeModel('gl/tienda_oxxo.glb'); // Cambia al segundo modelo
});
 

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2,2,5)
scene.add(light)
 

const sizes={
    width: canvas.clientWidth,
    height: canvas.clientHeight
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
camera.position.set(50,1,8)
scene.add(camera)
 
const renderer = new THREE.WebGLRenderer({alpha : true});
renderer.setSize(canvas.clientWidth,canvas.clientHeight);
 
canvas.appendChild(renderer.domElement);


// renderer.setSize(sizes.width,sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
// renderer.shadowMap.enabled = true
// renderer.gammaOuput = true
var controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = 1.0;
//   Para actualizar pantalla automaticamente
//   window.addEventListener('resize',redimencionar);
      
//   function redimencionar(){
//      camera.aspect = canvas.clientWidth / canvas.clientWidth;
//      camera.updateProjectionMatrix();
//      renderer.setSize(canvas.clientWidth,canvas.clientWidth);
//      renderer.render(scene, camera);
//   }
 
    animate();
 
var i=0;
function animate(time){
    requestAnimationFrame(animate)
 
       controls.update(time)
        renderer.render(scene,camera);
    }
    





 
