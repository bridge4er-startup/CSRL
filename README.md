# Civil Structures Research Lab

## Editing content

All website content is in `src/content.js`. Open that file to change the homepage statement, news, research projects, team profiles, email address, and image URLs. After saving, refresh the browser. On a deployed site, commit and publish the change through your usual GitHub or Vercel workflow.

### Add or edit news

Each item in `news` is one update. Edit `date`, `type`, `title`, `image`, and `details`. The `slug` must be unique and use lowercase words joined with hyphens. The `details` field supports HTML, so you can use paragraphs, headings, lists, links, images, tables, and multiple image galleries. Put image HTML at the exact point where it should appear in the story. Copy an existing news object, add a comma after the previous one, and change its values to publish a new update.

```js
{ slug: "new-study", date: "01 Oct 2026", type: "Lab update", title: "Short headline", image: "/images/study.jpg", details: "<p>First paragraph.</p><figure><img src=\"/images/test-1.jpg\" alt=\"Loading test\" /><figcaption>Loading test at 2% drift.</figcaption></figure><p>Second paragraph.</p>" }
```

### Add or edit research

Each item in `projects` is one research detail page. Edit the plain-text `title`, `description`, and `abstract`; the abstract automatically displays in Times New Roman at 12 pt. Use `objectivesContent`, `methodologyContent`, and `contributionContent` for richer material below it. These fields accept HTML, including multiple photographs, tables, and equations. Place each image block within the relevant field wherever it belongs in the content flow.

```js
methodologyContent: "<p>Testing protocol.</p><img src=\"/images/test-rig.jpg\" alt=\"Test rig\" /><table><thead><tr><th>Specimen</th><th>Load</th></tr></thead><tbody><tr><td>S1</td><td>250 kN</td></tr></tbody></table><p class=\"equation\">M = F x L</p>"
```

Use this pattern for a captioned image, or place several figures inside an `image-gallery` for a vertically stacked image sequence. This keeps figures readable at any size and lets you insert as many images as needed.

```html
<p>Text before the images.</p>
<div class="image-gallery">
  <figure><img src="/images/specimen-a.jpg" alt="Specimen A after testing" /><figcaption>Specimen A</figcaption></figure>
  <figure><img src="/images/specimen-b.jpg" alt="Specimen B after testing" /><figcaption>Specimen B</figcaption></figure>
</div>
<p>Text after the images.</p>
```

For photographs, put the file in a public `images` folder and reference it as `/images/file-name.jpg`, or use an approved full image URL. Keep image alt text accurate. Copy a complete project object to add a project and give it a new unique `slug`.

### Edit team profiles

Each item in `people` controls one profile card on Contacts. Update `name`, `role`, `email`, `photo`, and `profile`. Use a square or portrait-oriented image so the crop looks intentional.

### Edit page wording and contact details

The `about` block controls the homepage heading and introductory copy. The `contact.email` value is available for any future shared contact links; current visible mail links can also be updated by searching the project for the old address.

### A note on HTML content

Only add HTML from trusted editors, because it is inserted directly into the page. Keep tags simple: `p`, `h2`, `ul`, `li`, `figure`, `figcaption`, `div`, `img`, `table`, `thead`, `tbody`, `tr`, `th`, and `td` cover the common research-content needs.

## Local development

```powershell
npm install
npm run dev
```

## Deployment

This is a Vite static site. Vercel detects it automatically: build command `npm run build`, output directory `dist`.
