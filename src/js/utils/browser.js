// ==========================================================================
// Browser sniffing
// Unfortunately, due to mixed support, UA sniffing is required
// ==========================================================================

const browser = {
  isIE: (window && Boolean(window.document.documentMode)) || false,
  isEdge: (window && window.navigator.userAgent.includes('Edge')) || false,
  isWebkit:
    (document && 'WebkitAppearance' in document.documentElement.style && !/Edge/.test(navigator.userAgent)) || false,
  isIPhone: (navigator && /(iPhone|iPod)/gi.test(navigator.platform)) || false,
  isIos:
    (navigator &&
      ((navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
        /(iPad|iPhone|iPod)/gi.test(navigator.platform))) ||
    false,
};

export default browser;
