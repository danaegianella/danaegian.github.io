/* 1. ENTRADAS DEL BLOG (solo texto y artículos) */
const BLOG_POSTS = [
  {
    id: 1,
    title: "Photometric campaign on KZ Hydrae: capturing rapid pulsations",
    date: "Feb 2026",
    category: "Observing",
    location: "Cota Cota Observatory · 3420 m",
    summary: "Notes from three clear observing nights monitoring the SX Phoenicis variable star KZ Hya in Sloan g', r' and i' bands.",
    content: `
      <p>Over three observing sessions between December 2025 and February 2026, we collected roughly 1,000 photometric points per night on KZ Hydrae, a high-amplitude SX Phoenicis pulsating star.</p>
      <p>Using differential aperture photometry in AstroImageJ followed by Lomb–Scargle periodogram analysis and spline detrending in Python, we isolated its primary pulsation frequency and noticed an intriguing discontinuity in the December 26 light curve that aligns with previous binarity hypotheses.</p>
    `
  },
  {
    id: 2,
    title: "High-altitude Cherenkov tank modelling for ALPACA",
    date: "Jan 2026",
    category: "3D & Control",
    location: "La Paz · 4700 m a.s.l. design",
    summary: "Optimizing internal photon-collection geometry and PMT housing in SolidWorks for extreme altitude conditions.",
    content: `
      <p>Designing instrumentation for 4,700 meters above sea level requires balancing optical efficiency with mechanical resilience against thermal cycles and pressure differentials.</p>
      <p>In SolidWorks, I modeled the internal structure of the Cherenkov tank to house the photomultiplier tubes (PMTs), high-voltage supplies, and data acquisition boards while keeping maintenance accessible in the field.</p>
    `
  },
  {
    id: 3,
    title: "From stellar pulsations to exoplanet transit detrending",
    date: "Nov 2025",
    category: "Exoplanets",
    location: "UMSA · La Paz",
    summary: "Why learning to model δ Scuti and SX Phoenicis variability is the best training ground for transit photometry.",
    content: `
      <p>Detecting an exoplanet transit requires separating a tiny, periodic dip in brightness from instrumental systematics and intrinsic stellar variability.</p>
      <p>Working on short-period pulsating stars has taught me how to build clean detrending pipelines with cubic splines and Fourier series—tools directly transferable to TESS and ground-based exoplanet follow-ups.</p>
    `
  }
];

/* 2. GALERÍA DE FOTOS INDEPENDIENTE (reemplaza los nombres por tus fotos en main) */
const FIELD_PHOTOS = [
  {
    src: "foto1.jpeg",
    caption: "Observatory night · La Paz",
    date: "2026"
  },
  {
    src: "foto2.jpeg",
    caption: "Field capture",
    date: "2026"
  },
  {
    src: "foto3.jpeg",
    caption: "Lab & instrumentation",
    date: "2026"
  },
  {
    src: "foto4.jpeg",
    caption: "3D & design notes",
    date: "2026"
  }
  {
    src: "foto5.jpeg",
    caption: "3D & design notes",
    date: "2026"
  }
  {
    src: "foto6.jpeg",
    caption: "3D & design notes",
    date: "2026"
  }
  {
    src: "foto7.jpeg",
    caption: "3D & design notes",
    date: "2026"
  }
  {
    src: "foto8.jpeg",
    caption: "3D & design notes",
    date: "2026"
  }
  {
    src: "foto9.jpeg",
    caption: "3D & design notes",
    date: "2026"
  }
  {
    src: "foto10.jpeg",
    caption: "3D & design notes",
    date: "2026"
  }
];
