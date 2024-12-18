import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import GoogleLogo from "../../../../public/logos/google-logo.png";
import GithubLogo from "../../../../public/logos/github-logo.svg";
import Link from "next/link";
import GoogleButton from "@/components/GoogleButton";
import GithubButton from "@/components/GithubButton";

const SignUp = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader className="text-2xl font-bold text-center">
          サインアップ
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  メールアドレス
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="mail@example.com"
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full">
                メールでログイン
              </Button>
              <div className="text-center">
                <Link href={"/login"}>
                  <Button className="bg-white text-blue-600" variant={"link"}>
                    既にアカウントを持っていますか？
                  </Button>
                </Link>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  または
                </span>
              </div>
            </div>
            <div className="flex items-center justify-around">
              <GoogleButton />
              <GithubButton />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
