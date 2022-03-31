#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 uResolution;
uniform vec2 uMouse;
uniform float uTime;

varying vec2 vUv;

vec2 random2(vec2 st){
    st = vec2( dot(st,vec2(127.1,311.7)),
              dot(st,vec2(269.5,183.3)) );
    return -1.0 + 2.0*fract(sin(st)*43758.5453123);
}

vec3 colorA = vec3(0.0, 1.0, 1.0);
vec3 colorB = vec3(0.0, 0.0, 1.0);

// void main() {
//   vec2 st = vUv;
//   st.x *= uResolution.x / uResolution.y;

//   vec3 color = vec3(0.0);

//   vec2 point[6];
//   // point[0] = vec2(0.83,0.75);
//   point[0] = sin(vec2(0.83, 0.75) * uTime);
//   point[1] = cos(vec2(0.60, 0.07) * uTime);
//   point[2] = sin(vec2(0.28, 0.64) * uTime);
//   point[3] = sin(vec2(0.31, 0.26) * abs(uTime));
//   point[4] = sin(vec2(0.6, 0.16) * abs(uTime));
//   point[5] = uMouse / st;

//   float minDist = 1.0;


//   for(int i = 0; i < 6; i++) {
//     float dist = distance(st, point[i]);

//     minDist = min(minDist, dist);
//   }

//   color += minDist;

//   // color = mix(color, colorA, colorB);

//   gl_FragColor = vec4(color, 0.5);
// }

// void main(){
//   vec2 st = vUv;
//   vec3 color = vec3(.0);
//   st *= 9.;

//   vec2 i_st = floor(st); 
//   vec2 f_st = fract(st);

//   float m_dist = 1.;

//   for (int y= -1; y <= 1; y++) {
//     for (int x= -1; x<= 1; x++) {
//       vec2 neighbor = vec2(float(x), float(y));
//       vec2 point = random2(i_st + neighbor);

//       point = 0.5 + 0.5*sin(uTime + 6.2831*point);
//       vec2 diff = neighbor + point - f_st;

//       float dist = length(diff);

//       m_dist = min(m_dist, dist);
//     }
//   }

//   color += m_dist;

//   color += 1.-step(.02, m_dist);


//   color = mix(color, colorA, colorB);

//   // color.r += step(.98, f_st.x) + step(.98, f_st.y);

//    // Show isolines
//     // color -= step(.7,abs(sin(27.0*m_dist)))*.5;

//   gl_FragColor = vec4(color, 1.0); 
// }

void main() {
  vec2 st = vUv;

  vec3 color = vec3(.0);

  vec2 point[5];
  point[0] = vec2(0.83, 0.75);
  point[1] = vec2(0.60, 0.07);
  point[2] = vec2(0.28, 0.64);
  point[3] = vec2(0.31, 0.26);
  point[4] = (uMouse / st);
  // point[4] = uMouse;
  // point[4] = (uMouse / st) + vec2(0.1713622180349419, -0.022222202965588966);

  float m_dist = 1.;
  vec2 m_point;

  for(int i = 0; i< 5; i++) {
    float dist = distance(st, point[i]);

    if( dist < m_dist ) {
      m_dist = dist;

      m_point = point[i];
    }
  }

  color += m_dist*2.;

  color.rg = m_point;

  color -= abs(sin(80.0*m_dist))*0.07;

  color += 1.-step(0.02, m_dist);

  gl_FragColor = vec4(color,1.0);
}