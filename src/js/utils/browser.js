// ==========================================================================
// Browser sniffing
// Unfortunately, due to mixed support, UA sniffing is required
// ==========================================================================

const browser = {
  isIE: (typeof window != 'undefined' && Boolean(window.document.documentMode)) || false,
  isEdge: (typeof window != 'undefined' && window.navigator.userAgent.includes('Edge')) || false,
  isWebkit:
    (typeof document != 'undefined' &&
      'WebkitAppearance' in document.documentElement.style &&
      !/Edge/.test(navigator.userAgent)) ||
    false,
  isIPhone: (typeof navigator != 'undefined' && /(iPhone|iPod)/gi.test(navigator.platform)) || false,
  isIos:
    (typeof navigator != 'undefined' &&
      ((navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
        /(iPad|iPhone|iPod)/gi.test(navigator.platform))) ||
    false,
};

export default browser;
