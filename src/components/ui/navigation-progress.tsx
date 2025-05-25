import NProgress from "nprogress";
import { useEffect } from "react";

export function NavigationProgress({
  isNavigating,
}: {
  isNavigating: boolean;
}) {
  useEffect(() => {
    if (isNavigating) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [isNavigating]);

  return null;
}
