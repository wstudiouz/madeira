import {useRef, useCallback, useEffect, useState, RefObject} from "react";
export function useIsMounted(): () => boolean {
  const isMountedRef = useRef(true);
  const isMounted = useCallback(() => isMountedRef.current, []);

  useEffect(() => {
    isMountedRef.current = true;
    return () => void (isMountedRef.current = false);
  }, []);

  return isMounted;
}

export enum AspectRatioMode {
  widthFromHeight,
  heightFromWidth,
}

type Size = {
  width: number | undefined;
  height: number | undefined;
};

export function useAspectRatio(
  aspectRatio: number,
  mode: AspectRatioMode,
  ref: RefObject<HTMLElement> | undefined
): Size {
  const [size, setSize] = useState<Size>({
    width: ref?.current?.clientWidth,
    height: ref?.current?.clientHeight,
  });

  const resizeCalback = useCallback(() => {
    if (ref?.current) {
      if (mode === AspectRatioMode.heightFromWidth) {
        const width = ref.current.clientWidth;
        const finalHeight = width / aspectRatio;

        return setSize({width: width, height: finalHeight});
      } else {
        const height = ref.current.clientHeight;
        const finalWidth = height * aspectRatio;
        return setSize({width: finalWidth, height: height});
      }
    }
  }, [aspectRatio, mode, ref]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => resizeCalback());
    if (ref?.current) resizeObserver.observe(ref.current);
    resizeCalback();
    return () => resizeObserver.disconnect();
  }, [ref, resizeCalback]);

  return size;
}

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0.3,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = false,
  }: Args
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = {threshold, root, rootMargin};
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    elementRef?.current,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(threshold),
    root,
    rootMargin,
    frozen,
  ]);

  return entry;
}

export default useIntersectionObserver;
