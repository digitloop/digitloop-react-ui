import NProgress from "nprogress";
import { useEffect } from "react";
export function NavigationProgress({ isNavigating, }) {
    useEffect(() => {
        if (isNavigating) {
            NProgress.start();
        }
        else {
            NProgress.done();
        }
    }, [isNavigating]);
    return null;
}
