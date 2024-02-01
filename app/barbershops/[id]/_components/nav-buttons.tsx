"use client";

import { Button } from "@/app/_components/ui/button";
import ServiceItem from "./service-item";
import { Barbershop, Service } from "@prisma/client";
import { useState } from "react";
import { cn } from "@/app/_lib/utils";

interface NavButtonsProps {
    barbershop: {
        services: Service[];
    } & Barbershop;
    isAuthenticated: Boolean;
}

const NavButtons = ({ barbershop, isAuthenticated }: NavButtonsProps) => {
    const [activeTab, setActiveTab] = useState<"services" | "info">("services");

    function changeTab(tab: "services" | "info") {
        setActiveTab(tab);
    }

    return (
        <div className="flex flex-col gap-4 pt-6 px-5">
            <div className="flex gap-3 items-center">
                <Button
                    variant={"outline"}
                    className={cn(
                        activeTab === "services"
                            ? "bg-violet-500 hover:bg-violet-700"
                            : ""
                    )}
                    onClick={() => changeTab("services")}
                >
                    Serviços
                </Button>
                <Button
                    variant={"outline"}
                    className={cn(
                        activeTab === "info"
                            ? "bg-violet-500 hover:bg-violet-700"
                            : ""
                    )}
                    onClick={() => changeTab("info")}
                >
                    Informações
                </Button>
            </div>
            {activeTab === "services" ? (
                barbershop.services.map((service) => (
                    <ServiceItem
                        key={service.id}
                        service={service}
                        isAuthenticated={isAuthenticated}
                    />
                ))
            ) : (
                <span className="mt-10 text-center text-gray-400 text-sm">
                    Em breve!
                </span>
            )}
        </div>
    );
};

export default NavButtons;
