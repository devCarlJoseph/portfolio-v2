import React from "react";

interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export function ReactIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-11.5 -10.23174 23 20.46348"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextjsIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="90" cy="90" r="90" fill="currentColor" />
      <path
        fill="url(#nextjs-gradient-1)"
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.168 149.508 157.52Z"
      />
      <path fill="url(#nextjs-gradient-2)" d="M115 54H127V126H115V54Z" />
      <defs>
        <linearGradient
          id="nextjs-gradient-1"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="nextjs-gradient-2"
          x1="121"
          y1="54"
          x2="120.799"
          y2="106.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TypeScriptIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M11.75 14.5C11.75 15.6 11.3 16.5 10.3 17.1C9.4 17.7 8.2 18 6.7 18C5.5 18 4.4 17.7 3.5 17.2C2.6 16.7 2 16 1.7 15.1L3.8 13.9C4 14.5 4.4 14.9 4.9 15.3C5.4 15.7 6.1 15.9 6.8 15.9C7.4 15.9 7.9 15.8 8.3 15.5C8.7 15.2 8.9 14.9 8.9 14.4C8.9 13.9 8.7 13.6 8.3 13.3C7.9 13 7.3 12.8 6.3 12.4C5.1 12 4.1 11.5 3.5 10.8C2.9 10.1 2.6 9.2 2.6 8.2C2.6 7.2 3 6.3 3.8 5.7C4.6 5.1 5.6 4.8 7 4.8C8 4.8 9 5 9.8 5.4C10.6 5.8 11.2 6.4 11.5 7.1L9.6 8.3C9.4 7.9 9.1 7.5 8.6 7.3C8.2 7 7.7 6.9 7.1 6.9C6.5 6.9 6.1 7 5.7 7.3C5.4 7.5 5.2 7.8 5.2 8.2C5.2 8.6 5.4 8.9 5.8 9.2C6.2 9.5 6.7 9.7 7.5 10C8.8 10.5 9.8 11 10.5 11.7C11.3 12.4 11.75 13.3 11.75 14.5ZM21.5 7.1V9.2H17.8V17.8H15.1V9.2H11.5V7.1H21.5Z"
        fill="white"
      />
    </svg>
  );
}

export function JavaScriptIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M6.5 17.5C6.8 18.2 7.3 18.8 8.1 19.2C8.9 19.6 10 19.8 11.3 19.8C12.5 19.8 13.5 19.6 14.3 19.1C15.1 18.6 15.6 17.9 15.9 17C16.2 16.1 16.2 14.6 16.2 12.6V5.5H13.6V12.6C13.6 13.9 13.5 14.8 13.3 15.4C13.1 16 12.6 16.4 11.9 16.4C11.3 16.4 10.8 16.2 10.4 15.8C10.1 15.4 9.8 14.8 9.7 13.9L6.5 14.7C6.6 15.7 7 16.7 6.5 17.5ZM23.3 14.8C23.1 16.3 22.3 17.6 21.1 18.5C19.9 19.4 18.3 19.8 16.3 19.8C14.7 19.8 13.3 19.5 12.2 18.8C11.1 18.1 10.3 17.1 9.9 15.9L12.7 14.4C13 15.3 13.4 15.9 14 16.4C14.6 16.9 15.4 17.1 16.3 17.1C17.2 17.1 17.9 16.9 18.4 16.5C18.9 16.1 19.2 15.6 19.2 14.9C19.2 14.3 18.9 13.9 18.4 13.5C17.9 13.1 17.1 12.8 15.8 12.4C14.3 11.9 13.1 11.2 12.3 10.4C11.5 9.6 11.1 8.5 11.1 7.2C11.1 5.9 11.6 4.8 12.6 3.9C13.6 3 15 2.5 16.8 2.5C18.2 2.5 19.4 2.8 20.4 3.4C21.4 4 22.1 4.8 22.5 5.8L19.8 7.3C19.6 6.7 19.2 6.2 18.7 5.8C18.2 5.4 17.5 5.2 16.7 5.2C15.9 5.2 15.3 5.4 14.8 5.8C14.3 6.2 14.1 6.7 14.1 7.3C14.1 7.8 14.3 8.3 14.8 8.6C15.3 8.9 16.1 9.3 17.2 9.7C18.9 10.3 20.2 11 21.2 11.9C22.2 12.7 22.7 13.7 23.3 14.8Z"
        fill="#000000"
      />
    </svg>
  );
}

