"use client";

import React from "react";

export default function InteractiveGrid() {
  // 1200 cells easily cover standard viewports with the smaller 64px grid size (e.g. 40 columns * 30 rows)
  const cellCount = 1200;

  return (
    <>
      <style>{`
        .interactive-grid-container {
          border-top: 1px solid rgba(0, 0, 0, 0.04);
          border-left: 1px solid rgba(0, 0, 0, 0.04);
        }
        .interactive-grid-cell {
          border-right: 1px solid rgba(0, 0, 0, 0.04);
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
          transition: background-color 1000ms ease-out, border-color 1000ms ease-out;
        }
        .interactive-grid-cell:hover {
          background-color: #BBD5FC !important;
          border-color: #9abffa !important;
          transition-duration: 500ms !important;
        }
      `}</style>
      <div
        className="absolute inset-0 grid w-full h-full overflow-hidden select-none z-0 interactive-grid-container"
        style={{
          gridTemplateColumns: "repeat(auto-fill, 64px)",
          gridAutoRows: "64px",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: cellCount }).map((_, i) => (
          <div
            key={i}
            className="interactive-grid-cell"
          />
        ))}
      </div>
    </>
  );
}
