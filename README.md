# Perfect Pixel – AI Cinematic Product Studio

A freelancer portfolio website for a professional AI product image and Photoshop editing service.

## Tech Stack

- React 18
- Framer Motion (animations)
- Lucide React (icons)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 3. Build for production

```bash
npm run build
```

The production-ready files will be in the `/build` folder.

## Project Structure

```
src/
├── components/
│   ├── PerfectPixelPortfolio.js   # Root layout component
│   ├── Navbar.js                  # Navigation bar
│   ├── Hero.js                    # Hero section
│   ├── Services.js                # Services section
│   ├── BeforeAfter.js             # Before & After gallery
│   ├── Portfolio.js               # Featured work grid
│   └── Contact.js                 # Contact links section
├── data/
│   └── portfolioData.js           # Images, services, portfolio items
├── App.js
├── index.js
└── index.css
```

## Deploying to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Contact

- Email: imranrahamn@yahoo.com
- WhatsApp: +8801775231270
- Upwork: [Profile Link](https://www.upwork.com/freelancers/~01be32305cf90d0cd3)
