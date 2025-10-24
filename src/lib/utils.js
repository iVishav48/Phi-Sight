import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
    console.error("Error processing image:", error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
