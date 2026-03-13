import { Quote, Trash2 } from "lucide-react";
import { Shayari } from "../types";
import { EditShayariDialog } from "./EditShayariDialog";

interface ShayariCardProps {
  shayari: Shayari;
  onDelete: (id: string) => void;
  onEdit: (id: string, updated: Omit<Shayari, "id" | "dateAdded">) => void;
}

export const ShayariCard = ({ shayari, onDelete, onEdit }: ShayariCardProps) => {
  return (
    <div className="group relative bg-white/70 backdrop-blur-sm border border-rose-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Actions (Edit & Delete) - Show on hover */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/80 backdrop-blur-md px-1 py-1 rounded-full shadow-sm border border-rose-50">
        <EditShayariDialog shayari={shayari} onEdit={onEdit} />
        <button 
          onClick={() => onDelete(shayari.id)}
          className="p-2 text-rose-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
          title="Delete"
        >
          <Trash2 size={18} />
        </button>
      </div>

      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
        <Quote size={80} className="text-rose-500 rotate-180" />
      </div>
      
      <div className="relative z-10 mb-8 mt-4">
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