import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/BarbershopInfo";

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
    });

    if (!barbershop) {
        return null;
    }

    return (
        <div>
            <BarbershopInfo barbershop={barbershop} />
        </div>
    );
}
