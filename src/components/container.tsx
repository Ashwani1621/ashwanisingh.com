import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Centered content column with left/right whitespace.
 * Used by the header, main content and footer so everything
 * shares the same measure.
 */
export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-2xl px-4 sm:px-6", className)}
      {...props}
    />
  );
}
