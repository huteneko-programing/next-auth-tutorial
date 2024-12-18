import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React from "react";
import Link from "next/link";
import GithubButton from "@/components/GithubButton";
import GoogleButton from "@/components/GoogleButton";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader className="text-2xl font-bold text-center">
          ログイン
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
                <Link href={"/sign-up"}>
                  <Button className="bg-white text-blue-600" variant={"link"}>
                    アカウントを持ってませんか？
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

export default LoginPage;
