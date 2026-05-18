# Avatar Sources for Facial Expressions

## Quick Start: Download Sample Avatar

**Option 1: RobotExpressive (Google Model Viewer)** ⭐ Already Downloaded!
```powershell
cd dashboard/public
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/google/model-viewer/master/packages/shared-assets/models/RobotExpressive.glb" -OutFile "avatar.glb"
```
✅ Includes: Idle, Walking, Running, Jump, Death, Dance, TPose animations + facial morphs
✅ **This is already in your project at `dashboard/public/avatar.glb`**

**Option 2: Use provided script**
```powershell
cd dashboard/public
.\download-avatar.ps1
```

---

## Free Avatar Platforms (2026)

### 1. **Ready Player Me** ⭐ (Still Active)
- **URL**: https://readyplayer.me/
- **Facial Support**: ✅ ARKit-compatible blendshapes (52 targets)
- **How to get**:
  ```
  1. Visit https://readyplayer.me/
  2. Create avatar in browser
  3. Get URL: https://models.readyplayer.me/{YOUR_ID}.glb?morphTargets=ARKit
  4. Add ?morphTargets=ARKit to enable facial expressions
  ```
- **Direct API**:
  ```typescript
  const avatarUrl = `https://models.readyplayer.me/${avatarId}.glb?morphTargets=ARKit&textureAtlas=1024`;
  ```

### 2. **VRoid Studio** ⭐⭐
- **URL**: https://vroid.com/en/studio
- **Platform**: Windows/Mac desktop app (FREE)
- **Facial Support**: ✅ Full facial rigging + custom expressions
- **Export**: VRM format (convert to GLB)
- **How to use**:
  ```
  1. Download VRoid Studio
  2. Create/customize avatar
  3. Export as .vrm
  4. Convert VRM → GLB using @pixiv/three-vrm (already installed!)
  ```

### 3. **Mixamo** (Adobe)
- **URL**: https://www.mixamo.com/
- **Facial Support**: ⚠️ Limited (basic jaw/eyes only)
- **How to get**:
  ```
  1. Upload any humanoid character OR use Mixamo characters
  2. Select "Character" → download Y-Bot or X-Bot
  3. Apply animations
  4. Download as FBX → Convert to GLB
  ```

### 4. **Sketchfab** (Community Models)
- **URL**: https://sketchfab.com/
- **Search**: "rigged character facial expressions" + filter by "Downloadable"
- **Facial Support**: ✅ Many models have blendshapes
- **License**: Check each model (many CC-BY)
- **Direct downloads**:
  - https://sketchfab.com/3d-models/free-characters (search here)

### 5. **Khronos glTF Samples** (Testing)
- **GitHub**: https://github.com/KhronosGroup/glTF-Sample-Models
- **Models with expressions**:
  - RobotExpressive: Animated robot with facial morphs
  - CesiumMan: Simple humanoid
  - BrainStem: Medical visualization
- **Download**:
  ```bash
  https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/RobotExpressive/glTF-Binary/RobotExpressive.glb
  ```

---

## Recommended Workflow for EEG Facial Expressions

### Best Choice: Ready Player Me + ARKit Blendshapes

**Why?** 52 standardized facial targets = perfect for EEG mapping

**Setup**:
```typescript
// 1. Get avatar with morphTargets
const avatarUrl = "https://models.readyplayer.me/YOUR_ID.glb?morphTargets=ARKit";

// 2. Access morph targets in code
gltf.scene.traverse((child) => {
  if (child.isMesh && child.morphTargetDictionary) {
    // Available targets:
    // eyeBlinkLeft, eyeBlinkRight
    // mouthSmile, mouthFrown
    // browInnerUp, browDown
    // jawOpen, cheekPuff
    // ... 52 total ARKit blendshapes
    
    // Example: Map Alpha waves to smile
    const smileIndex = child.morphTargetDictionary['mouthSmile'];
    child.morphTargetInfluences[smileIndex] = alphaValue;
  }
});
```

### EEG → Expression Mapping Examples

```typescript
// Alpha (relaxation) → Smile
if (child.morphTargetDictionary['mouthSmile']) {
  const idx = child.morphTargetDictionary['mouthSmile'];
  child.morphTargetInfluences[idx] = eegData.bands.alpha;
}

