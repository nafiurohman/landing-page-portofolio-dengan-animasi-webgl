uniform float uTime;
uniform float uScroll;
uniform vec2 uResolution;
uniform vec2 uMouse;

varying vec2 vUv;
varying vec3 vPosition;

// Simplex noise functions
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

// FBM (Fractal Brownian Motion)
float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;
  
  for (int i = 0; i < 5; i++) {
    value += amplitude * snoise(p * frequency);
    amplitude *= 0.5;
    frequency *= 2.0;
  }
  
  return value;
}

void main() {
  vec2 uv = vUv;
  
  // Aspect ratio correction
  vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
  vec2 centeredUv = (uv - 0.5) * aspect;
  
  // Time-based animation (slow and organic)
  float slowTime = uTime * 0.15;
  
  // Scroll influence
  float scrollInfluence = uScroll * 0.3;
  
  // Create organic noise patterns
  float noise1 = fbm(vec3(centeredUv * 1.5, slowTime + scrollInfluence));
  float noise2 = fbm(vec3(centeredUv * 2.0 + 100.0, slowTime * 0.7 - scrollInfluence * 0.5));
  float noise3 = fbm(vec3(centeredUv * 0.8 - 50.0, slowTime * 1.2 + scrollInfluence * 0.3));
  
  // Combine noises
  float combinedNoise = noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2;
  combinedNoise = smoothstep(-0.3, 0.8, combinedNoise);
  
  // Color palette - soft blue to magenta to deep purple
  vec3 colorBlue = vec3(0.35, 0.55, 0.85);      // Soft blue
  vec3 colorMagenta = vec3(0.75, 0.35, 0.65);   // Magenta
  vec3 colorDeep = vec3(0.15, 0.12, 0.25);      // Deep purple/dark
  vec3 colorLight = vec3(0.92, 0.90, 0.95);     // Light accent
  
  // Mix colors based on noise and scroll
  float colorMix1 = smoothstep(0.0, 0.5, combinedNoise + sin(slowTime * 0.5) * 0.1);
  float colorMix2 = smoothstep(0.3, 0.8, combinedNoise + cos(slowTime * 0.3) * 0.1);
  float scrollColor = smoothstep(0.0, 1.0, scrollInfluence * 2.0);
  
  vec3 color = mix(colorDeep, colorBlue, colorMix1);
  color = mix(color, colorMagenta, colorMix2 * (0.5 + scrollColor * 0.5));
  color = mix(color, colorLight, pow(combinedNoise, 3.0) * 0.15);
  
  // Add subtle vignette
  float vignette = 1.0 - length(centeredUv) * 0.4;
  vignette = smoothstep(0.0, 1.0, vignette);
  color *= vignette;
  
  // Add subtle grain
  float grain = snoise(vec3(uv * 500.0, slowTime * 10.0)) * 0.03;
  color += grain;
  
  gl_FragColor = vec4(color, 1.0);
}
