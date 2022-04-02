uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform float uSize;

attribute float aScale;

varying vec2 vUv;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  gl_PointSize = uSize * aScale;
  vUv = uv;
}