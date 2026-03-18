"use client";

import Column from "./Column";

type Direction = "up" | "down";

const columns: { id: number; direction: Direction }[] = [
  { id: 1, direction: "up" },
  { id: 2, direction: "down" },
  { id: 3, direction: "up" },
  { id: 4, direction: "down" },
  { id: 5, direction: "up" },
];

export default function CardGrid() {
  return (
    <div className="absolute inset-0 flex justify-center gap-2 sm:gap-3 md:gap-4 overflow-hidden perspective-[1000px]">
      {columns.map((col) => (
        <Column
          key={col.id}
          columnId={col.id}
          direction={col.direction}
        />
      ))}
    </div>
  );
}