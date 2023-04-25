import * as THREE from 'three'
//* Scene
const scene = new THREE.Scene()
//* Create the Sphere
const geometry = new THREE.SphereGeometry(3,64,64)
const material = new THREE.MeshStandardMaterial({color:"00ff83"})
const mesh = new THREE.Mesh(geometry,material)

scene.add(mesh)
//* Add Light


//* Add Camera
const camera = new THREE.PerspectiveCamera(45,800,600)
camera.position.z = 20
scene.add(camera)

const canvas = document.getElementById('canvas')
//* Render this to screen
const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(800,600)
renderer.render(scene,camera)