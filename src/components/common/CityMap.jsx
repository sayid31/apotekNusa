/**
 * Peta stilasi — SVG inline, tanpa embed eksternal.
 * `pins` = [{ id, x, y, selected }]
 */
export default function CityMap({ pins = [], onPinClick, className = '' }) {
  return (
    <svg
      viewBox="0 0 400 300"
      className={`h-full w-full ${className}`}
      aria-hidden="true"
    >
      <rect width="400" height="300" fill="#0E1116" />

      {/* Jalan utama */}
      <path d="M-10 90h420M-10 210h420M90 -10v320M270 -10v320" stroke="#1A1E27" strokeWidth="18" />
      <path d="M-10 90h420M-10 210h420M90 -10v320M270 -10v320" stroke="#232833" strokeWidth="2" />
      <path d="M-10 150h420M180 -10v320" stroke="#1A1E27" strokeWidth="10" />

      {/* Blok bangunan */}
      {[
        [18, 20, 54, 52],
        [110, 18, 60, 54],
        [200, 22, 52, 50],
        [290, 18, 92, 56],
        [18, 110, 54, 78],
        [110, 108, 60, 82],
        [200, 112, 52, 76],
        [290, 110, 92, 80],
        [18, 230, 54, 56],
        [110, 228, 60, 58],
        [200, 232, 52, 54],
        [290, 230, 92, 56],
      ].map(([x, y, w, h], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={w}
          height={h}
          rx="4"
          fill={i === 5 ? '#8A6F2E' : '#141821'}
          fillOpacity={i === 5 ? 0.5 : 1}
        />
      ))}

      {/* Label jalan */}
      <text x="300" y="84" fill="#4A505C" fontSize="9" fontFamily="Inter, sans-serif">
        Jl. Merdeka Raya
      </text>
      <text x="14" y="204" fill="#4A505C" fontSize="9" fontFamily="Inter, sans-serif">
        Jl. Menteng Raya
      </text>

      {/* Pin outlet */}
      {pins.map((p) => (
        <g
          key={p.id}
          transform={`translate(${p.x} ${p.y})`}
          className={onPinClick ? 'cursor-pointer' : ''}
          onClick={onPinClick ? () => onPinClick(p.id) : undefined}
        >
          {p.selected && (
            <circle r="26" fill="#D4A94A" fillOpacity="0.16" className="animate-pulse-soft" />
          )}
          <g transform={`scale(${p.selected ? 1 : 0.6})`}>
            <path
              d="M0 -32c-11 0-20 9-20 20 0 15 20 34 20 34s20-19 20-34c0-11-9-20-20-20Z"
              fill={p.selected ? '#F2CC7B' : '#D4A94A'}
              fillOpacity={p.selected ? 1 : 0.7}
            />
            <circle cy="-13" r="6.5" fill="#0A0C10" />
          </g>
        </g>
      ))}
    </svg>
  )
}
