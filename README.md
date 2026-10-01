# Civil Structures Research Lab

## Editing content

All sample content is in `src/content.js`. Edit that file in GitHub's web editor to update the lab overview, news, research projects, methods, team members, contact email, and photos. Each collection has a sample object that can be copied to add a new item.

Images use public Unsplash URLs as placeholders. Replace each `image` value with the URL of an approved image, ideally stored in the repository or your institution's media library.

## Local development

```powershell
npm install
npm run dev
```

## Deployment

This is a Vite static site. Vercel detects it automatically: build command `npm run build`, output directory `dist`.
