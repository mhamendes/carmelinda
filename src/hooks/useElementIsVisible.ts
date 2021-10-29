import React from 'react';

export const useElementIsVisible = (
  rootMargin: string,
  initialState: boolean,
  element: HTMLDivElement | null
) => {
  const [isVisible, setState] = React.useState(initialState);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (element) setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [element, rootMargin]);

  return isVisible;
};
