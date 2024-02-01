"use client";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useSession } from "next-auth/react";

export default function UserInfo() {
    const { data } = useSession();

    return (
        <div className="pt-5 px-5">
            <h2 className="text-xl font-bold">
                Olá, {data?.user?.name ?? "Seja Bem Vindo"} !
            </h2>
            <p className="text-sm capitalize">
                {format(new Date(), "EEEE',' dd 'de' MMMM", {
                    locale: ptBR,
                })}
            </p>
        </div>
    );
}
