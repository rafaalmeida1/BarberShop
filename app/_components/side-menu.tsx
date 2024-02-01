import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
    MenuIcon,
    LogOutIcon,
    UserIcon,
    LogInIcon,
    HomeIcon,
    Calendar,
} from "lucide-react";
import { signOut, signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "./ui/sheet";
import Link from "next/link";

interface ISideMenu {
    buttonSize?: number | null;
    variants?: string | null;
}

export default function SideMenu({ buttonSize, variants }: ISideMenu) {
    const { data, status } = useSession();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    size="icon"
                    variant="outline"
                    className={variants ?? ""}
                >
                    <MenuIcon size={buttonSize ?? 24} />
                </Button>
            </SheetTrigger>

            <SheetContent className="p-0">
                <SheetHeader className="border-secondary p-5 text-left border-b border-solid">
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>

                {data?.user ? (
                    <div className="flex items-center justify-between px-5 py-6">
                        <div className="flex gap-3 items-center">
                            <Avatar>
                                <AvatarImage src={data.user?.image ?? ""} />
                                <AvatarFallback>A</AvatarFallback>
                            </Avatar>

                            <h2 className="font-bold">
                                {data.user?.name ?? ""}
                            </h2>
                        </div>

                        <Button
                            variant="secondary"
                            size="icon"
                            onClick={() => signOut()}
                        >
                            <LogOutIcon />
                        </Button>
                    </div>
                ) : (
                    <div className="flex flex-col gap-3 px-5 py-6">
                        <div className="flex gap-2 items-center">
                            <UserIcon size={32} />
                            <h2 className="font-bold">Olá, faça seu login!</h2>
                        </div>
                        <Button
                            className="flex justify-start w-full"
                            variant="secondary"
                            onClick={() => signIn("google")}
                        >
                            <LogInIcon className="mr-2" size={18} />
                            Fazer Login
                        </Button>
                    </div>
                )}

                <div className="flex flex-col gap-3 px-5">
                    <Button
                        variant="outline"
                        className="flex justify-start"
                        asChild
                    >
                        <Link href="/">
                            <HomeIcon className="mr-2" size={18} />
                            Início
                        </Link>
                    </Button>

                    {data?.user && (
                        <Button
                            variant="outline"
                            className="flex justify-start"
                            asChild
                        >
                            <Link href="/bookings">
                                <Calendar className="mr-2" size={18} />
                                Agendamentos
                            </Link>
                        </Button>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
}
