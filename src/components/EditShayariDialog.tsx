import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";
import { Shayari } from "../types";

interface EditShayariDialogProps {
  shayari: Shayari;
  onEdit: (id: string, updated: Omit<Shayari, "id" | "dateAdded">) => void;
}

export const EditShayariDialog = ({ shayari, onEdit }: EditShayariDialogProps) => {
  const [open, setOpen] = useState(false);
  const [shayar, setShayar] = useState(shayari.shayar);
  const [text, setText] = useState(shayari.text);

  // Sync state if shayari prop changes
  useEffect(() => {
    setShayar(shayari.shayar);
    setText(shayari.text);
  }, [shayari]);

  const handleSave = () => {
    if (!shayar.trim() || !text.trim()) return;
    onEdit(shayari.id, {
      shayar: shayar.trim(),
      text: text.trim(),
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button 
          className="p-2 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors"
          title="Edit"
        >
          <Pencil size={18} />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] border-rose-100 bg-[#FFFDF5]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-rose-900 text-center mb-4">
            Edit Shayari
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor={`edit-shayar-${shayari.id}`} className="text-rose-800">Shayar's Name</Label>
            <Input
              id={`edit-shayar-${shayari.id}`}
              value={shayar}
              onChange={(e) => setShayar(e.target.value)}
              className="border-rose-200 focus-visible:ring-rose-500 bg-white/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`edit-text-${shayari.id}`} className="text-rose-800">The Shayari</Label>
            <Textarea
              id={`edit-text-${shayari.id}`}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[120px] resize-none border-rose-200 focus-visible:ring-rose-500 bg-white/50 font-serif"
            />
          </div>
          <Button 
            onClick={handleSave}
            className="w-full bg-rose-600 hover:bg-rose-700 text-white"
            disabled={!shayar.trim() || !text.trim()}
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};