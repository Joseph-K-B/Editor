
uniform float uTime;
uniform float uSway;
uniform float uLength;
uniform bool uIsCurl;

varying vec3 vPos;

vec3 main() {
  float cover = 0.25;
  vec3 pos = position.xyz;
  vec3 base = vec3(pos.x, pos.y, 0.0);
  vPos = baseGP.xyz;

  vec2 noise = uIsCurl ?
    (lamina_noise_curl(baseGP.xyz * 0.1 + uTime * 0.5 * uSway)).xy
    : vec2(
      lamina_noise_perlin(baseGP.xyz * 0.1 + uTime * 0.5 * uSway),
      lamina_noise_simplex(baseGP.xyz * 0.1 + uTime * 0.5 * uSway)
    );

  noise = smoothstep(-1.0, 1.0, noise);
  float swingX = sin(uTime * 2.0 + noise.x * 2.0 * PI) * pow(pos.z, 2.0);
  float swingY = cos(uTime * 2.0 + noise.x * 2.0 * PI) * pow(pos.z, 2.0);

  pos.x += swingX;
  pos.y += swingY;

  return (pos * uLength);
}