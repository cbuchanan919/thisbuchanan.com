"use client";

import { useState} from "react"
export default function About() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Collapsible Section</h1>
      <div className="border rounded p-4 bg-gray-50 shadow-sm">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left font-medium mb-2"
          aria-expanded={isOpen}
          role="button"
        >
          {isOpen ? 'Hide Section' : 'Show Section'}
        </button>
        {isOpen && (
          <div className="transition-all duration-300 ease-in-out">
            <p className="mb-4">This is the collapsible content!</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}