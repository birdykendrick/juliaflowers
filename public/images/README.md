# 📸 Bouquet Images

Place your bouquet photos in this folder.

## Naming convention (recommended)
Match the filenames to your bouquet entries in `src/data/mockData.js`:

```
rose-reverie.jpg
blush-and-bloom.jpg
sunlit-meadow.jpg
lilac-dreams.jpg
the-luxe-arch.jpg
garden-whisper.jpg
pink-velvet.jpg
birthday-burst.jpg
```

## How to link an image to a bouquet card
In `src/data/mockData.js`, add the `image` key to any bouquet:

```js
{
  id: 1,
  name: 'Rose Reverie',
  image: '/images/rose-reverie.jpg',  // ← this path
  // emoji: '🌹',                     // you can keep emoji as fallback or remove it
  ...
}
```

## Recommended image specs
- **Dimensions:** 800 × 800 px (square) or 4:3 ratio
- **Format:** JPG or WebP (WebP preferred for performance)
- **File size:** Under 300 KB per image (compress with squoosh.app)
- The card image area is 208px tall — images will be cropped with `object-cover`
