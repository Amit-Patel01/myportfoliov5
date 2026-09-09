# Portfolio uploads

Place portfolio assets in these folders:

- `certificates/` — certificate PDFs or images (`.pdf`, `.jpg`, `.jpeg`, `.png`, `.webp`)
- `videos/` — video files
- `thumbnails/` — cover images for cards

Use their public paths in the Admin Panel, for example:

- Certificate PDF: `/uploads/certificates/responsive-web-design.pdf`
- Certificate image: `/uploads/certificates/responsive-web-design.jpg`
- Video: `/uploads/videos/brand-commercial.mp4`
- Cover image: `/uploads/thumbnails/brand-commercial.jpg`

Titles, descriptions, tags, issuers, dates, and links are managed from the Admin Panel and saved in that browser's local storage. No files or portfolio details are stored in MongoDB.

When adding a certificate, video, or thumbnail from Admin Panel, use **Select from uploads/...** to choose an existing file and fill its path automatically.
