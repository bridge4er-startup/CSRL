# Civil Structures Research Lab

## CMS administration

Run `npm run dev:all`, then open `http://localhost:5173/admin.html`. The administrator can manage homepage content, news, research, and contact personnel; set visibility and display order; upload images; and compose page blocks (heading, text, image, table, quote/annotation, divider, or two-column content). Credentials live only in `.env`, which is excluded from Git.

### Production deployment

The Vite frontend can be deployed on Vercel. The CMS API must be hosted on a persistent Node service (or changed to use a managed database and object storage); Vercel's serverless filesystem is not persistent enough for CMS edits/uploads. Deploy this repository's API with `npm start`, configure a persistent `DATA_FILE` path or replace the JSON store with a database, then set these server variables: `ADMIN_USERNAME`, `ADMIN_PASSWORD`, `JWT_SECRET`, `CORS_ORIGIN`, and `DATA_FILE`.

Set Vercel's `VITE_API_BASE` to the HTTPS URL of that API and redeploy the frontend. Copy `.env.example` for the complete local/production configuration list; never commit `.env`.

## Editing content

All website content is in `src/content.js`. Open that file to change the homepage statement, news, research projects, team profiles, email address, and image URLs. After saving, refresh the browser. On a deployed site, commit and publish the change through your usual GitHub or Vercel workflow.

### Add or edit news

Each item in `news` is one update. Edit `date`, `type`, `title`, `image`, and `details`. The `slug` must be unique and use lowercase words joined with hyphens. The `details` field supports HTML, so you can use paragraphs, headings, lists, links, images, tables, and multiple image galleries. Put image HTML at the exact point where it should appear in the story. Copy an existing news object, add a comma after the previous one, and change its values to publish a new update.

```js
{ slug: "new-study", date: "01 Oct 2026", type: "Lab update", title: "Short headline", image: "/images/study.jpg", details: "<p>First paragraph.</p><figure><img src=\"/images/test-1.jpg\" alt=\"Loading test\" /><figcaption>Loading test at 2% drift.</figcaption></figure><p>Second paragraph.</p>" }
```

### Add or edit research

Each item in `projects` is one research detail page. Edit `title` and `description`, then build the article with the ordered `report` list. There are no fixed report headings: add any number of named sections, rich content blocks, quotations, and dividers in any order. A `section` marked `lead: true` has the larger introductory type treatment. Section and content block `content` values accept HTML, including multiple photographs, tables, and equations.

```js
report: [
  { type: "section", title: "Abstract", lead: true, content: "<p>Short overview of the research.</p>" },
  { type: "section", title: "Testing protocol", content: "<p>Testing details.</p><img src=\"/images/test-rig.jpg\" alt=\"Test rig\" /><table><thead><tr><th>Specimen</th><th>Load</th></tr></thead><tbody><tr><td>S1</td><td>250 kN</td></tr></tbody></table><p class=\"equation\">M = F x L</p>" },
  { type: "quote", text: "A useful research insight.", attribution: "Optional source" },
  { type: "content", content: "<h2>Any HTML heading</h2><p>Additional material can appear anywhere.</p>" },
  { type: "divider" }
]
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
