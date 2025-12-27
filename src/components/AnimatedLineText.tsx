import { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
}

interface Line {
  points: Point[];
  color: string;
  width: number;
  index: number;
  totalLines: number;
}

const COLORS = [
  '#FF6B6B', // coral red
  '#4ECDC4', // teal
  '#45B7D1', // sky blue
  '#96CEB4', // sage green
  '#FFEAA7', // soft yellow
  '#DDA0DD', // plum
  '#98D8C8', // mint
  '#F7DC6F', // gold
  '#BB8FCE', // lavender
  '#85C1E9', // light blue
  '#F8B500', // amber
  '#00CED1', // dark cyan
  '#FF69B4', // hot pink
  '#7FFF00', // chartreuse
  '#FF4500', // orange red
];

// Bold letter paths with better proportions
const LETTER_PATHS: { [key: string]: Point[][] } = {
  'N': [
    [{ x: 0, y: 100 }, { x: 0, y: 0 }],
    [{ x: 0, y: 0 }, { x: 50, y: 100 }],
    [{ x: 50, y: 100 }, { x: 50, y: 0 }],
  ],
  'A': [
    [{ x: 0, y: 100 }, { x: 25, y: 0 }],
    [{ x: 25, y: 0 }, { x: 50, y: 100 }],
    [{ x: 10, y: 65 }, { x: 40, y: 65 }],
  ],
  'F': [
    [{ x: 0, y: 100 }, { x: 0, y: 0 }],
    [{ x: 0, y: 0 }, { x: 40, y: 0 }],
    [{ x: 0, y: 45 }, { x: 30, y: 45 }],
  ],
  'I': [
    [{ x: 0, y: 0 }, { x: 30, y: 0 }],
    [{ x: 15, y: 0 }, { x: 15, y: 100 }],
    [{ x: 0, y: 100 }, { x: 30, y: 100 }],
  ],
  'U': [
    [{ x: 0, y: 0 }, { x: 0, y: 70 }],
    [{ x: 0, y: 70 }, { x: 5, y: 90 }, { x: 25, y: 100 }, { x: 45, y: 70 }],
    [{ x: 45, y: 70 }, { x: 45, y: 0 }],
  ],
  'R': [
    [{ x: 0, y: 100 }, { x: 0, y: 0 }],
    [{ x: 0, y: 0 }, { x: 30, y: 0 }, { x: 42, y: 10 }, { x: 42, y: 22 }],
    [{ x: 42, y: 22 }, { x: 42, y: 35 }, { x: 30, y: 45 }, { x: 0, y: 45 }],
    [{ x: 20, y: 45 }, { x: 45, y: 100 }],
  ],
  'O': [
    [{ x: 23, y: 0 }, { x: 8, y: 0 }, { x: 0, y: 15 }, { x: 0, y: 50 }],
    [{ x: 0, y: 50 }, { x: 0, y: 85 }, { x: 8, y: 100 }, { x: 23, y: 100 }],
    [{ x: 23, y: 100 }, { x: 38, y: 100 }, { x: 46, y: 85 }, { x: 46, y: 50 }],
    [{ x: 46, y: 50 }, { x: 46, y: 15 }, { x: 38, y: 0 }, { x: 23, y: 0 }],
  ],
  'H': [
    [{ x: 0, y: 0 }, { x: 0, y: 100 }],
    [{ x: 0, y: 50 }, { x: 45, y: 50 }],
    [{ x: 45, y: 0 }, { x: 45, y: 100 }],
  ],
  'M': [
    [{ x: 0, y: 100 }, { x: 0, y: 0 }],
    [{ x: 0, y: 0 }, { x: 28, y: 50 }],
    [{ x: 28, y: 50 }, { x: 56, y: 0 }],
    [{ x: 56, y: 0 }, { x: 56, y: 100 }],
  ],
};

const AnimatedLineText = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const linesRef = useRef<Line[]>([]);
  const animationRef = useRef<number>(0);
  const scrollProgressRef = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const text = 'NAFIUROHMAN';
  const letterSpacing = 85; // Increased spacing between letters
  const letterScale = 0.8; // Slightly larger scale

  const generateLines = (width: number, height: number) => {
    const lines: Line[] = [];
    const totalWidth = text.length * letterSpacing * letterScale;
    const startX = (width - totalWidth) / 2;
    const startY = (height - 100 * letterScale) / 2;

    let lineIndex = 0;
    let totalLines = 0;

    // Count total lines first
    text.split('').forEach((char) => {
      const paths = LETTER_PATHS[char];
      if (paths) totalLines += paths.length;
    });

    text.split('').forEach((char, charIndex) => {
      const paths = LETTER_PATHS[char];
      if (!paths) return;

      paths.forEach((path) => {
        const transformedPoints = path.map(point => ({
          x: startX + charIndex * letterSpacing * letterScale + point.x * letterScale,
          y: startY + point.y * letterScale,
        }));

        lines.push({
          points: transformedPoints,
          color: COLORS[lineIndex % COLORS.length],
          width: 12 + Math.random() * 4, // Much thicker: 12-16px
          index: lineIndex,
          totalLines: totalLines,
        });

        lineIndex++;
      });
    });

    return lines;
  };

  const interpolate = (points: Point[], t: number): Point => {
    if (points.length === 2) {
      return {
        x: points[0].x + (points[1].x - points[0].x) * t,
        y: points[0].y + (points[1].y - points[0].y) * t,
      };
    }
    
    const n = points.length - 1;
    let x = 0, y = 0;
    for (let i = 0; i <= n; i++) {
      const binomial = factorial(n) / (factorial(i) * factorial(n - i));
      const basis = binomial * Math.pow(1 - t, n - i) * Math.pow(t, i);
      x += basis * points[i].x;
      y += basis * points[i].y;
    }
    return { x, y };
  };

  const factorial = (n: number): number => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  const easeOutQuart = (t: number): number => {
    return 1 - Math.pow(1 - t, 2);
  };

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const scroll = scrollProgressRef.current;
    // Invert: 1 = fully visible (at top), 0 = hidden (scrolled down)
    const visibility = Math.max(0, Math.min(1, 1 - scroll * 1.5));

    linesRef.current.forEach((line) => {
      // Stagger the animation based on line index
      const staggerDelay = line.index / line.totalLines * 0.6;
      const lineVisibility = Math.max(0, Math.min(1, (visibility - staggerDelay) / (1 - staggerDelay)));
      
      const progress = easeOutQuart(lineVisibility);

      if (progress < 0.01) return;

      ctx.beginPath();
      ctx.strokeStyle = line.color;
      ctx.lineWidth = line.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.globalAlpha = Math.min(1, progress * 1.5);

      // No glow/shadow - clean solid lines
      ctx.shadowBlur = 0;

      const steps = 30;
      const visibleSteps = Math.floor(steps * progress);
      
      for (let i = 0; i <= visibleSteps; i++) {
        const t = i / steps;
        const point = interpolate(line.points, t);
        
        if (i === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      }

      ctx.stroke();
    });

    ctx.globalAlpha = 1;
    animationRef.current = requestAnimationFrame(() => draw(ctx));
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      scrollProgressRef.current = Math.min(1, scrollY / (windowHeight * 0.5));
    };

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    linesRef.current = generateLines(dimensions.width, dimensions.height);
    
    animationRef.current = requestAnimationFrame(() => draw(ctx));

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-20 pointer-events-none"
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
    />
  );
};

export default AnimatedLineText;