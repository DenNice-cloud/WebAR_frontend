import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./app.scss";
import Backpack from "components/Backpack";
import QRBlock from "components/QR-block";
import ColorsBlock from "components/ColorsBlock";
import { bodyColors, materials, metalColors } from "constants/Constants";
import MaterialBlock from "components/MaterialBlock";

export default function App() {
  const [bodyColor, setBodyColor] = useState(bodyColors.Brown);
  const [material, setMaterial] = useState(materials.Denim);
  const [metalColor, setMetalColor] = useState(metalColors.Silver);

  return (
    <div className="body">
      <QRBlock />

      <Canvas
        camera={{ position: [0, 2, 10], fov: 50 }}
        style={{ height: "100vh", width: "100vw" }}
      >
        <ambientLight
          intensity={0.5}
          color={"#fff"}
        />

        <directionalLight
          position={[10, 10, 10]}
          intensity={1}
          color={"#fff"}
        />

        <Backpack
          bodyColor={bodyColor}
          material={material}
          metalColor={metalColor}
        />

        <OrbitControls />
      </Canvas>

      <div className="variety">
        <ColorsBlock
          setColor={setBodyColor}
          mainColor={bodyColor}
          mainColors={bodyColors}
          currentProperty="BODY"
        />

        <ColorsBlock
          setColor={setMetalColor}
          mainColor={metalColor}
          mainColors={metalColors}
          currentProperty="METAL"
        />

        <MaterialBlock 
        setMaterial={setMaterial}
        material={material}
        materials={materials}
        />
      </div>
    </div>
  );
}
