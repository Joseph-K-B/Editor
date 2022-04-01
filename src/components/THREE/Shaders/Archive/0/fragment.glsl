uniform float uTime;

varying vec2 vUv;

void main() {
  vec2 st = vUv;

  gl_FragColor = vec4(st, 1.0, 1.0);
}