import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";
import { db } from "../_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import UserInfo from "./_components/user-info";

export default async function Home() {
    const barbershops = await db.barbershop.findMany({});
    return (
        <div>
            <Header />

            <UserInfo />
            <div className="mt-6 px-5">
                <Search />
            </div>

            <div className="mt-6 px-5">
                <h2 className="mb-3 text-gray-400 text-xs font-bold pointer-events-none uppercase">
                    Agendamentos
                </h2>
                <BookingItem />
            </div>

            <div className="mt-6">
                <h2 className="mb-3 px-5 text-gray-400 text-xs font-bold pointer-events-none uppercase">
                    Recomendados
                </h2>

                <div className="[&::-webkit-scrollbar]:hidden flex gap-4 -mt-6 pt-6 px-5 overflow-x-auto">
                    {barbershops.map((barbershop) => (
                        <BarbershopItem
                            key={barbershop.id}
                            barbershop={barbershop}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-6">
                <h2 className="mb-3 px-5 text-gray-400 text-xs font-bold pointer-events-none uppercase">
                    Populares
                </h2>

                <div className="[&::-webkit-scrollbar]:hidden flex gap-4 -mt-6 pt-6 px-5 overflow-x-auto">
                    {barbershops.map((barbershop) => (
                        <BarbershopItem
                            key={barbershop.id}
                            barbershop={barbershop}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
