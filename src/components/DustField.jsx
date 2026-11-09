import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  attribute float aSize;
  attribute float aSeed;
  uniform float uTime;
  uniform float uPixelRatio;
  varying float vAlpha;

  void main() {
    vec3 p = position;
    p.y += sin(uTime * 0.25 + aSeed * 6.2831) * 0.18;
    p.x += cos(uTime * 0.18 + aSeed * 4.0) * 0.12;
    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = aSize * uPixelRatio * (8.0 / -mvPosition.z);
    vAlpha = 0.35 + 0.65 * abs(sin(uTime * 0.6 + aSeed * 10.0));
  }
`;

const fragmentShader = `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - vec2(0.5));
    float strength = smoothstep(0.5, 0.0, d);
    vec3 color = mix(uColorB, uColorA, strength);
    gl_FragColor = vec4(color, strength * vAlpha * 0.7);
  }
`;

function Dust({ count = 420 }) {
  const points = useRef();
  const target = useRef({ x: 0, y: 0 });

  const { positions, sizes, seeds } = useMemo(() => {
    const positionsArray = new Float32Array(count * 3);
    const sizesArray = new Float32Array(count);
    const seedsArray = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      positionsArray[i * 3] = (Math.random() - 0.5) * 14;
      positionsArray[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positionsArray[i * 3 + 2] = -Math.random() * 9 + 1;
      sizesArray[i] = 0.6 + Math.random() * 2.6;
      seedsArray[i] = Math.random();
    }
    return { positions: positionsArray, sizes: sizesArray, seeds: seedsArray };
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 1.5) },
      uColorA: { value: new THREE.Color("#F3C68A") },
      uColorB: { value: new THREE.Color("#B8743A") },
    }),
    []
  );

  useFrame((state, delta) => {
    uniforms.uTime.value += delta;
    target.current.x += (state.pointer.x * 0.6 - target.current.x) * 0.04;
    target.current.y += (state.pointer.y * 0.35 - target.current.y) * 0.04;
    if (points.current) {
      points.current.rotation.y = target.current.x * 0.25;
      points.current.rotation.x = -target.current.y * 0.18;
      points.current.position.x = target.current.x * 0.4;
      points.current.position.y = target.current.y * 0.25 + Math.sin(uniforms.uTime.value * 0.05) * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-aSize" count={count} array={sizes} itemSize={1} />
        <bufferAttribute attach="attributes-aSeed" count={count} array={seeds} itemSize={1} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function DustField({ active = true, count = 420 }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 5], fov: 55 }}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      eventSource={typeof document !== "undefined" ? document.getElementById("root") : undefined}
      eventPrefix="client"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    >
      <Dust count={count} />
    </Canvas>
  );
}
