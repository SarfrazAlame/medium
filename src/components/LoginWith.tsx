import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const LoginWith = ({ text, className }: { text: string; className: any }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className={className}>{text}</button>
      </DialogTrigger>
      <DialogContent className="w-1/2 h-1/3  p-10 justify-center">
        <DialogHeader className="text-2xl mx-auto font-sans ">
          Join Medium.
        </DialogHeader>
        <DialogHeader>
          <button className="border px-10 py-3 rounded-full border-black hover:bg-gray-100">
            Sign up with Google
          </button>
        </DialogHeader>
        <DialogDescription>
          <p className="text-[12px] text-center">
            Click “Sign up” to agree to Medium’s Terms of Service and
            acknowledge that Medium’s Privacy Policy applies to you.
          </p>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default LoginWith;
