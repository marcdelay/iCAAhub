import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CategoryPillProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const TRANSLATE_AMOUNT = 200;

export function CategoryPills({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillProps) {
    const [translate, setTranslate] = useState(0);
    const [isLeftVisible, setIsLeftVisible] = useState(false);
    const [isRightVisible, setIsRightVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      if (containerRef.current == null) return;
      const observer = new ResizeObserver(() => {
        const container = containerRef.current;
        if (container == null) return;
    
        setIsLeftVisible(translate > 0);
        setIsRightVisible(
          container.scrollWidth > container.clientWidth &&
          translate + container.clientWidth < container.scrollWidth
        );
      });
      observer.observe(containerRef.current);
      return () => {
        observer.disconnect();
      };
    }, [translate, categories]);

    useEffect(() => {
        setTranslate(0);
      }, [selectedCategory]);
    
    return (
      <div ref={containerRef} className="overflow-x-hidden relative">
        <div
          className="flex whitespace-nowrap gap-3 transition-transform w-[max-content] pl-4"
          style={{ transform: `translateX(-${translate}px)`,
          transition: "transform 0.3s ease-in-out" }}
        >
          {categories
          .sort((a, b) => (a === selectedCategory ? -1 : b === selectedCategory ? 1 : 0))
          .map((category) => (
            <Button
              className="px-3 rounded-lg whitespace-nowrap"
              key={category}
              variant={selectedCategory === category ? "active" : "default"}
              onClick={() => onSelect(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        {isLeftVisible && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-error from-50% to-transparent w-24 h-full">
            <Button
              variant={"ghost"}
              size="icon"
              className="h-full aspect-square w-auto p-2"
              onClick={() => {
                setTranslate((translate) => Math.max(translate - TRANSLATE_AMOUNT, 0));
              }}
            >
              <ChevronLeft />
            </Button>
          </div>
        )}
        {isRightVisible && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-error from-50% to-transparent w-24 h-full flex justify-end">
            <Button
              variant={"ghost"}
              size="icon"
              className="h-full aspect-square w-auto p-2"
              onClick={() => {
                setTranslate((translate) => {
                  if (containerRef.current == null) return translate;
                  const edge = containerRef.current.scrollWidth;
                  const width = containerRef.current.clientWidth;
                  return Math.min(translate + TRANSLATE_AMOUNT, edge - width);
                });
              }}
            >
              <ChevronRight />
            </Button>
          </div>
        )}
      </div>
    );
  }