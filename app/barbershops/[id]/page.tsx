import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/BarbershopInfo";
import ServiceItem from "./_components/service-item";
import NavButtons from "./_components/nav-buttons";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface IBarbershopDetails {
    params: {
        id?: string;
    };
}

export default async function BarbershopDetailsPage({
    params,
}: IBarbershopDetails) {
    const session = await getServerSession(authOptions);
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

            <NavButtons
                barbershop={barbershop}
                isAuthenticated={!!session?.user}
            />
        </div>
    );
}
