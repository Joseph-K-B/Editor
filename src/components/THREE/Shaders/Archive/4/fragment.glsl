// Author @patriciogv ( patriciogonzalezvivo.com ) - 2015

#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 uResolution;
uniform float uTime;

varying vec2 vUv;

mat2 rotate2d(float _angle) {
  return mat2(
    cos(_angle), -sin(_angle),
    sin(_angle), cos(_angle)
  );
}

mat2 scale(vec2 _scale) {
  return mat2(
    _scale.x, 0.0,
    0.0, _scale.y
    );
}

// Check YUV for interesting color profile change 
// different encoding system takes human perception into account

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

float box(in vec2 _st, in vec2 _size) {
  _size = vec2(0.5) - _size * 0.5;
  vec2 uv = smoothstep(
    _size,
    _size + vec2(0.001),
    _st
  );
  uv *= smoothstep(
    _size,
    _size + vec2(0.001),
    vec2(1.0) - _st
    );
    return uv.x * uv.y;
}

float crosscolor(in vec2 _st, float _size) {
  return box(_st, vec2(_size, _size / 4.0)) +
  box(_st, vec2(_size/4.0, _size));
}

// void main() {
//   vec2 st = vUv.xy;
//   vec3 color = vec3(0.0);

//   //To move cross move space
//   // vec2 translate = vec2(cos(uTime), sin(uTime));
//   // st += (translate * 0.35);

//   //move space from center(vec2(0.5)) to bottom(vec2(0.0))
//   st -= vec2(0.5);
//   //rotate the space from 0.0 position
//   st = rotate2d( sin(uTime) * PI) * st;
//   //move cross back to center vUv
//   //The equivalent of pushing and popping matrices on sinus wave to shrink/grow
//   st = scale( vec2(sin(uTime) + 1.0) ) * st;

//   st += vec2(0.5);

  
//   //Show the coords of the space in bg
//   color = vec3(st.x, st.y, 0.0);

//   // Add shape to foreground
//   // color += vec3(cross(st, 0.25));
//   // color += vec3(cross(st, 0.4));
//   color += vec3(cross(st, 0.2));

//   gl_FragColor = vec4(color, 1.0);
// }



  void main() {
    vec2 st = vUv.xy;
    vec3 color = vec3(0.0);

    st -= 0.5;
    st *= 2.0;

    color = yuv2rgb * vec3(0.5, st.x, st.y);

    gl_FragColor = vec4(color, 1.0);
  }

