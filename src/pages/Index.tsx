import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { ShayariCard } from "@/components/ShayariCard";
import { AddShayariDialog } from "@/components/AddShayariDialog";
import { initialShayaris } from "@/data/initialShayaris";
import { Shayari } from "@/types";
import { useToast } from "@/hooks/use-toast";

const STORAGE_KEY = "shayari-collection-data";

const Index = () => {
  const [shayaris, setShayaris] = useState<Shayari[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Load saved shayaris or use defaults
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setShayaris(JSON.parse(saved));
      } catch (e) {
        setShayaris(initialShayaris);
      }
    } else {
      setShayaris(initialShayaris);
    }
  }, []);

  const saveToStorage = (data: Shayari[]) => {
    setShayaris(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  const handleAddShayari = (newShayariData: Omit<Shayari, "id" | "dateAdded">) => {
    const newShayari: Shayari = {
      ...newShayariData,
      id: crypto.randomUUID(),
      dateAdded: new Date().toISOString(),
    };

    const updatedShayaris = [newShayari, ...shayaris];
    saveToStorage(updatedShayaris);
    
    toast({
      title: "Beautiful words added",
      description: "The shayari has been added to your collection.",
      className: "bg-rose-50 border-rose-200 text-rose-900",
    });
  };

  const handleUpdateShayari = (id: string, updatedData: Omit<Shayari, "id" | "dateAdded">) => {
    const updatedShayaris = shayaris.map((s) => 
      s.id === id ? { ...s, ...updatedData } : s
    );
    saveToStorage(updatedShayaris);
    
    toast({
      title: "Updated",
      description: "The shayari has been successfully updated.",
      className: "bg-rose-50 border-rose-200 text-rose-900",
    });
  };

  const handleDeleteShayari = (id: string) => {
    const updatedShayaris = shayaris.filter((s) => s.id !== id);
    saveToStorage(updatedShayaris);
    
    toast({
      title: "Removed",
      description: "The shayari has been removed from your collection.",
      className: "bg-rose-50 border-rose-200 text-rose-900",
    });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] selection:bg-rose-200 selection:text-rose-900">
      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-24">
        
        {/* Header Section */}
        <header className="text-center mb-16 space-y-4">
          <div className="flex justify-center mb-6">
            <Heart size={40} className="text-rose-500 fill-rose-50 animate-pulse duration-3000" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-rose-950 tracking-tight">
            Rooh ki Shayari
          </h1>
          <p className="text-lg md:text-xl text-rose-800/80 font-serif max-w-2xl mx-auto">
            A sanctuary for words that touch the soul. Explore the timeless romance of classic poets or add your own verses to the collection.
          </p>
        </header>

        {/* Actions */}
        <div className="flex justify-center mb-16">
          <AddShayariDialog onAdd={handleAddShayari} />
        </div>

        {/* Grid of Shayaris */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {shayaris.map((shayari) => (
            <ShayariCard 
              key={shayari.id} 
              shayari={shayari} 
              onDelete={handleDeleteShayari}
              onEdit={handleUpdateShayari}
            />
          ))}
        </div>

        {shayaris.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-rose-800/60 font-serif">
              The collection is empty. Be the first to share a beautiful thought.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;