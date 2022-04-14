uniform float u_noiseScale;
uniform float u_noiseStrength;

uniform vec3 u_colorA;
uniform vec3 u_colorB;

varying vec3 vPos;

vec4 main() {
  float n = lamina_noise_perlin(vPos * uNoiseScale) * uNoiseStrength;

  vec3 c = mix(uColorB, uColorA, n);
  return vec4(vec3(c), 1.);
}

