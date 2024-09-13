import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

const Backpack = ({ bodyColor, material, metalColor }) => {
  const glb = useLoader(GLTFLoader, "models/backpack.glb");
  const baseColor = useLoader(
    TextureLoader,
    `textures/${material}_baseColor.jpg`
  );
  const normalMap = useLoader(
    TextureLoader,
    `textures/${material}_normal.jpg`
  );
  const roughnessMap = useLoader(
    TextureLoader,
    `textures/${material}_occlusionRoughnessMetallic.jpg`
  );

  const metalTextureColor = useLoader(TextureLoader, metalColor);
  const metalRoughnessMap = useLoader(
    TextureLoader,
    `textures/metall_occlusionRoughnessMetallic.jpg`
  );

  const strapBaseColor = useLoader(
    TextureLoader,
    `textures/strap_baseColor.jpg`
  );
  const strapNormalMap = useLoader(TextureLoader, `textures/strap_normal.jpg`);
  const strapRoughnessMap = useLoader(
    TextureLoader,
    `textures/strap_occlusionRoughnessMetallic.jpg`
  );

  glb.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = baseColor;
      child.material.normalMap = normalMap;
      child.material.roughnessMap = roughnessMap;

      if (child.material.name === "metall") {
        child.material.map = metalTextureColor;
        child.material.roughnessMap = metalRoughnessMap;
      }

      if (child.material.name === "strap") {
        child.material.map = strapBaseColor;
        child.material.normalMap = strapNormalMap;
        child.material.roughnessMap = strapRoughnessMap;
      }

      child.material.needsUpdate = true;
    }
  });
  glb.materials.body.color.set(bodyColor);
  glb.materials.strap.color.set(bodyColor);

  glb.scene.position.set(0, 0, 0);
  glb.scene.scale.set(5, 5, 5);

  return (
    <primitive
      object={glb.scene}
      dispose={null}
    />
  );
};

export default Backpack;
