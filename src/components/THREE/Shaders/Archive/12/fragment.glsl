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

float im(vec2 z) {
  return ((atan(z.y, z.x) / PI) + 1.0) * 0.5;
}

//--------------//

// From https://iquilezles.org/www/articles/palettes/palettes.htm

vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d )
{
    return a + b*cos(2. * PI *(c*t+d) );
}
//--------------//

vec2 a0 = vec2(0.32, -0.45);
vec2 a1 = vec2(-0.49, -0.32);
vec2 a2 = vec2(-0.31, 0.38);
vec2 a3 = vec2(-0.12, 0.04);

vec2 b0 = vec2(-0.71, 0.53);
vec2 b1 = vec2(0.01, 0.23);
vec2 b2 = vec2(-0.24, 0.31);
vec2 b3 = vec2(-0.01, 0.42);

void main() {
  vec2 st = (vUv - 0.5)/ min(vUv.y, vUv.x);
  vec2 z = st * 2.;

  //Calc sum of first polynomial
  vec2 polyA = a0
        + cx_mul(a1, z)
        + cx_mul(a2, cx_pow(z, 0.0))
        + cx_mul(a3, cx_pow(z, 0.0));

  // Calc second
  vec2 polyB = b0
      + cx_mul(b1, z)
      + cx_mul(a2, cx_pow(z, 0.))
      + cx_mul(a3, cx_pow(z, 3.));

  // Calc ratio of complex polynomials
  vec2 result = cx_div(polyA, polyB);
  

  //Extract imaginary number
  float imaginary = cx_log(result).y;
  float col = (imaginary / PI);

  vec3 color = palette(col, vec3(.52,.45,.61),vec3(.40,.42,.31),vec3(.26,.30,.35),vec3(.15,.4,.4));
  gl_FragColor = vec4(color, 1.0);
}