export function TailwindIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function NodejsIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M16 2L3 9.5V24.5L16 32L29 24.5V9.5L16 2Z"
        fill="#5FA04E"
      />
      <path
        d="M16 4.5L26.5 10.6V22.8L16 28.9L5.5 22.8V10.6L16 4.5Z"
        fill="#417E38"
      />
      <path
        d="M16 12C14.34 12 13 13.34 13 15V19C13 20.66 14.34 22 16 22C17.66 22 19 20.66 19 19V15C19 13.34 17.66 12 16 12Z"
        fill="white"
      />
    </svg>
  );
}

export function PostgresIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.6 15.8C16.8 17.1 14.9 18 12.5 18C9.5 18 7 16.1 7 13.3C7 11.2 8.5 9.6 10.7 9.1C10.4 8.5 10.2 7.8 10.2 7.1C10.2 5.2 11.7 3.8 13.6 3.8C15.4 3.8 16.8 5.1 16.8 6.9C16.8 7.6 16.6 8.3 16.2 8.9C17.5 9.7 18.2 11 18.2 12.5C18.2 13.8 17.9 14.9 17.6 15.8Z"
        fill="#4169E1"
      />
      <path
        d="M13.6 5.2C12.5 5.2 11.6 6 11.6 7.1C11.6 7.6 11.8 8.1 12.1 8.5C12.6 8.3 13.1 8.2 13.6 8.2C14.7 8.2 15.5 8.9 15.5 9.9C15.5 10.4 15.3 10.8 15 11.1C15.8 11.5 16.3 12.1 16.3 12.8C16.3 13.9 15.2 14.8 13.8 14.8C12.2 14.8 11 13.8 11 12.3H9.4C9.4 14.7 11.3 16.4 13.8 16.4C16.1 16.4 17.9 14.9 17.9 12.8C17.9 11.4 17 10.2 15.6 9.6C15.8 9.3 15.9 8.9 15.9 8.5C15.9 6.7 14.9 5.2 13.6 5.2Z"
        fill="white"
      />
    </svg>
  );
}

export function SupabaseIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M13.4 21.6C12.9 22.2 12 21.8 12 21V13.8H21.2C22.2 13.8 22.7 15 22 15.7L13.4 21.6Z"
        fill="#3ECF8E"
      />
      <path
        d="M10.6 2.4C11.1 1.8 12 2.2 12 3V10.2H2.8C1.8 10.2 1.3 9 2 8.3L10.6 2.4Z"
        fill="#3ECF8E"
      />
    </svg>
  );
}

export function PrismaIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M21.7 18.2L13.1 2.5C12.7 1.8 11.7 1.8 11.3 2.5L2.3 18.2C1.9 18.9 2.4 19.8 3.2 19.8H20.8C21.6 19.8 22.1 18.9 21.7 18.2ZM12.2 6.2L17.7 16.5H6.7L12.2 6.2Z"
        fill="#2D3748"
        className="dark:fill-white"
      />
    </svg>
  );
}

export function LaravelIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M21.2 6.3L14.3 2.3C13.8 2 13.1 2.2 12.8 2.7L8.2 10.7L13.5 13.7L17.6 6.6L20.3 8.2L13.7 19.7L3.4 13.7L5.5 10.1L3.5 9L0.7 13.8C0.3 14.5 0.5 15.3 1.2 15.7L12.5 22.3C13 22.6 13.7 22.4 14 21.9L22.2 7.7C22.6 7 22 6.7 21.2 6.3Z"
        fill="#FF2D20"
      />
    </svg>
  );
}

