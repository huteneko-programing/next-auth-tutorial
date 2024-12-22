"use client";

import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

const EmailButton = () => {
  return (
    <Button
      onClick={() => signIn("email", { callbackUrl: "/home" })}
      type="submit"
      className="w-full"
    >
      メールでログイン
    </Button>
  );
};

export default EmailButton;
