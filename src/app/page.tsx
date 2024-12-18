import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader className="text-2xl font-bold text-center">
          ログイン成功
        </CardHeader>
        <Button className="w-full bg-white text-black" variant={"destructive"}>
          ログアウト
        </Button>
      </Card>
    </div>
  );
}
