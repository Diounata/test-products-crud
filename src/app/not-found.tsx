import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-50 p-8 text-center text-slate-800">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <h2 className="mb-4 text-2xl">Página não encontrada</h2>
      <p className="mb-8">
        Desculpe, não conseguimos encontrar a página que você está procurando.
      </p>

      <Link
        className="bg-primary hover:bg-primary rounded-lg px-6 py-3 font-bold text-white no-underline transition"
        href="/autenticacao/entrar"
      >
        Entrar no sistema
      </Link>
    </div>
  );
}
