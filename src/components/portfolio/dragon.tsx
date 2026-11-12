export function DragonArt() {
  return (
    <svg
      viewBox="0 0 88 48"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
    >
      {/* tail, back, neck, head, throat and belly as one line */}
      <path d="M6 16 C 12 21, 16 27, 24 29 C 32 31, 40 30, 46 26 C 50 23, 52 19, 56 16 C 60 13, 66 12, 70 14 L 79 18 L 70 21 C 64 22, 60 25, 56 29 C 53 32, 50 34, 46 36 C 38 38, 28 37, 22 34 C 16 31, 10 24, 6 16 Z" />
      {/* tail spade */}
      <path d="M6 16 C 3 14, 2 11, 3 8 C 6 10, 7 13, 6 16 Z" />
      {/* wing */}
      <g className="dragon-wing">
        <path d="M45 25 C 43 16, 47 8, 57 4 C 52 10, 50 17, 50 24 Z" />
        <path d="M48 22 C 48 15, 50 10, 54 6" strokeWidth="1.1" />
      </g>
      {/* legs */}
      <path d="M50 34 L 51 41 L 56 41" />
      <path d="M33 36 L 33 42 L 38 42" />
      {/* horns */}
      <path d="M63 13 L 60 8" />
      <path d="M67 12.5 L 65 8" />
      {/* eye */}
      <circle cx="67" cy="17" r="1.3" fill="currentColor" stroke="none" />
      {/* smoke */}
      <path d="M81 17 C 84 16, 85 19, 88 18" strokeWidth="1.1" opacity="0.55" />
    </svg>
  );
}

export function FooterDragon() {
  return (
    <span aria-hidden="true" className="footer-dragon">
      <span className="footer-dragon__bob">
        <DragonArt />
      </span>
    </span>
  );
}
