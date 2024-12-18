"use client";

import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import GithubLogo from "../../public/logos/github-logo.png";

const GithubButton = () => {
  return (
    <Button
      onClick={() => signIn("github")}
      className="bg-white"
      size={"icon"}
      variant={"ghost"}
    >
      <Image src={GithubLogo} alt="Google logo" />
    </Button>
  );
};

export default GithubButton;
