export function getMonochromeColor(level: number): string {
  switch (level) {
    case 1:
      return "bg-neutral-300 dark:bg-neutral-700";
    case 2:
      return "bg-neutral-400 dark:bg-neutral-500";
    case 3:
      return "bg-neutral-600 dark:bg-neutral-300";
    case 4:
      return "bg-black dark:bg-white";
    case 0:
    default:
      return "bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800";
  }
}
