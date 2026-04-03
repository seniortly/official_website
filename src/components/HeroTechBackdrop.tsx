/**
 * 首页 Hero 装饰层：纯 SVG，无外链图片。
 * 含科技网格、简化世界地图与节点、光晕与暗角。
 */
export function HeroTechBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1920 1080"
      aria-hidden
    >
      <defs>
        <linearGradient id="hero-cyan-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#0891b2" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0e7490" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="hero-fade-v" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#020617" stopOpacity="0" />
          <stop offset="45%" stopColor="#020617" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#020617" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="hero-center-flare" cx="50%" cy="28%" r="45%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
          <stop offset="55%" stopColor="#0891b2" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#020617" stopOpacity="0" />
        </radialGradient>
        <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path
            d="M48 0H0V48"
            fill="none"
            stroke="rgba(103,232,249,0.14)"
            strokeWidth="0.5"
          />
        </pattern>
        <pattern id="hero-grid-fine" width="12" height="12" patternUnits="userSpaceOnUse">
          <path
            d="M12 0H0V12"
            fill="none"
            stroke="rgba(103,232,249,0.06)"
            strokeWidth="0.35"
          />
        </pattern>
        <filter id="hero-node-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="g" />
          <feMerge>
            <feMergeNode in="g" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* 细网格 */}
      <rect width="100%" height="100%" fill="url(#hero-grid-fine)" opacity="0.85" />
      <rect width="100%" height="100%" fill="url(#hero-grid)" opacity="0.55" />

      {/* 斜向能量线 */}
      <g opacity="0.22" stroke="rgba(165,243,252,0.5)" strokeWidth="0.6">
        <line x1="0" y1="720" x2="640" y2="0" />
        <line x1="200" y1="1080" x2="920" y2="120" />
        <line x1="1200" y1="1080" x2="1920" y2="400" />
      </g>

      {/* 中心光晕（衬托主视觉） */}
      <ellipse cx="960" cy="300" rx="520" ry="380" fill="url(#hero-center-flare)" />

      {/* 右上：简化线框图（锯片轮廓示意） */}
      <g opacity="0.28" transform="translate(1480 120)">
        <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(103,232,249,0.4)" strokeWidth="1" />
        <circle cx="100" cy="100" r="72" fill="none" stroke="rgba(103,232,249,0.2)" strokeWidth="0.6" strokeDasharray="6 8" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const r = (deg * Math.PI) / 180;
          const x2 = 100 + Math.cos(r) * 88;
          const y2 = 100 + Math.sin(r) * 88;
          return (
            <line
              key={deg}
              x1="100"
              y1="100"
              x2={x2}
              y2={y2}
              stroke="rgba(103,232,249,0.25)"
              strokeWidth="0.5"
            />
          );
        })}
      </g>

      {/* 右下：抽象世界地图 + 节点网络 */}
      <g transform="translate(1080 520)" opacity="0.45">
        <path
          d="M120 80 Q200 40 320 60 Q440 80 520 140 Q600 200 640 280 Q620 360 540 400 Q420 440 300 400 Q180 360 100 280 Q60 200 80 120 Z"
          fill="rgba(6,78,95,0.25)"
          stroke="rgba(103,232,249,0.22)"
          strokeWidth="1"
        />
        <path
          d="M40 200 Q120 160 200 200 Q280 240 360 200 Q440 160 520 200"
          fill="none"
          stroke="rgba(103,232,249,0.18)"
          strokeWidth="0.8"
        />
        <path
          d="M480 100 Q560 80 640 120 Q720 180 780 140"
          fill="none"
          stroke="rgba(103,232,249,0.15)"
          strokeWidth="0.7"
        />
        {[
          [120, 100],
          [240, 140],
          [380, 90],
          [520, 180],
          [640, 120],
          [720, 220],
          [200, 260],
          [440, 300],
        ].map(([cx, cy], i) => (
          <g key={i} filter="url(#hero-node-glow)">
            <circle cx={cx} cy={cy} r="5" fill="rgba(103,232,249,0.15)" />
            <circle cx={cx} cy={cy} r="2.5" fill="#67e8f9" />
          </g>
        ))}
        <path
          d="M120 100 L240 140 M380 90 L520 180 M640 120 L720 220 M240 140 L380 90 M520 180 L640 120"
          fill="none"
          stroke="rgba(103,232,249,0.35)"
          strokeWidth="0.6"
          strokeDasharray="4 6"
        />
      </g>

      {/* 底部装饰：六边形点阵 */}
      <g opacity="0.2" fill="none" stroke="rgba(103,232,249,0.45)" strokeWidth="0.6">
        {[-2, -1, 0, 1, 2, 3, 4, 5].flatMap((col) =>
          [0, 1].map((row) => {
            const x = 400 + col * 140 + (row % 2) * 70;
            const y = 920 + row * 50;
            return (
              <path
                key={`${col}-${row}`}
                d={`M${x} ${y} l35 0 l17.5 30 l-17.5 30 l-35 0 l-17.5-30 z`}
              />
            );
          }),
        )}
      </g>

      {/* 大弧形扫描线 */}
      <g opacity="0.18" fill="none" stroke="rgba(34,211,238,0.45)" strokeWidth="1.2">
        <path d="M-40 600 A700 700 0 0 1 400 200" />
        <path d="M1520 880 A600 600 0 0 0 1960 400" />
      </g>

      {/* 整体暗角与底部加重 */}
      <rect width="100%" height="100%" fill="url(#hero-fade-v)" />
    </svg>
  );
}
