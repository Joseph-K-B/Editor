#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265358979323846

uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uTime;

varying vec2 vUv;

float random (vec2 st) {
  return fract(sin(dot(st.xy,
                      vec2(12.9898,78.2333)))*
        43758.5453678123);
}

// void main() {
//   vec2 st = vUv;
  
//   float rnd = random( st );

//   gl_FragColor = vec4(vec3(rnd),1.0);
// }

// void main() {
//   vec2 st = vUv;

//   st *= 10.0;
//   vec2 ipos = floor(st);
//   vec2 fpos = fract(st);

//   vec3 color = vec3(random( ipos ));

//   // color = vec3(fpos, 0.0);

//   gl_FragColor = vec4(color, 1.0);
// }

vec2 trebuchetPattern(in vec2 _st, in float _index) {
  _index = fract(((_index-0.5)*2.0));
  if (_index > 0.75) {
    _st = vec2(1.0) - _st; 
  } else if (_index > 0.75) {
    _st = vec2(1.0-_st.x,_st.y);
  } else if (_index > 0.25) {
    _st = 1.0-vec2(1.0-_st.x,_st.y);
  }
  return _st;
}

// void main() {
//   vec2 st = vUv;
//   st *= 10.0;
//   // st = (st-vec2(5.0)) * (abs(uTime*0.2)*5.);
//   // st.x += uTime*3.0;

//   vec2 ipos = floor(st);
//   vec2 fpos = fract(st);

//   vec2 tile = trebuchetPattern(fpos, random( ipos ));

//   float color = 0.0;

//   //Maze
//   // color = smoothstep(tile.x-0.3,tile.x,tile.y)-
//   //         smoothstep(tile.x,tile.x+0.3,tile.y);
//   //Circles
//   // color = (step(length(tile), 0.6) - 
//   //         step(length(tile), 0.4) ) +
//   //         (step(length(tile-vec2(1.)), 0.6) -
//   //         step(length(tile - vec2(1.)), 0.4) );
  
//   //Trebuchet
//   // color = step(tile.x, tile.y);

//   gl_FragColor = vec4(vec3(color), 1.0);
// }

//  Function from Iñigo Quiles
//  www.iquilezles.org/www/articles/functions/functions.htm
float impulse( float k, float x ){
    float h = k*x;
    return h*exp(1.0-h);
}

float cubicPulse( float c, float w, float x ){
  x = abs(x - c);
  if( x>w ) return 0.0;
  x /= w;
  return 1.0 - x*x*(3.0-2.0*x);
}

float parabola( float x, float k ){
  return pow( 4.0*x*(1.0-x), k );
}

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}

vec3 colorA = vec3(0.0, 0.0, 1.0);
vec3 colorB = vec3(0.5, 0.0, 1.0);


void main() {
  vec2 st = vUv;

  // float y = smoothstep(0.1, 0.9, st.x);
  float y = cubicPulse(0.5, 0.2, st.x);
  // float y = impulse(12., st.x);
  // float y = parabola(st.x, 1.0);

  vec3 color = vec3(y);
  // float x = st.x;
  float x = st.x * PI;
  float t = uTime * x;
  y = sin(x);
  // y = sin(x * t);
  // y = 1.0 + sin(x * t);
  // y = 2.0 + sin(x * t);
  // y = mod(x,0.5);
  // y = fract(x);
  // y = ceil(x * t);
  // y = floor(x * t);
  // y = sign(x * t);
  // y = abs(x);
  // y = clamp(x, 0.0,1.0);
  // y = min(x, 0.0) + t;
  // y = max(x, 0.0);


  // float pct = plot(st,y);
  //***
  float pct = plot(vec2(random(st)),y);

  // pct = abs(sin(uTime));

  // color = (1.0-pct)*mix(colorA, colorB, pct)*vec3(0.0,1.0,1.0);
  color = sin(1.0-pct)*color+pct*vec3(0.0,1.0,1.0);

  // gl_FragColor = vec4(color, 1.0);
  gl_FragColor = vec4(fract(vUv.y - color), 0.5);
}