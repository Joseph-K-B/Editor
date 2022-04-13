#define PI 3.14159265359

uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;

varying vec2 vUv;

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

//--------------//

// From https://iquilezles.org/www/articles/palettes/palettes.htm

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
    return a + b*cos(2. * PI *(c*t+d) );
}
//--------------//

void main() {
  vec2 st = vUv;
  vec3 color = vec3(0.0);

  st -= vec2(0.5);
  st = rotate2d( sin(uTime)*PI ) * st;
  st += vec2(0.5);

  //bottom left
  // vec2 bl  = smoothstep(0.01, 0.5, st* sin(uTime));
  // float pct = bl.x * bl.y;
  float pct = 0.0;

  //top-right
  // vec2 tr = step(vec2(0.025),sin(1.0-st));
  // pct *= tr.x * tr.y;

  float x = st.x * sin(uTime);
  float y = st.y * cos(uTime);
  pct = distance(st,vec2(0.5));
  // pct = distance(vec2(x, st.y),vec2(0.5));
  // pct = distance(st, vec2(0.4)) + distance(st, vec2(0.6));
  // pct = distance(st, vec2(0.4) * distance(st, vec2(0.6)));
  // pct = min(distance(st, vec2(0.4)), distance(st, vec2(0.6)));
  // pct = max(distance(st, vec2(0.4)), distance(st, vec2(0.6)));
  // pct = pow(distance(st, vec2(0.4)), distance(st,vec2(0.6)));
  pct = pow(distance(st, vec2(0.4) * sin(uTime)), distance(st,vec2(0.6) * sin(uTime)));


  // vec2 toCenter = vec2(0.5) - vec2(st.x, y);
  // pct = length(toCenter);

  color = vec3(pct);
  color += palette(x, vec3(.52,.45,.61),vec3(.40,.42,.31),vec3(.26,.30,.35),vec3(.15,.4,.4));

  gl_FragColor = vec4(color, 1.0);
}