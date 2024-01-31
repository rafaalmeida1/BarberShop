import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/BarbershopInfo";
import ServiceItem from "./_components/service-item";

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

            <div className="flex flex-col gap-3 pt-6 px-5">
                {barbershop.services.map((service) => (
                    <ServiceItem key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
}
