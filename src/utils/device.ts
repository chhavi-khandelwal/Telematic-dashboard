const getDevice = (width: number): string => {
  if (width < 500) {
    return 'mobile';
  } else if (width < 1024) {
    return 'tablet';
  } else if (width < 2560) {
    return 'desktop';
  } else {
    return 'desktop_2560';
  }
};

export const isMobile = getDevice(window.innerWidth) === 'mobile';