// Beta (focus) → Brow concentration
if (child.morphTargetDictionary['browDown']) {
  const idx = child.morphTargetDictionary['browDown'];
  child.morphTargetInfluences[idx] = eegData.bands.beta;
}

// Gamma (high activity) → Eye wide
if (child.morphTargetDictionary['eyeWide']) {
  const idx = child.morphTargetDictionary['eyeWide'];
  child.morphTargetInfluences[idx] = eegData.bands.gamma;
}

// Delta (drowsy) → Eye blink
if (child.morphTargetDictionary['eyeBlinkLeft']) {
  const idx = child.morphTargetDictionary['eyeBlinkLeft'];
  child.morphTargetInfluences[idx] = eegData.bands.delta;
}
```

---

## Create Your Own Avatar

### VRoid Studio (Best for Customization)

1. **Download**: https://vroid.com/en/studio
2. **Create** avatar with full customization
3. **Export** as .vrm
4. **Use** @pixiv/three-vrm loader (already in your project!)

```typescript
import { VRMLoaderPlugin } from '@pixiv/three-vrm';

const loader = new GLTFLoader();
loader.register((parser) => new VRMLoaderPlugin(parser));

loader.load('/avatar.vrm', (gltf) => {
  const vrm = gltf.userData.vrm;
  scene.add(vrm.scene);
  
  // Access facial expressions
  vrm.expressionManager?.setValue('happy', alphaValue);
  vrm.expressionManager?.setValue('angry', betaValue);
  vrm.expressionManager?.setValue('sad', deltaValue);
});
```

---

## Quick Test Links (Copy & Paste)

**Test in browser NOW** - Already configured in AvatarFoundation.tsx:

```typescript
// RobotExpressive with 7 animations + facial morphs (CURRENTLY LOADED)
const avatarUrl = "/avatar.glb";

// Or use Google's CDN directly
const avatarUrl = "https://raw.githubusercontent.com/google/model-viewer/master/packages/shared-assets/models/RobotExpressive.glb";

// Or Ready Player Me (if you have ID)
const avatarUrl = "https://models.readyplayer.me/YOUR_ID.glb?morphTargets=ARKit";
```

---

## ARKit Blendshape Reference

52 facial targets available with Ready Player Me:

**Eyes**: eyeBlinkLeft, eyeBlinkRight, eyeLookUpLeft, eyeLookDownRight, eyeWideLeft, eyeSquintRight...

**Brows**: browDownLeft, browDownRight, browInnerUp, browOuterUpLeft...

**Jaw**: jawOpen, jawForward, jawLeft, jawRight

**Mouth**: mouthSmileLeft, mouthFrownRight, mouthPucker, mouthFunnel, mouthDimpleLeft...

**Cheeks**: cheekPuff, cheekSquintLeft...

**Nose**: noseSneerLeft, noseSneerRight

**Tongue**: tongueOut

Full spec: https://arkit-face-blendshapes.com/

---

## Troubleshooting

**Avatar has no facial expressions?**
- Add `?morphTargets=ARKit` to Ready Player Me URL
- Check `mesh.morphTargetDictionary` is not null
- Use VRoid Studio for guaranteed facial support

**Expressions not animating?**
- Must update `mesh.morphTargetInfluences[index]` every frame
- Values should be 0.0 to 1.0
- Check the mesh name (usually "Head" or "Face")

**Performance issues?**
- Reduce morph target count (use only essential expressions)
- Update at 30fps instead of 60fps
- Use simpler avatar model

---

Built with ❤️ for the PiEEG community
