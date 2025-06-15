import fbx2gltf from 'fbx2gltf';

// Input and output file paths
const inputPath = './public/models/animations/zombie.fbx';
const outputPath = './public/models/animations/zombie.gltf';

// Options array (command-line flags)
const options = ['--khr-materials-unlit']; // Add other flags if needed

// Perform conversion
fbx2gltf(inputPath, outputPath, options).then(
  (destPath) => {
    console.log('Conversion successful! Output path:', destPath);
  },
  (error) => {
    console.error('Error during conversion:', error);
  }
);
