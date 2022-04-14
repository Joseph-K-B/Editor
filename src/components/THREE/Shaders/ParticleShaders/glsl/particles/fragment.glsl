uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;

varying vec2 vUv;

void main(){

  gl_FragColor = vec4(vUv, 1.0, 1.0); 
}