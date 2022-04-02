
uniform float uTime;


varying vec2 vUv;

voide main() {
  vUv = uv;
  vec3 n = gln_curl(position + uTime * 0.005);
  // n.x = 0.;
  csm_Position = n * 1.5;
}