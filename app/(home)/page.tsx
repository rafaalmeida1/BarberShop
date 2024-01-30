import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Home() {
    return (
        <div>
            <Header />

            <div className="pt-5 px-5">
                <h2 className="text-xl font-bold">Olá, Rafa!</h2>
                <p className="text-sm capitalize">
                    {format(new Date(), "EEEE',' d 'de' MMMM", {
                        locale: ptBR,
                    })}
                </p>
            </div>
        </div>
    );
}
