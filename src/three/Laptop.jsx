export default function Laptop() {
  return (
    <mesh rotation={[0.4,0.4,0]}>
      <boxGeometry args={[2,1.2,0.1]} />
      <meshStandardMaterial color="#8b5cf6" />
    </mesh>
  );
}