export function ReactNativeIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function DockerIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M13.9 8.2H16.2V10.5H13.9V8.2ZM11.1 8.2H13.4V10.5H11.1V8.2ZM8.3 8.2H10.6V10.5H8.3V8.2ZM13.9 5.4H16.2V7.7H13.9V5.4ZM11.1 5.4H13.4V7.7H11.1V5.4ZM8.3 5.4H10.6V7.7H8.3V5.4ZM13.9 11H16.2V13.3H13.9V11ZM11.1 11H13.4V13.3H11.1V11ZM8.3 11H10.6V13.3H8.3V11ZM5.5 11H7.8V13.3H5.5V11ZM23.4 12.1C22.9 11.8 21.8 11.7 20.9 12.2C20.7 11.2 19.9 10.5 19.1 10.3L18.4 12.6C18.6 13.5 19.2 14.1 20 14.4C19.7 16 18.2 18.5 15.2 18.5C11 18.5 9.4 15.7 7.7 15.7C7.1 15.7 6.4 15.9 5.8 16.3C4.2 15.2 3.1 13.7 2.6 11.9H0.3C0.8 14.7 2.3 17 4.6 18.5C6.1 19.5 7.9 20 9.8 20C15.1 20 18.9 16.8 20.3 13.7C21.6 13.7 22.8 13.2 23.4 12.1Z"
        fill="#2496ED"
      />
    </svg>
  );
}

export function GitIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M21.6 10.6L13.4 2.4C12.9 1.9 12 1.9 11.5 2.4L9.6 4.3L12.3 7C12.9 6.8 13.7 7 14.2 7.5C14.7 8 14.9 8.8 14.7 9.4L17.2 11.9C17.8 11.7 18.6 11.9 19.1 12.4C19.8 13.1 19.8 14.2 19.1 14.9C18.4 15.6 17.3 15.6 16.6 14.9C16.1 14.4 15.9 13.7 16.1 13.1L13.8 10.8V15.5C14 15.8 14.1 16.2 14.1 16.6C14.1 17.7 13.2 18.6 12.1 18.6C11 18.6 10.1 17.7 10.1 16.6C10.1 15.8 10.5 15.2 11.1 14.8V9.8C10.5 9.4 10.1 8.8 10.1 8C10.1 7.6 10.2 7.2 10.5 6.9L7.8 4.2L2.4 9.6C1.9 10.1 1.9 11 2.4 11.5L10.6 19.7C11.1 20.2 12 20.2 12.5 19.7L21.6 10.6Z"
        fill="#F05032"
      />
    </svg>
  );
}

export function VercelIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M12 2L22 20H2L12 2Z" fill="currentColor" />
    </svg>
  );
}

export function ViteIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M29.5 5.5L16.8 30.2C16.5 30.8 15.6 30.8 15.3 30.2L2.5 5.5C2.1 4.7 2.8 3.9 3.6 4.1L16 6.8L28.4 4.1C29.2 3.9 29.9 4.7 29.5 5.5Z"
        fill="url(#vite-gradient-1)"
      />
      <path
        d="M20.9 2.5L11.5 13.5H16.8L12.2 24.5L22.8 11.2H17.2L20.9 2.5Z"
        fill="#FFD600"
      />
      <defs>
        <linearGradient id="vite-gradient-1" x1="2.5" y1="4" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PythonIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M11.9 2C8.6 2 8.8 3.4 8.8 3.4L8.8 4.9H12.1V5.4H5.3C3.6 5.4 2.2 6.8 2.2 8.6C2.2 10.4 3.1 11.3 4.5 11.3H5.8V9.7C5.8 8.1 7.2 6.8 8.8 6.8H12.1C13.5 6.8 14.6 5.7 14.6 4.3C14.6 2.9 13.5 2 11.9 2ZM10.5 3.3C10.9 3.3 11.2 3.6 11.2 4C11.2 4.4 10.9 4.7 10.5 4.7C10.1 4.7 9.8 4.4 9.8 4C9.8 3.6 10.1 3.3 10.5 3.3Z"
        fill="#3776AB"
      />
      <path
        d="M12.1 22C15.4 22 15.2 20.6 15.2 20.6V19.1H11.9V18.6H18.7C20.4 18.6 21.8 17.2 21.8 15.4C21.8 13.6 20.9 12.7 19.5 12.7H18.2V14.3C18.2 15.9 16.8 17.2 15.2 17.2H11.9C10.5 17.2 9.4 18.3 9.4 19.7C9.4 21.1 10.5 22 12.1 22ZM13.5 20.7C13.1 20.7 12.8 20.4 12.8 20C12.8 19.6 13.1 19.3 13.5 19.3C13.9 19.3 14.2 19.6 14.2 20C14.2 20.4 13.9 20.7 13.5 20.7Z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function RedisIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M21.7 7.7L12.5 3.1C12.2 2.9 11.8 2.9 11.5 3.1L2.3 7.7C1.9 7.9 1.6 8.3 1.6 8.7V15.3C1.6 15.7 1.9 16.1 2.3 16.3L11.5 20.9C11.8 21.1 12.2 21.1 12.5 20.9L21.7 16.3C22.1 16.1 22.4 15.7 22.4 15.3V8.7C22.4 8.3 22.1 7.9 21.7 7.7Z"
        fill="#DC382D"
      />
      <ellipse cx="12" cy="11.5" rx="6" ry="3" fill="#FFFFFF" fillOpacity="0.4" />
    </svg>
  );
}

