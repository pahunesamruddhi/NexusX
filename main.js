/* ========================================
   NexusX V2 — Storytelling Motion
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  initHeroCanvas();
  initModelDiagram();
  initModelCanvas();
  initMobileMenu();
  initSmoothScroll();
});

/* === Navbar === */
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* === Scroll Animations (Storytelling) === */
function initScrollAnimations() {
  const animElements = document.querySelectorAll('.anim, .anim-left, .anim-right, .anim-scale');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -60px 0px'
  });

  animElements.forEach(el => observer.observe(el));
}

/* === Hero Canvas — Bloomberg Terminal Global Trade Map === */
function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let w, h;
  let isMobile = window.innerWidth < 768;

  let nodes = [];
  let routes = [];
  let particles = [];
  let pulses = [];

  function resize() {
    isMobile = window.innerWidth < 768;
    const hero = canvas.parentElement;
    w = hero.offsetWidth;
    h = hero.offsetHeight;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';

    initMapNetwork();
  }

  function initMapNetwork() {
    nodes = [];
    routes = [];
    particles = [];
    pulses = [];

    let mapWidth, mapHeight, mapLeft, mapTop, mapScale;
    const mapElement = document.querySelector('.hero-world-map');

    if (mapElement) {
      const rect = mapElement.getBoundingClientRect();
      const heroRect = canvas.parentElement.getBoundingClientRect();
      mapWidth = rect.width;
      mapHeight = rect.height;
      mapLeft = rect.left - heroRect.left;
      mapTop = rect.top - heroRect.top;
      mapScale = mapWidth / 1200;
    } else {
      // Fallback
      const mapMaxWidth = 1200;
      mapScale = Math.min(1, w / mapMaxWidth);
      mapWidth = 1200 * mapScale;
      mapHeight = mapWidth * 0.556;
      mapLeft = (w - mapWidth) / 2;
      mapTop = (h - mapHeight) / 2;
    }

    const getX = (ratio) => mapLeft + (mapWidth * ratio);
    const getY = (ratio) => mapTop + (mapHeight * ratio);

    // 1. Define Anchor Regions for Dense Node Generation
    const regions = [
      { id: 'NA_East', x: 0.22, y: 0.35, r: 0.05, count: 25, activeRate: 0.25 },
      { id: 'NA_West', x: 0.15, y: 0.35, r: 0.04, count: 18, activeRate: 0.2 },
      { id: 'SA', x: 0.30, y: 0.65, r: 0.06, count: 20, activeRate: 0.3 },
      { id: 'EU', x: 0.48, y: 0.28, r: 0.05, count: 35, activeRate: 0.35 },
      { id: 'Africa', x: 0.50, y: 0.55, r: 0.06, count: 15, activeRate: 0.1 },
      { id: 'ME', x: 0.61, y: 0.42, r: 0.03, count: 18, activeRate: 0.4 },
      { id: 'India', x: 0.68, y: 0.46, r: 0.03, count: 12, activeRate: 0.9, isHub: true },
      { id: 'Asia_East', x: 0.78, y: 0.38, r: 0.05, count: 25, activeRate: 0.3 },
      { id: 'SEA', x: 0.78, y: 0.55, r: 0.04, count: 20, activeRate: 0.3 },
      { id: 'Aus', x: 0.88, y: 0.75, r: 0.03, count: 12, activeRate: 0.15 }
    ];

    // Generate Dense Field Nodes
    regions.forEach(reg => {
      for (let i = 0; i < reg.count; i++) {
        // Random point within a circle radius
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * (reg.r * mapWidth);
        const ox = Math.cos(angle) * radius;
        const oy = Math.sin(angle) * radius;

        const isSignal = Math.random() < reg.activeRate;
        const isMasterHub = reg.isHub && i === 0;

        nodes.push({
          id: `${reg.id}-${i}`,
          region: reg.id,
          x: getX(reg.x) + ox,
          y: getY(reg.y) + oy,
          isHub: isMasterHub,
          isSignal: isSignal,
          size: isMasterHub ? 4.5 : (Math.random() * 1.0 + 0.6), // smaller passive nodes
          flickerRate: Math.random() * 0.04 + 0.01,
          flickerPhase: Math.random() * Math.PI * 2
        });
      }
    });

    const hubNode = nodes.find(n => n.isHub);

    // 2. Define Complex Trade Routes
    // Create random connections between nodes, favoring the Hub
    const signalNodes = nodes.filter(n => n.isSignal && !n.isHub);
    const passiveNodes = nodes.filter(n => !n.isSignal && !n.isHub);

    // Hub Routes (Long sweeping lines from active markets to India)
    if (hubNode) {
      signalNodes.forEach(node => {
        // Only 40% of signals get a direct sweeping line to hub to prevent clutter
        if (Math.random() > 0.6) return;

        const isUpwardCurve = node.x > hubNode.x;
        // The further away, the higher the arc
        const dist = Math.abs(node.x - hubNode.x);

        routes.push({
          source: node,
          target: hubNode,
          controlYOffset: (isUpwardCurve ? -1 : 1) * (dist * 0.3) * (Math.random() * 0.5 + 0.8),
          flowDuration: Math.random() * 4000 + 8000, // 8-12s loops
          opacity: 0.15 + Math.random() * 0.1
        });
      });
    }

    // Local/Ambient Routes (shorter connections between random nodes)
    for (let i = 0; i < 40; i++) {
      const source = nodes[Math.floor(Math.random() * nodes.length)];
      const target = nodes[Math.floor(Math.random() * nodes.length)];

      if (source !== target && source !== hubNode && target !== hubNode) {
        const isUpwardCurve = Math.random() > 0.5;
        const dist = Math.sqrt(Math.pow(source.x - target.x, 2) + Math.pow(source.y - target.y, 2));

        // Only connect if somewhat close
        if (dist < mapWidth * 0.3) {
          routes.push({
            source: source,
            target: target,
            controlYOffset: (isUpwardCurve ? -1 : 1) * (dist * 0.2),
            flowDuration: Math.random() * 5000 + 7000,
            opacity: 0.05 + Math.random() * 0.05
          });
        }
      }
    }

    // 3. Initialize Particles
    routes.forEach(route => {
      const pCount = Math.floor(Math.random() * 2) + 1;
      for (let i = 0; i < pCount; i++) {
        particles.push({
          route: route,
          progress: Math.random(), // Start anywhere
          speed: 1 / (route.flowDuration / 16)
        });
      }
    });

    // 4. Initialize Pulses
    signalNodes.forEach(node => {
      pulses.push({ node, age: Math.random(), speed: 1 / (Math.random() * 2000 + 3000) }); // 3-5s
    });
    // Add multiple strong pulses to the hub
    if (hubNode) {
      pulses.push({ node: hubNode, age: 0.1, speed: 1 / 4000 });
      pulses.push({ node: hubNode, age: 0.5, speed: 1 / 4000 });
      pulses.push({ node: hubNode, age: 0.8, speed: 1 / 4000 });
    }
  }

  function getCurvePoint(t, p0, p1, p2) {
    const mt = 1 - t;
    return {
      x: mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x,
      y: mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y
    };
  }

  function draw(time) {
    ctx.clearRect(0, 0, w, h);

    // Optional: add a global composite operation for that "energy field" look
    ctx.globalCompositeOperation = 'source-over'; // 'screen' or 'lighter' can be too bright, 'source-over' is safer for deep navy.

    // Draw Routes
    ctx.lineWidth = 0.8;
    routes.forEach(route => {
      ctx.beginPath();
      ctx.moveTo(route.source.x, route.source.y);
      const cx = (route.source.x + route.target.x) / 2;
      const cy = (route.source.y + route.target.y) / 2 + route.controlYOffset;
      ctx.quadraticCurveTo(cx, cy, route.target.x, route.target.y);

      // Thin glowing lines
      const isSignalRoute = route.source.isSignal || route.target.isHub;
      const rgb = isSignalRoute ? '242, 124, 44' : '255, 255, 255';

      ctx.strokeStyle = `rgba(${rgb}, ${route.opacity})`;
      ctx.stroke();

      route.cx = cx;
      route.cy = cy;
    });

    // Draw Particles
    ctx.globalCompositeOperation = 'lighter';
    particles.forEach(p => {
      p.progress += p.speed;
      if (p.progress > 1) p.progress = 0;

      const pos = getCurvePoint(p.progress, p.route.source, { x: p.route.cx, y: p.route.cy }, p.route.target);

      let alpha = 1;
      if (p.progress < 0.1) alpha = p.progress * 10;
      else if (p.progress > 0.9) alpha = (1 - p.progress) * 10;

      const isSignalRoute = p.route.source.isSignal || p.route.target.isHub;

      if (isSignalRoute) {
        // Fast glow technique (dual arcs) instead of shadowBlur
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(242, 124, 44, ${alpha * 0.2})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(242, 124, 44, ${alpha})`;
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.6})`;
        ctx.fill();
      }
    });
    ctx.globalCompositeOperation = 'source-over';

    // Draw Pulses
    pulses.forEach(p => {
      p.age += p.speed;
      if (p.age >= 1) p.age = 0;

      if (p.age >= 0 && p.age <= 1) {
        const radius = p.node.size + p.age * (p.node.isHub ? 50 : 25);
        const alpha = Math.max(0, 1 - p.age);
        const color = (p.node.isSignal || p.node.isHub) ? '242, 124, 44' : '255, 255, 255';

        ctx.beginPath();
        ctx.arc(p.node.x, p.node.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${color}, ${alpha * (p.node.isHub ? 0.6 : 0.3)})`;
        ctx.lineWidth = p.node.isHub ? 1.5 : 1;
        ctx.stroke();
      }
    });

    // Draw Nodes
    nodes.forEach(node => {
      const flicker = 0.8 + Math.sin((time * 0.002) * node.flickerRate + node.flickerPhase) * 0.2;
      const colorRGB = node.isSignal || node.isHub ? '242, 124, 44' : '180, 200, 220'; // Soft blue/white for passive
      const actualSize = node.size * flicker;

      // Glow outers
      ctx.beginPath();
      ctx.arc(node.x, node.y, actualSize * (node.isHub ? 4 : 2.5), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${colorRGB}, ${node.isHub ? 0.3 : 0.15})`;
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.arc(node.x, node.y, actualSize, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${colorRGB}, ${node.isSignal || node.isHub ? 1 : 0.7})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);

  resize(); // initializes network implicitly
  requestAnimationFrame(draw);
}

/* === Mobile Menu === */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
      closeMobile();
    } else {
      mobileMenu.classList.add('open');
      hamburger.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });

  mobileClose?.addEventListener('click', closeMobile);
}

