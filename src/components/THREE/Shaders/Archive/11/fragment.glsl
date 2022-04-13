uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;

varying vec2 vUv;

// From https://github.com/julesb/glsl-util

#define PI 3.14159265

#define cx_mul(a, b) vec2(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x)
#define cx_div(a, b) vec2(((a.x*b.x + a.y*b.y)/(b.x*b.x + b.y*b.y)),((a.y*b.x - a.x*b.y)/(b.x*b.x + b.y*b.y)))
#define cx_sin(a) vec2(sin(a.x) * cosh(a.y), cos(a.x) * sinh(a.y))
#define cx_cos(a) vec2(cos(a.x) * cosh(a.y), -sin(a.x) * sinh(a.y))

vec2 as_polar(vec2 z) {
  return vec2(
    length(z),
    atan(z.y, z.x)
  );
}

vec2 cx_tan(vec2 a) {return cx_div(cx_sin(a), cx_cos(a)); }
vec2 cx_log(vec2 a) {
    vec2 polar = as_polar(a);
    float rpart = polar.x;
    float ipart = polar.y;
    if (ipart > PI) ipart=ipart-(2.0*PI);
    return vec2(log(rpart),ipart);
}
vec2 cx_pow(vec2 v, float p) {
  vec2 z = as_polar(v);
  return pow(z.x, p) * vec2(cos(z.y * p), sin(z.y * p));
}

//--------------//

// From https://iquilezles.org/www/articles/palettes/palettes.htm

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
    return a + b*cos(2. * PI *(c*t+d) );
}
//--------------//

void main() {
  // vec2 st = (gl_FragCoord.xy - 0.5 * vUv.xy) / min(vUv.y, vUv.x);
  // vec2 st = vUv - 0.5 / min(vUv.y, vUv.x);
  vec2 st = (vUv - 0.5)/ min(vUv.y, vUv.x);
  vec2 z = st;
  // vec2 z = vUv - 0.5 / fract(vUv);
  // vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.y, uResolution.x);
  // vec2 z = uv;

  float angle = sin(uTime/5.) * 2. * PI;
  float length = .2;

  //Spin points in circle of radius length
  float c = cos(angle);
  float s = sin(angle);

  //Lower-left point
  // vec2 p = vec2(-0.25, -0.25);
  vec2 p = vec2( s*angle, c*length);
  // vec2 p = vec2( s*angle, c*length) * uMouse;
  //Upper-right point
  // vec2 q = vec2(0.25, 0.25);
  vec2 q = vec2( s*-length, c*-length);
  // vec2 q = vec2( s*-length, c*-length)  * uMouse;

  //Divide z-p by z-q using complex division
  vec2 division = cx_div((z - p), (z - q));

  // Calculate the log of division
  vec2 log_p_over_q = cx_log(division);

  //Extract imaginary number
  float imaginary = log_p_over_q.y / PI;

  vec3 color = palette( imaginary, vec3(0.50, .52, 0.53), vec3(.46, .32, .35), vec3(.82, .84, .65), vec3(0.53, 0.23, 0.22));
  // vec3 colorA = palette( imaginary, vec3(0.4784, 0.5804, 0.6314), vec3(0.0392, 0.4235, 0.4588), vec3(0.4353, 0.2078, 0.2078), vec3(0.6549, 0.5569, 0.898));
  // color = mix(color, colorA, vec3(0.5));
  gl_FragColor = vec4(color, 1.0);
}