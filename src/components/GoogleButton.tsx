"use client";

import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import GoogleLogo from "../../public/logos/google-logo.png";

const GoogleButton = () => {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/home" })}
      className="bg-white"
      size={"icon"}
      variant={"ghost"}
    >
      <Image src={GoogleLogo} alt="Google logo" />
    </Button>
  );
};

export default GoogleButton;
