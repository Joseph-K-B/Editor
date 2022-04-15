varying vec2 vUv;

void main() {
  vec2 st = vec2(gl_PointCoord.x, 1. - gl_PointCoord.y);
  vec2 cUV = 2. * st - 1.;

  vec4 color = vec4(.08 / length(cUV));
  color.rgb = min(vec3(1.), color.rgb);

  csm_DiffuseColor = vec4(color.rgb, color.a * 0.5);
}