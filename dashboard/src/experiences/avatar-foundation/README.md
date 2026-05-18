# Avatar Foundation

A clean, scalable foundation for avatar animations without EEG integration. Built to be **fast, simple, and easy to duplicate** for AR/VR experiences.

## Features

- ✅ **Three.js** with GLTFLoader for Ready Player Me avatars
- ✅ **Animation Controller** with smooth crossfade transitions
- ✅ **Keyboard controls** for testing (1-5 keys trigger animations)
- ✅ **Performance-optimized** with requestAnimationFrame
- ✅ **No dependencies on EEG** — pure animation foundation
- ✅ **Ready to extend** with any input source (EEG, gestures, voice, etc.)
- ✅ **AR/VR ready** — easy to duplicate and adapt

## Quick Start

### 1. Get an Avatar

**Option A: Ready Player Me** (Recommended)
1. Go to [readyplayer.me](https://readyplayer.me/)
2. Create your avatar
3. Download as `.glb` file
4. Note your avatar URL: `https://models.readyplayer.me/YOUR_AVATAR_ID.glb`

**Option B: Use any GLB/GLTF model**
- Any rigged humanoid model works
- Must have animations (see step 2)

### 2. Add Animations

**Option A: Mixamo** (Easiest)
1. Go to [mixamo.com](https://www.mixamo.com/)
2. Upload your avatar
3. Select animations (Idle, Walk, Run, Dance, Wave, etc.)
4. Download as FBX
5. Convert FBX to GLB using [gltf.report](https://gltf.report/) or Blender

**Option B: Ready Player Me with Animations**
- Some Ready Player Me avatars come with animations
- Check the marketplace for animated characters

### 3. Place the Avatar

Put your `.glb` file in:
```
dashboard/public/avatar.glb
```

Or update the URL in `AvatarFoundation.tsx`:
```typescript
const avatarUrl = "https://models.readyplayer.me/YOUR_AVATAR_ID.glb";
```

### 4. Run

The experience will:
- Load your avatar
- Detect all animations in the file
- Map animations to number keys (1-5)
- Display controls on screen

## Architecture

### Core Components

1. **Scene Setup**
   - Three.js scene with camera, lights, ground plane
   - Optimized rendering settings
   - Responsive canvas

2. **Animation Controller**
   - `THREE.AnimationMixer` manages all animations
   - `Map<string, AnimationAction>` stores animation actions
   - Smooth crossfade between animations (0.3s default)

3. **Input Handling**
   - Keyboard events trigger animations
   - Easy to replace with EEG, OSC, gestures, etc.

### Key Functions

```typescript
loadAvatar(scene)      // Loads GLB, sets up mixer, plays idle
playAnimation(name)     // Crossfade to target animation
```

## Extending This Foundation

### Add EEG Control

Replace keyboard handler with EEG bands:
```typescript
useEffect(() => {
  // Map band power to animations
  if (eegData.bands.alpha > 0.7) {
    playAnimation("meditate");
  } else if (eegData.bands.beta > 0.6) {
    playAnimation("think");
  }
}, [eegData]);
```

### Add Hand Tracking (VR)

```typescript
// Detect hand gestures
if (handGesture === "peace") {
  playAnimation("wave");
}
```

### Add Voice Commands

```typescript
voiceRecognition.on("command", (cmd) => {
  if (cmd === "dance") playAnimation("dance");
});
```

### Duplicate for AR

1. Copy `avatar-foundation` folder
2. Rename to `avatar-ar`
3. Add WebXR AR session code
4. Place avatar in real-world space
5. Register in `registry.ts`

## Performance Tips

- ✅ Only one `AnimationMixer` per avatar
- ✅ Reuse `AnimationAction` objects (don't recreate)
- ✅ Use `fadeIn/fadeOut` for smooth transitions
- ✅ Dispose resources on cleanup
- ✅ Cap pixel ratio: `Math.min(devicePixelRatio, 2)`

## Troubleshooting

**Avatar doesn't load**
- Check console for errors
- Verify file path: `public/avatar.glb`
- Try a different avatar URL
- Ensure CORS is enabled for external URLs

**No animations found**
- Avatar file must include animation tracks
- Use Mixamo to add animations
- Check console: animations list is logged

**Animations look choppy**
- Increase `FADE_DURATION` in code
- Check animation FPS (should be 30-60)
- Ensure `mixer.update(delta)` is called every frame

**Avatar is too big/small**
- Auto-scaling is built in (normalized to ~1.8m)
- Adjust `scale` constant in code if needed

## File Structure

```
avatar-foundation/
├── AvatarFoundation.tsx   # Main component
└── README.md              # This file
```

## Next Steps

1. ✅ Load your avatar
2. ✅ Test keyboard controls
3. ✅ Understand the architecture
4. ⬜ Add your input source (EEG, gestures, voice)
5. ⬜ Customize animations and transitions
6. ⬜ Duplicate for AR/VR experiences
7. ⬜ Share with the community!

## Resources

- [Ready Player Me](https://readyplayer.me/) — Avatar creation
- [Mixamo](https://www.mixamo.com/) — Free animations
- [Three.js Docs](https://threejs.org/docs/) — 3D library
- [GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader) — Model loading
- [AnimationMixer](https://threejs.org/docs/#api/en/animation/AnimationMixer) — Animation system

---

Built with ❤️ for the PiEEG community
