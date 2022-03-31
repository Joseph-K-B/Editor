// Author @patriciogv - 2015

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265358979323846

uniform vec2 uMouse;
uniform vec2 uResolution;
uniform float uTime;

varying vec2 vUv;

vec2 rotate2D(vec2 _st, float _angle) {
  _st -= 0.5;
  _st = mat2(
    cos(_angle), - sin (_angle),
    sin(_angle), cos(_angle)
  ) * _st;
  _st += 0.5;
  return _st;
}

mat2 scale(vec2 _scale) {
  return mat2(
    _scale.x, 0.0,
    0.0, _scale.y
  );
}

mat3 yuv2rgb = mat3 (
  1.0, 0.0, 1.13983,
  1.0, -0.39465, -0.58060,
  1.0, 2.03211, 0.0
);

mat3 rgb2yuv = mat3 (
    0.2126, 0.7152, 0.0722, 
    -0.09991, -0.33609, 0.43600, 
    0.615, -0.5586, -0.05639
  );

vec2 tile(vec2 _st, float _zoom) {
  _st *= _zoom;
  return fract(_st);
}

vec2 brickTile(vec2 _st, float _zoom) {
  _st *= _zoom;

  //Offset odd rows
  _st.x += step(1.0, mod(_st.y, 2.0)) * 0.5;
  // _st.y += step(1.0, mod(_st.x, 2.0)) * (uTime * 0.5);

  return fract(_st);
}

float box(vec2 _st, vec2 _size) {
  _size = vec2(0.5) - _size * 0.5;
  vec2 uv = smoothstep(_size, _size+vec2(1e-4), _st);
  uv *= smoothstep(_size, _size+vec2(1e-4),vec2(1.0)-_st);
  return uv.x * uv.y;
  
}

// float box(vec2 _st, vec2 _size, float _smoothEdges) {
//   _size = vec2(0.5) - _size * 0.5;
//   vec2 aa = vec2(_smoothEdges * 0.5);
//   vec2 uv = smoothstep(_size, _size+aa, _st);
//   uv *= smoothstep(_size, _size+aa,vec2(1.0)-_st);
//   return uv.x * uv.y;
  
// }

float circle(in vec2 _st, in float _radius) {
  vec2 l = _st-vec2(0.5);
  return 1.0 - smoothstep(
    _radius - (_radius * 0.01),
    _radius + (_radius * 0.01),
    dot( l, l) * 4.0
  );
}



void main() {
  vec2 st = vUv;
  vec3 color = vec3(0.0);

  // color = yuv2rgb * vec3(0.5, st.x, st.y);

  // st -= 0.5;
  // st *= 2.0;
  // st = scale( vec2(sin(uTime) + 1.0) ) * st;

  //Scale up space by 3
  // st *= 3.0;

  //Divide space by 4
  // st = tile(st, 4.0);

  //Use matrix to rotate space 45 degrees
  // st = rotate2D(st, PI * 0.25);

  //Draw
  st /= vec2(2.15, 0.65) / 1.5;
  st = brickTile(st, 5.0);
  color = vec3(box(st, vec2(0.9)));
  // st = fract(st);
  // color = vec3(circle(st, 0.5));
  // color = vec3(st, 0.0);

  // color = vec3(box(st, vec2(0.7), 0.01));
  // color = vec3(st, 0.0);

  gl_FragColor = vec4(color, 1.0);
}