function closeMobile() {
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
    hamburger?.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* === Smooth Scroll === */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navH = document.getElementById('navbar')?.offsetHeight || 0;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - navH,
          behavior: 'smooth'
        });
      }
    });
  });
}


/* === Model Diagram — Sequential Reveal === */
function initModelDiagram() {
  const modelItems = document.querySelectorAll('.model-anim');
  if (!modelItems.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger all items — CSS handles staggered delays
        modelItems.forEach(item => item.classList.add('model-visible'));
        observer.disconnect();
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -80px 0px'
  });

  // Observe the first model-anim item
  observer.observe(modelItems[0]);
}

/* === Model Background Canvas — Subtle Network === */
function initModelCanvas() {
  const canvas = document.getElementById('modelCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  function resize() {
    const section = canvas.parentElement;
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
  }

  resize();

  function draw() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Subtle orbital rings
    const cx = w * 0.5;
    const cy = h * 0.42;

    for (let i = 1; i <= 4; i++) {
      const rx = w * (0.12 + i * 0.1);
      const ry = h * (0.06 + i * 0.05);
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(15, 43, 58, ${0.025 - i * 0.004})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Subtle radial dots
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const r = w * 0.3;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r * 0.45;
      ctx.beginPath();
      ctx.arc(x, y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(242, 124, 44, 0.06)';
      ctx.fill();
    }
  }

  draw();
  window.addEventListener('resize', () => { resize(); draw(); });
}
