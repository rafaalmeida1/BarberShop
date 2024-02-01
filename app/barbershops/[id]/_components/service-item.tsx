"use client";

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface IServiteItem {
    service: Service;
    isAuthenticated?: Boolean;
}

export default function ServiceItem({
    service,
    isAuthenticated,
}: IServiteItem) {
    const handleClickOnBooking = () => {
        if (!isAuthenticated) {
            signIn("google");
        } else {
            alert("reservado vacilão");
        }
    };
    return (
        <Card className="hover:border-zinc-400 border transition-all duration-150">
            <CardContent className="p-3">
                <div className="flex gap-4 items-center">
                    <div className="min-h-[110px] max-h-[110px] min-w-[110px] max-w-[110px] relative">
                        <Image
                            src={service.imageUrl}
                            fill
                            alt={service.name}
                            className="rounded-lg object-contain"
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <h2 className="font-bold">{service.name}</h2>
                        <p className="text-gray-400 text-sm">
                            {service.description}
                        </p>

                        <div className="flex items-center justify-between mt-3">
                            <p className="text-violet-500 text-sm font-bold">
                                {Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(Number(service.price))}
                            </p>
                            <Button
                                variant="secondary"
                                onClick={handleClickOnBooking}
                            >
                                Reservar
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
