import * as THREE from 'three'
import './style.css'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
//* Scene
const scene = new THREE.Scene()
//* Create the Sphere
const geometry = new THREE.SphereGeometry(3,64,64)
const material = new THREE.MeshStandardMaterial({color:"00ff83"})
const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh)





//* Add Light
const light = new THREE.PointLight(0xfffff,1,100)
light.position.set(0,10,10) // change this values to show different angles of the sphere to be in view
scene.add(light)

//* Add Camera
const camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,100) // you won't see objects closer than 0.1 and further than 100 thats what the last 2 digits are for
camera.position.z = 20 // change this number to zoom in and out of the sphere
scene.add(camera)

const canvas = document.getElementById('canvas')
//* Render this to screen
const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(window.innerWidth,window.innerHeight)
renderer.render(scene,camera)

//* Controls

const controls = new OrbitControls(camera,canvas)
controls.enableDamping = true

//* Resize
const sizes ={
  width:window.innerWidth,
  height:window.innerHeight
}
//* this event listner runs everytime the screen gets resized so that it doesn't do that thing where half the screen is only rendered
window.addEventListener('resize',()=>{
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  camera.aspect = sizes.width /sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width,sizes.height)
})

//* this function will make sure that its constally being animated
const loop = () => {

  renderer.render(scene,camera)
  window.requestAnimationFrame(loop)
}
loop()