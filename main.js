import * as THREE from 'three'
//* Scene
const scene = new THREE.Scene()
//* Create the Sphere
const geometry = new THREE.SphereGeometry(3,64,64)
const material = new THREE.MeshStandardMaterial({color:"00ff83"})
const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh)
//* Add Light
const light = new THREE.PointLight(0xfffff,1,100)
light.position.set(0,10,10)
scene.add(light)

//* Add Camera
const camera = new THREE.PerspectiveCamera(45,800/600,0.1,100) // you won't see objects closer than 0.1 and further than 100 thats what the last 2 digits are for
camera.position.z = 10
scene.add(camera)

const canvas = document.getElementById('canvas')
//* Render this to screen
const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(800,600)
renderer.render(scene,camera)