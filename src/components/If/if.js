import React from "react";

export default function({ ifCase, children }) {
  if (ifCase) {
    return children;
  }
  return null;
}
