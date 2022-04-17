uniform float u_pixelRatio;
uniform float u_size;
uniform float u_time;

attribute float aScale;


void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.y += sin(u_time + modelPosition.x * 100.0) * aScale * 0.2;
  modelPosition.z += cos(u_time + modelPosition.x * 100.0) * aScale * 0.2;
  modelPosition.x += cos(u_time + modelPosition.x * 100.0) * aScale * 0.2;
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPostion = projectionMatrix * viewPosition;    
  gl_Position = projectionPostion;
  gl_PointSize = u_size * aScale * u_pixelRatio;
  gl_PointSize *= (1.0 / - viewPosition.z);
}