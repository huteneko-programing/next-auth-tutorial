"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import GoogleButton from "@/components/GoogleButton";
import GithubButton from "@/components/GithubButton";
import { useToast } from "@/hooks/use-toast";

type FormData = {
  email: string;
};

const Login = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await signIn("email", {
        email: data.email,
        callbackUrl: "/home",
      });
      toast({
        title: "確認メールを送信しました",
        description: "メールをご確認ください",
      });
    } catch (error) {
      toast({
        title: "エラーが発生しました",
        description: "もう一度お試しください",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader className="text-2xl font-bold text-center">
          ログイン
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                  {...register("email", {
                    required: "メールアドレスは必須です",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "有効なメールアドレスを入力してください",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full">
                メールでログイン
              </Button>
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

export default Login;
