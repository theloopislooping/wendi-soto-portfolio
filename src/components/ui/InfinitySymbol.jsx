export default function InfinitySymbol({ className = '' }) {
  // Path with translate(7,0) baked in so the animateMotion dots align perfectly
  const infinityPath =
    'M14 7C14 4 11 1 9 3C7 5 7 9 9 11C11 13 14 10 14 7C14 7 14 7 14 7C14 4 17 1 19 3C21 5 21 9 19 11C17 13 14 10 14 7'

  return (
    <svg
      width="36"
      height="18"
      viewBox="0 0 28 14"
      className={`inline-block align-middle ${className}`}
      style={{ marginLeft: '6px' }}
    >
      {/* Static infinity path */}
      <path
        d={infinityPath}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.4"
      />

      {/* Glowing dot that traces the path */}
      <circle r="1.5" fill="currentColor" opacity="0.9">
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path={infinityPath}
        />
      </circle>

      {/* Glow effect around the dot */}
      <circle r="3.5" fill="currentColor" opacity="0.2">
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path={infinityPath}
        />
      </circle>
    </svg>
  )
}
