import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Developerx = ({ animationName = "defeat", ...props }) => {
  const group = useRef();
  const [animationsLoaded, setAnimationsLoaded] = useState(false);
  const { nodes, materials } = useGLTF('/models/developer.glb');

  const defeatData = useGLTF('/models/animations/defeatedx/defeated.gltf');
  const sittingVictoryData = useGLTF('/models/animations/sittingVictory_out/sittingVictory.gltf');
  const standingClapData = useGLTF('/models/animations/standingClap_out/standingClap.gltf');
  const zombieData = useGLTF('/models/animations/zombie_out/zombie.gltf');

  // State to hold processed animations
  const [processedAnimations, setProcessedAnimations] = useState([]);

  useEffect(() => {
    if (!animationsLoaded) {
      const cleanAnimationTrackNames = (animations, prefixToRemove) => {
        animations.forEach((animation) => {
          animation.tracks.forEach((track) => {
            if (track.name.startsWith(prefixToRemove)) {
              track.name = track.name.replace(prefixToRemove, '');
            }
          });
        });
      };

      // Process animations
      defeatData.animations[0].name = 'defeat';
      cleanAnimationTrackNames(defeatData.animations, 'mixamorig');

      sittingVictoryData.animations[0].name = 'sittingVictory';
      cleanAnimationTrackNames(sittingVictoryData.animations, 'mixamorig');

      standingClapData.animations[0].name = 'standingClap';
      cleanAnimationTrackNames(standingClapData.animations, 'mixamorig');

      zombieData.animations[0].name = 'zombie';
      cleanAnimationTrackNames(zombieData.animations, 'mixamorig');

      setProcessedAnimations([
        defeatData.animations[0],
        sittingVictoryData.animations[0],
        standingClapData.animations[0],
        zombieData.animations[0],
      ]);
      setAnimationsLoaded(true);
    }
  }, [animationsLoaded]); // Runs only once

  // Only initialize animations after they are loaded
  const { actions } = useAnimations(processedAnimations, group);

  useEffect(() => {
    if (actions && actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
      return () => actions[animationName].fadeOut(0.5);
    }
  }, [actions, animationName]);

  if (!animationsLoaded) return null; // Prevent render before animations are ready

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  );
};

// Preload models
useGLTF.preload('/models/developer.glb');
useGLTF.preload('/animations/idle.glb');

export default Developerx;
  