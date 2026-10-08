export default function ToothIcon({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      {/* Pristine white tooth body */}
      <path
        d="M12 4.2C10.2 2.8 7.6 2.8 6 5C4.4 7.2 4.3 11 5.6 14.8C6.6 17.6 7.9 20 9.1 21.6C9.9 22.6 10.9 22 11.3 19.6C11.6 17.6 11.8 16 12 14.8C12.2 16 12.4 17.6 12.7 19.6C13.1 22 14.1 22.6 14.9 21.6C16.1 20 17.4 17.6 18.4 14.8C19.7 11 19.6 7.2 18 5C16.4 2.8 13.8 2.8 12 4.2Z"
        fill="#FFFFFF"
      />

      {/* Gentle smile arc */}
      <path
        d="M9.2 11.5C10.1 13.2 13.9 13.2 14.8 11.5"
        stroke="#2563EB"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* Gloss highlight arc on top left */}
      <path
        d="M7.8 7C8.6 5.8 10 5.2 11.2 5.2"
        stroke="#E0F2FE"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Gleaming sparkle star on top right */}
      <path
        d="M19.5 1.5L20.2 3.2L22 3.8L20.2 4.5L19.5 6.2L18.8 4.5L17 3.8L18.8 3.2L19.5 1.5Z"
        fill="#38BDF8"
      />
      <circle cx="19.5" cy="3.8" r="0.6" fill="#FFFFFF" />
    </svg>
  );
}
