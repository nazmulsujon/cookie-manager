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
  const [cookieDetails, setCookieDetails] = useState({
    url: cookie?.url || "",
    name: cookie?.name || "",
    value: cookie?.value || "",
  });

  useEffect(() => {
    if (cookie) {
      setCookieDetails({
        url: cookie.url,
        name: cookie.name,
        value: cookie.value,
      });
    } else {
      setCookieDetails({
        url: "",
        name: "",
        value: "",
      });
    }
  }, [cookie]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCookieDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(cookieDetails);
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
              value={cookieDetails.url}
              onChange={handleChange}
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
              value={cookieDetails.name}
              onChange={handleChange}
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
              value={cookieDetails.value}
              onChange={handleChange}
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
