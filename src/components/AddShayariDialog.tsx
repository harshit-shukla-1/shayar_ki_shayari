import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PenLine } from "lucide-react";
import { Shayari } from "../types";

interface AddShayariDialogProps {
  onAdd: (shayari: Omit<Shayari, "id" | "dateAdded">) => void;
}

export const AddShayariDialog = ({ onAdd }: AddShayariDialogProps) => {
  const [open, setOpen] = useState(false);
  const [shayar, setShayar] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shayar.trim() || !text.trim()) return;

    onAdd({
      shayar: shayar.trim(),
      text: text.trim(),
    });

    setShayar("");
    setText("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-rose-600 hover:bg-rose-700 text-white rounded-full px-6 py-6 shadow-lg hover:shadow-xl transition-all gap-2">
          <PenLine size={20} />
          <span className="font-medium">Write Shayari</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] border-rose-100 bg-[#FFFDF5]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-rose-900 text-center mb-4">
            Pen Your Heart
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="shayar" className="text-rose-800">Shayar's Name</Label>
            <Input
              id="shayar"
              placeholder="e.g., Jaun Elia"
              value={shayar}
              onChange={(e) => setShayar(e.target.value)}
              className="border-rose-200 focus-visible:ring-rose-500 bg-white/50"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="text" className="text-rose-800">The Shayari</Label>
            <Textarea
              id="text"
              placeholder="Write the beautiful lines here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[120px] resize-none border-rose-200 focus-visible:ring-rose-500 bg-white/50 font-serif"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-rose-600 hover:bg-rose-700 text-white"
            disabled={!shayar.trim() || !text.trim()}
          >
            Add to Collection
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};