import { Dispatch, SetStateAction } from "react";

export type Cookie = {
  url: string;
  name: string;
  value: string;
};

export type CookieDialogProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  cookie?: Cookie | null;
  onSave: (cookie: Cookie) => void;
  mode: "add" | "edit";
};

export type SearchResultProps = {
  setContent: (content: "search-card" | "search-result") => void;
};

export type AssignCookieDialogProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
