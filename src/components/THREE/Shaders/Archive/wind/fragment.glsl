uniform float uNoiseScale;
uniform float uNoiseStrength;

uniform vec3 uColorA;
uniform vec3 uColorB;

varying vec3 vPos;

vec4 main() {
  float n = lamina_noise_perlin(vPos * uNoiseScale) * uNoiseStrength;

  vec3 c = mix(uColorB, uColorA, n);
  return vec4(vec3(c), 1.);
}

