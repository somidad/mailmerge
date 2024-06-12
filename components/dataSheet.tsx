import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Textarea } from "./ui/textarea";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: string;
};

export default function DataSheet({ open, onOpenChange, data }: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Data</SheetTitle>
        </SheetHeader>
        <div className="grow">
          <Textarea className="h-full" readOnly value={data} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
