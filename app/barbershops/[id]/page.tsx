import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/BarbershopInfo";
import ServiceItem from "./_components/service-item";
import NavButtons from "./_components/nav-buttons";

interface IBarbershopDetails {
    params: {
        id?: string;
    };
}

export default async function BarbershopDetailsPage({
    params,
}: IBarbershopDetails) {
    if (!params.id) {
        // TODO redirecionar para home page
        return null;
    }

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true,
        },
    });

    if (!barbershop) {
        return null;
    }

    return (
        <div>
            <BarbershopInfo barbershop={barbershop} />

            <NavButtons barbershop={barbershop} />
        </div>
    );
}
