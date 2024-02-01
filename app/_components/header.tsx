"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { LogInIcon, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import SideMenu from "./side-menu";

export default function Header() {
    return (
        <Card>
            <CardContent className="flex flex-row items-center justify-between px-5 py-8">
                <Image src="/logo.png" alt="Logo" width={120} height={22} />
                <SideMenu buttonSize={16} />
            </CardContent>
        </Card>
    );
}