export function MongoIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M12 2C11.8 2 11.5 2.1 11.3 2.3C10.2 3.6 5.8 9.1 5.8 14.2C5.8 17.8 8.6 20.8 12 21.8C15.4 20.8 18.2 17.8 18.2 14.2C18.2 9.1 13.8 3.6 12.7 2.3C12.5 2.1 12.2 2 12 2Z"
        fill="#47A248"
      />
      <path
        d="M12 3.2V21C11.7 20.9 11.5 20.8 11.2 20.6C8.2 19.3 6.8 16.7 6.8 14.2C6.8 9.8 10.6 5.1 12 3.2Z"
        fill="#4DB33D"
      />
    </svg>
  );
}

export function StripeIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="#635BFF" />
      <path
        d="M13.9 9.8C13.9 9.2 13.4 8.8 12.4 8.8C11.2 8.8 10 9.2 9.1 9.7V7.3C10.2 6.8 11.4 6.5 12.6 6.5C15.2 6.5 16.9 7.8 16.9 10.1C16.9 13.7 12 13.3 12 14.8C12 15.5 12.6 15.9 13.7 15.9C15 15.9 16.4 15.4 17.4 14.8V17.3C16.2 17.8 14.9 18.1 13.6 18.1C10.9 18.1 9.1 16.8 9.1 14.5C9.1 10.7 13.9 11.3 13.9 9.8Z"
        fill="white"
      />
    </svg>
  );
}

export function FigmaIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 57"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

export function AstroIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M8.8 19.3C8.4 19.7 7.7 19.4 7.8 18.8L9.9 6.2C10 5.6 10.6 5.2 11.2 5.2H12.8C13.4 5.2 14 5.6 14.1 6.2L16.2 18.8C16.3 19.4 15.6 19.7 15.2 19.3L12.5 16.5H11.5L8.8 19.3Z"
        fill="#FF5D01"
      />
      <circle cx="12" cy="11.5" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

export function VueIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M2 3H6.5L12 12.5L17.5 3H22L12 21L2 3Z" fill="#41B883" />
      <path d="M6.5 3H10.5L12 5.5L13.5 3H17.5L12 12.5L6.5 3Z" fill="#35495E" />
    </svg>
  );
}

export function GraphQLIcon({ size = 24, className = "", ...props }: TechIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z"
        stroke="#E10098"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="12" cy="2" r="2" fill="#E10098" />
      <circle cx="20.66" cy="7" r="2" fill="#E10098" />
      <circle cx="20.66" cy="17" r="2" fill="#E10098" />
      <circle cx="12" cy="22" r="2" fill="#E10098" />
      <circle cx="3.34" cy="17" r="2" fill="#E10098" />
      <circle cx="3.34" cy="7" r="2" fill="#E10098" />
    </svg>
  );
}
