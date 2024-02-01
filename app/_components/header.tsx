"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { MenuIcon } from "lucide-react";

export default function Header() {
    return (
        <Card>
            <CardContent className="flex flex-row items-center justify-between px-5 py-8">
                <Image src="/logo.png" alt="Logo" width={120} height={22} />
                <Button size="icon" variant="outline" className="w-8 h-8">
                    <MenuIcon size={16} />
                </Button>
            </CardContent>
        </Card>
    );
}
