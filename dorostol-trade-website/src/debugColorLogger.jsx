export {};

import React from 'react';

const originalCreateElement = React.createElement;

// Safe stringify to avoid circular structure errors
function safeStringify(obj, indent = 2) {
  const seen = new WeakSet();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  }, indent);
}

React.createElement = function (type, props, ...children) {
    if (props) {
        let found = false;

        if (props.style) {
            const styleStr = safeStringify(props.style);
            if (/color|background|border/i.test(styleStr)) {
                console.log(`[DEBUG STYLE] Component: ${type?.name || type} uses style:`, props.style);
                console.trace();
                found = true;
            }
        }

        if (props.className && /\btext-|bg-|border-|from-|to-|via-|hover:bg-/.test(props.className)) {
            console.log(`[DEBUG CLASSNAME] Component: ${type?.name || type} uses className:`, props.className);
            console.trace();
            found = true;
        }

        const propsStr = safeStringify(props);
        if (/color|background|border/i.test(propsStr) && !found) {
            console.log(`[DEBUG PROPS] Component: ${type?.name || type} has props:`, props);
            console.trace();
        }
    }

    return originalCreateElement(type, props, ...children);
};