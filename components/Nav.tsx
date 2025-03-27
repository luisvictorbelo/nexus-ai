import { Brain } from "lucide-react";

export default function Nav() {
    return (
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <Brain className="h-8 w-8" />
                <span className="text-xl font-bold">Nexus AI</span>
            </div>
            <div className="hidden md:flex space-x-8">
                <a href="#solucoes" className="hover:text-purple-200 transition">Soluções</a>
                <a href="#beneficios" className="hover:text-purple-200 transition">Benefícios</a>
                <a href="#contato" className="hover:text-purple-200 transition">Contato</a>
            </div>
        </nav>
    )
}