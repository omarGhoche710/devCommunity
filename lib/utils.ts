import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ERROR HANDLER
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    console.error("Error:", error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    console.error("Error:", error);
    throw new Error(`Error: ${error}`);
  } else {  
    console.error("Unknown Error:", error);
    throw new Error(`Unknown Error occured`);
  }
}
