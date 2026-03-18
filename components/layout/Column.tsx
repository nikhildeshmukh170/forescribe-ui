"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import Card from "../ui/Card";
import { cardsData } from "@/data/cardData";

type ColumnProps = {
  columnId: number;
  direction: "up" | "down";
};

export default function Column({ columnId, direction }: ColumnProps) {
  const columnCards = useMemo(
    () => cardsData.filter((card) => card.column === columnId),
    [columnId]
  );

  const loopCards = [...columnCards, ...columnCards];

  const duration = direction === "up" ? 20 : 25;

  return (
    <motion.div
      className="flex flex-col gap-3"
      animate={{
        y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{ willChange: "transform" }}
    >
      {loopCards.map((card, index) => (
        <Card
          key={`${card.id}-${index}`}
          title={card.title}
          subtitle={card.subtitle}
          icon={card.icon}
          bgColor={card.bgColor}
        />
      ))}
    </motion.div>
  );
}