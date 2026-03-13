import { Quote } from "lucide-react";
import { Shayari } from "../types";

interface ShayariCardProps {
  shayari: Shayari;
}

export const ShayariCard = ({ shayari }: ShayariCardProps) => {
  return (
    <div className="group relative bg-white/70 backdrop-blur-sm border border-rose-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <Quote size={64} className="text-rose-400 rotate-180" />
      </div>
      
      <div className="relative z-10 mb-8">
        <Quote size={24} className="text-rose-400/50 mb-4" />
        <p className="font-serif text-xl md:text-2xl text-rose-950 leading-relaxed whitespace-pre-wrap">
          {shayari.text}
        </p>
      </div>
      
      <div className="relative z-10 flex items-center justify-end">
        <div className="text-right">
          <p className="font-medium text-rose-900">— {shayari.shayar}</p>
        </div>
      </div>
    </div>
  );
};