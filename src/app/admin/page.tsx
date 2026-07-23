import { Section } from "@/components/dev/ui/Section";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { LeadTable } from "@/components/admin/LeadTable";

interface LeadData {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string;
  message: string | null;
  budget: string | null;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

async function getLeads(): Promise<LeadData[]> {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
    });
    return leads;
  } catch {
    return [];
  }
}

export default async function AdminPage() {
  const leads = await getLeads();

  return (
    <main className="min-h-screen bg-black">
      <Section>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-400">Gestión de leads y proyectos</p>
          </div>
          <Link
            href="/api/auth/signout"
            className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            Cerrar sesión
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-gray-400 text-sm">Total Leads</p>
            <p className="text-3xl font-bold text-white">{leads.length}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-gray-400 text-sm">Nuevos</p>
            <p className="text-3xl font-bold text-blue-400">
              {leads.filter((l) => l.status === "new").length}
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-gray-400 text-sm">Contactados</p>
            <p className="text-3xl font-bold text-yellow-400">
              {leads.filter((l) => l.status === "contacted").length}
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-gray-400 text-sm">Completados</p>
            <p className="text-3xl font-bold text-green-400">
              {leads.filter((l) => l.status === "completed").length}
            </p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-bold text-white">Leads Recientes</h2>
          </div>
          {leads.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              No hay leads todavía
            </div>
          ) : (
            <LeadTable leads={leads} />
          )}
        </div>
      </Section>
    </main>
  );
}
