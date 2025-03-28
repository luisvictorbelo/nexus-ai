import { Brain, BarChart3, Users, Lightbulb, Mail, Phone, MapPin } from 'lucide-react';
import Header from './components/Header';

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <Header />

            {/* Solutions Section */}
            <section id="solucoes" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Nossas Soluções</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition">
                            <Brain className="h-12 w-12 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Automação Inteligente</h3>
                            <p className="text-gray-600">
                                Automatize processos complexos com IA avançada, reduzindo custos e aumentando eficiência.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition">
                            <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Análise Preditiva</h3>
                            <p className="text-gray-600">
                                Tome decisões baseadas em dados com nossa análise preditiva avançada.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition">
                            <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Consultoria em IA</h3>
                            <p className="text-gray-600">
                                Orientação especializada para implementar soluções de IA em seu negócio.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="beneficios" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Benefícios</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                            alt="Equipe trabalhando"
                            className="rounded-lg shadow-lg"
                        />
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <Users className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Aumento de Produtividade</h3>
                                    <p className="text-gray-600">Otimize operações e aumente a eficiência da sua equipe.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <BarChart3 className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Redução de Custos</h3>
                                    <p className="text-gray-600">Minimize gastos com processos automatizados e inteligentes.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <Lightbulb className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Inovação Contínua</h3>
                                    <p className="text-gray-600">Mantenha sua empresa na vanguarda da tecnologia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contato" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Entre em Contato</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
                            <div className="flex items-center space-x-4">
                                <Mail className="h-6 w-6 text-blue-600" />
                                <span>contato@iasolutions.com.br</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone className="h-6 w-6 text-blue-600" />
                                <span>(11) 9999-9999</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <MapPin className="h-6 w-6 text-blue-600" />
                                <span>São Luís, MA</span>
                            </div>
                        </div>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Mensagem
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                            >
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <Brain className="h-8 w-8" />
                            <span className="text-xl font-bold">Nexus AI</span>
                        </div>
                        <div className="text-gray-400 text-sm">
                            © 2024 Nexus AI. Todos os direitos reservados.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App