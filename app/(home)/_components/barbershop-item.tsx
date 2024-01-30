import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";

interface IBarbershopItem {
    barbershop: Barbershop;
}

export default function BarbershopItem({ barbershop }: IBarbershopItem) {
    return (
        <Card className="min-w-[167px] max-w-[167px] bg-zinc-900 rounded-2xl">
            <CardContent className="px-1 py-0">
                <div className="h-[159px] relative w-full">
                    <div className="absolute z-50 left-1 top-2">
                        <Badge
                            variant="secondary"
                            className="bg-violet-950 w-fit hover:bg-violet-95 text-zinc-50 flex gap-1 items-center opacity-90"
                        >
                            <StarIcon
                                size={12}
                                className="fill-primary text-primary"
                            />
                            <span className="text-xs">5,0</span>
                        </Badge>
                    </div>
                    <Image
                        src={barbershop.imageUrl}
                        alt={barbershop.name}
                        height={0}
                        width={0}
                        sizes="100vw"
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                        className="rounded-2xl"
                    />
                </div>

                <div className="pb-3 px-2">
                    <h2 className="text-ellipsis text-nowrap font-bold overflow-hidden">
                        {barbershop.name}
                    </h2>
                    <p className="text-zinc-400 text-ellipsis text-nowrap mt-2 text-sm overflow-hidden">
                        {barbershop.address}
                    </p>
                    <Button variant="secondary" className="mt-3 w-full">
                        Reservar
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
