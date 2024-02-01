"use client";

import SideMenu from "@/app/_components/side-menu";
import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IBarbershopInfo {
    barbershop: Barbershop;
}

export default function BarbershopInfo({ barbershop }: IBarbershopInfo) {
    const router = useRouter();
    const handleBackClick = () => {
        router.back();
    };
    return (
        <>
            <div className="h-[250px] relative w-full">
                <Button
                    size="icon"
                    variant="outline"
                    className="absolute z-50 left-3 top-3"
                    onClick={() => handleBackClick()}
                >
                    <ChevronLeftIcon />
                </Button>
                <SideMenu variants="absolute z-50 right-3 top-3" />
                <Image
                    src={barbershop.imageUrl}
                    fill
                    alt={barbershop.name}
                    className="opacity-75 object-cover"
                />
            </div>

            <div className="border-violet-800 flex flex-col gap-y-1 items-start pb-6 pt-3 px-5 border-b border-solid">
                <h1 className="text-xl font-bold">{barbershop.name}</h1>
                <div className="flex gap-1 items-center">
                    <MapPinIcon className="text-violet-500" size={18} />
                    <p className="text-sm">{barbershop.address}</p>
                </div>
                <div className="flex gap-1 items-center">
                    <StarIcon className="text-violet-500" size={18} />
                    <p className="text-sm">5,0 (899 avaliações)</p>
                </div>
            </div>
        </>
    );
}
