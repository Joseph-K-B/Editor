// Author @patriciogv ( patriciogonzalezvivo.com ) - 2015

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265358979323846

uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uTime;

varying vec2 vUv;

vec2 rotate2D (vec2 _st, float _angle) {
  _st -= 0.5;
  _st = mat2(
    cos(_angle), - sin(_angle),
    sin(_angle), cos(_angle)
  ) * _st;
  _st += 0.5;
  return _st;
}

vec2 tile (vec2 _st, float _zoom) {
  _st *= _zoom;
  return fract(_st);
}

vec2 rotateTilePattern(vec2 _st) {
  //Scale coords by 2 x 2
  _st *= 2.0;

  //index each cell according to pos
  float index = 0.0;
  index += step(1.0, mod(_st.x, 2.0));
  index += step(1.0, mod(_st.y, 2.0)) * 2.0;

  //make each cell between 0.0 and 1.0
  _st = fract(_st);

  //Rotate according to index
  if(index == 1.0){
    // cell 1 by 90
    _st = rotate2D(_st, PI * 0.5);
  } else if(index == 2.0) {
    // -90
    _st = rotate2D(_st, PI * -0.5);
  } else if(index == 3.0) {
    // 180
    _st = rotate2D(_st, PI);
  }

  return _st;
}

void main (void) {
  vec2 st = vUv;
  st = tile(st, 3.0);
  st = rotateTilePattern(st);

  // st = tile(st, 2.0);
  // st = rotate2D(st,-PI*u_time*0.25);
  // st = rotateTilePattern(st*2.);
  // st = rotate2D(st,PI*u_time*0.25);

  gl_FragColor = vec4(vec3(step(st.x, st.y)), 1.0);
}