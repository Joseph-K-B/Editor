uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;

#define PI 3.1459265359

varying vec2 vUv;

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

mat2 scale(vec2 _scale){
    return mat2(_scale.x,0.0,
                0.0,_scale.y);
}

float box(in vec2 _st, in vec2 _size){
    _size = vec2(0.5) - _size*0.5;
    vec2 uv = smoothstep(_size,
                        _size+vec2(0.001),
                        _st);
    uv *= smoothstep(_size,
                    _size+vec2(0.001),
                    vec2(1.0)-_st);
    return uv.x*uv.y;
}

float cross(in vec2 _st, float _size){
    return  box(_st, vec2(_size,_size/4.)) +
            box(_st, vec2(_size/4.,_size));
}

// YUV to RGB matrix
mat3 yuv2rgb = mat3(1.0, 0.0, 1.13983,
                    1.0, -0.39465, -0.58060,
                    1.0, 2.03211, 0.0);

// RGB to YUV matrix
mat3 rgb2yuv = mat3(0.2126, 0.7152, 0.0722,
                    -0.09991, -0.33609, 0.43600,
                    0.615, -0.5586, -0.05639);

float plot(vec2 st, float pct) {    
    // return smoothstep(pct-0.02, pct, abs(st.y - st.x)) -
    // return smoothstep(pct-0.02, pct, st.y) -
    return smoothstep(pct-0.02, pct, st.x) -
            smoothstep(pct, pct+0.02, st.y);
}

vec3 colorA = vec3(0.0118, 0.3725, 0.3725);
vec3 colorB = vec3(0.1333, 0.0078, 0.2588);

void main() {
  vec2 st = vUv;
  vec3 color = vec3(0.0);
  vec3 x = vec3(0.0);
  float y = (smoothstep(0.2,0.5,st.x) - smoothstep(0.5,0.8,st.x));
  vec3 z = vec3(1.0);


  vec2 translate = vec2(cos(uTime), sin(uTime));
  st += translate * 0.35;
  st -= vec2(0.5);
  st = rotate2d(sin(uTime) * PI) * st;
  st = scale( vec2(sin(uTime) + 1.0)) * st;
  st += vec2(0.5);

  float pct = plot(st, y);

  x += vec3(cross(st, 0.5));

  z += vec3(cross(vec2(pct, st.y), y));

  z += fract(x * z);
  x += abs(vec3(sin(x * uTime)) * atan(z));

  color = vec3(st.x, st.y, pct);
  vec3 a = mix(colorA, colorB, pct);
  // vec3 b = mix(colorA, colorB, z);
  vec3 b = mix(colorA, colorB, (z * vec3(pct)));
  color += mix(a, b, x);

  // color += yuv2rgb * (smoothstep(0.5, 0.9, color));

  gl_FragColor = vec4(color, 1.0);
}