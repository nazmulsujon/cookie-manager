"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { AssignCookieDialogProps } from "@/types";

const cookieNames = [
  {
    name: "First cookie",
    value: "first-cookie",
  },
  {
    name: "Second cookie",
    value: "second-cookie",
  },
  {
    name: "Third cookie",
    value: "third-cookie",
  },
  {
    name: "First cookie",
    value: "first-cookie",
  },
  {
    name: "Second cookie",
    value: "second-cookie",
  },
  {
    name: "Third cookie",
    value: "third-cookie",
  },
  {
    name: "First cookie",
    value: "first-cookie",
  },
  {
    name: "Second cookie",
    value: "second-cookie",
  },
  {
    name: "Third cookie",
    value: "third-cookie",
  },
];

export const AssignCookieModal: React.FC<AssignCookieDialogProps> = ({
  open,
  setOpen,
}) => {
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>("");

  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Assign Cookie</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={popoverOpen}
                className="w-full justify-between"
              >
                {value
                  ? cookieNames.find((item) => item.value === value)?.name
                  : "Select name..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="start">
              <Command className="max-h-64">
                <CommandInput placeholder="Search by name" />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    {cookieNames.map((item, index) => (
                      <CommandItem
                        key={index}
                        value={item.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue);
                          setPopoverOpen(false);
                        }}
                      >
                        {item.name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
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
