
uniform float u_time;


// varying vec2 vUv;

voide main() {
  vUv = uv;
  vec3 n = gln_curl(position + u_time * 0.005);
  // n.x = 0.;
  csm_Position = n * 1.5;
}