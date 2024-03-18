"use client";
import { useState, useRef, useLayoutEffect, ReactNode } from 'react';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="mb-2 border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-3 px-5 bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      <div
        className="overflow-hidden transition-height duration-500 ease-in-out"
        style={{ height: contentHeight }}
      >
        <div className="p-5" ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
