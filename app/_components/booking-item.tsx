import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function BookingItem() {
    return (
        <Card className="bg-zinc-900 hover:border-zinc-500 border transition-all">
            <CardContent className="flex justify-between px-5 py-0">
                <div className="flex flex-col gap-2 py-5">
                    <Badge className="bg-violet-950 w-fit hover:bg-violet-950 text-primary">
                        Confirmado
                    </Badge>
                    <h2 className="font-bold">Corte de Cabelo</h2>
                    <div className="flex gap-2 items-center">
                        <Avatar className="w-6 h-6">
                            <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>

                        <h3 className="text-sm">Lucas Barber</h3>
                    </div>
                </div>
                <div className="border-secondary flex flex-col items-center justify-center w-1/6 text-center border-l border-solid">
                    <p className="text-sm">Fevereiro</p>
                    <p className="text-2xl">06</p>
                    <p className="text-sm">09:45</p>
                </div>
            </CardContent>
        </Card>
    );
}
