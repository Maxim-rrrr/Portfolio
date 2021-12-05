import*as THREE from"https://cdn.skypack.dev/three@0.124.0";import{GUI}from"https://threejsfundamentals.org/threejs/../3rdparty/dat.gui.module.js";import{images,scrollTime}from"./config.js";import{Animation,AnimationMix}from"./animation.js";const canvas=document.querySelector("#c"),coordMouse={x:canvas.clientWidth/2,y:canvas.clientHeight/2};window.addEventListener("mousemove",e=>{coordMouse.x=e.x,coordMouse.y=e.y});const renderer=new THREE.WebGLRenderer({canvas:canvas}),fov=40,aspect=2,near=.1,far=1e3,camera=new THREE.PerspectiveCamera(40,2,.1,1e3);camera.position.set(0,0,15);const scene=new THREE.Scene;scene.position.set(0,-8,-10);const loader=new THREE.TextureLoader,imagesObj=[],imagesPlane=new THREE.Object3D;function createPlane(e,t=0,n=0,i=0){const o=new MarvinImage;o.load(e,()=>{const a=10/o.getWidth()*o.getHeight(),r=new THREE.PlaneGeometry(10,a,50,50),s=loader.load(e),l=new THREE.MeshPhongMaterial({map:s}),c=new THREE.Mesh(r,l);c.position.set(t,n,i),imagesObj.push(c),imagesPlane.add(c)})}let lightAmbient;imagesPlane.position.set(0,0,-6),imagesPlane.rotation.x=-1,imagesPlane.rotation.y=0,scene.add(imagesPlane),images.forEach((e,t)=>{createPlane(e,0,-10*t)});{const e=16777215,t=0;lightAmbient=new THREE.AmbientLight(e,t),scene.add(lightAmbient)}const lightSphere=new THREE.Object3D;lightSphere.position.set(3,0,5),scene.add(lightSphere);{const e=new THREE.SphereGeometry(.02,10,10),t=new THREE.MeshBasicMaterial({color:16777215}),n=new THREE.Mesh(e,t);lightSphere.add(n)}let lightPoint;{const e=16777215,t=.1;(lightPoint=new THREE.PointLight(e,t)).position.set(-1,0,-4),lightSphere.add(lightPoint)}const startAnimation=new AnimationMix(new Animation(lightAmbient).to({intensity:.1},1500,100,"ln"),new Animation(imagesPlane.position).to({z:6},1500,100,"ln"));startAnimation.start();const scrollDown=new AnimationMix(new Animation(imagesPlane.position).to({y:10},scrollTime,100,"ln"),new Animation(scene.rotation).to({x:.5},.5*scrollTime,100,"lineDown").to({x:-.5},2*scrollTime,100,"lineDown")),scrollUp=scrollDown.reverse(),startScrollDown=new AnimationMix(new Animation(imagesPlane.rotation).to({x:1,y:1},scrollTime,100,"ln"),new Animation(scene.rotation).to({x:-.4},.4*scrollTime,100,"ln").to({x:.4},2*scrollTime,100,"ln"),new Animation(scene.position).to({x:canvas.clientWidth>900?-3.5:0,y:8,z:10},scrollTime,100,"ln"),new Animation(lightSphere.position).to({z:-3},scrollTime,100,"ln"),new Animation(lightPoint).to({intensity:canvas.clientWidth>900?1.3:.7},scrollTime,100,"ln")),startScrollUp=startScrollDown.reverse(),endScrollDown=new AnimationMix(new Animation(lightSphere.position).to({x:-15,y:-7},.5*scrollTime,100,"lineUp")),endScrollUp=new AnimationMix(new Animation(lightSphere.position).to({x:15,y:7},.5*scrollTime,100,"lineDown"));export function imagesScrollDown(){scrollDown.start()}export function imagesScrollUp(){scrollUp.start()}export function startImagesScrollDown(){startScrollDown.start()}export function startImagesScrollUp(){startScrollUp.start()}export function endImagesScrollDown(){scrollDown.start(),endScrollDown.start()}export function endImagesScrollUp(){scrollUp.start(),endScrollUp.start()}function resizeRendererToDisplaySize(e){const t=e.domElement,n=window.devicePixelRatio,i=t.clientWidth*n|0,o=t.clientHeight*n|0,a=t.width!==i||t.height!==o;return a&&e.setSize(i,o,!1),a}let cam_z_start=camera.position.z,cam_y_start=camera.position.y;function render(e){if(e*=.001,resizeRendererToDisplaySize(renderer)){const e=renderer.domElement;camera.aspect=e.clientWidth/e.clientHeight,camera.updateProjectionMatrix()}imagesObj.forEach(t=>{for(var n=0;n<t.geometry.vertices.length;n++)t.geometry.vertices[n].z=Math.sin((n+3*e)/2)/7;t.geometry.verticesNeedUpdate=!0});{let e=1,t=camera.position.z-cam_z_start,n=2*-e*(coordMouse.x-canvas.clientWidth/2)/canvas.clientWidth;camera.position.z+=(n-t)/(2*e)/50}{let e=.3,t=camera.position.y-cam_y_start,n=2*-e*(coordMouse.y-canvas.clientHeight/2)/canvas.clientHeight;camera.position.y+=(n-t)/(2*e)/50}renderer.render(scene,camera),requestAnimationFrame(render)}requestAnimationFrame(render);