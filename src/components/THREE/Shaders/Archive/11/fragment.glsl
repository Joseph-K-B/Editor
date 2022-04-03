uniform float uTime;
uniform vec2 uMouse;

varying vec2 vUv;

void main() {
  vec2 st = vUv;
  vec2 a = vec2(0.0);

  a = vUv += uMouse;

  gl_FragColor = vec4(vUv, 1.0, 1.0);
}