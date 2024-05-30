import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CookieDialogProps } from "@/types";
import { useState, useEffect, FC } from "react";

export const CookieDialog: FC<CookieDialogProps> = ({
  open,
  setOpen,
  cookie,
  onSave,
  mode,
}) => {
  const [url, setUrl] = useState<string>(cookie?.url || "");
  const [name, setName] = useState<string>(cookie?.name || "");
  const [value, setValue] = useState<string>(cookie?.value || "");

  useEffect(() => {
    if (cookie) {
      setUrl(cookie.url);
      setName(cookie.name);
      setValue(cookie.value);
    } else {
      setUrl("");
      setName("");
      setValue("");
    }
  }, [cookie]);

  const handleSubmit = () => {
    onSave({ url, name, value });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {mode === "add" ? "Add Cookie" : "Edit Cookie"}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-1 items-center gap-4">
            <Label htmlFor="url" className="text-right">
              URL
            </Label>
            <Input
              placeholder="Enter URL"
              id="url"
              name="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={mode === "edit"}
              required
            />
          </div>
          <div className="space-y-1 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              placeholder="Enter name"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={mode === "edit"}
              required
            />
          </div>
          <div className="space-y-1 items-center gap-4">
            <Label htmlFor="value" className="text-right">
              Value
            </Label>
            <Input
              placeholder="Enter value"
              id="value"
              name="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
