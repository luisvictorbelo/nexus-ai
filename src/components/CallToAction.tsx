import { ArrowRight } from "lucide-react";

export default function CallToAction() {
    return (
        <div className="container mx-auto px-6 py-24">
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Transforme seu Negócio com Inteligência Artificial
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                    Soluções personalizadas em IA e gestão inteligente para impulsionar
                    sua empresa ao próximo nível.
                </p>
                <a href="#contato" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold 
              hover:bg-blue-50 transition flex items-center space-x-2 w-fit">
                    <span>Fale Conosco</span>
                    <ArrowRight className="h-5 w-5" />
                </a>
            </div>
        </div>
    )
}