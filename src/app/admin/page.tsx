import { Section } from "@/components/dev/ui/Section";
import { prisma } from "@/lib/prisma";

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

  const statusColors: Record<string, string> = {
    new: "bg-blue-500/20 text-blue-400",
    contacted: "bg-yellow-500/20 text-yellow-400",
    "in-progress": "bg-purple-500/20 text-purple-400",
    completed: "bg-green-500/20 text-green-400",
  };

  return (
    <main className="min-h-screen bg-black">
      <Section>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-400">Gestión de leads y proyectos</p>
          </div>
          <a
            href="/api/auth/signout"
            className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            Cerrar sesión
          </a>
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
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="text-left p-4 text-gray-400 text-sm font-medium">Nombre</th>
                    <th className="text-left p-4 text-gray-400 text-sm font-medium">Email</th>
                    <th className="text-left p-4 text-gray-400 text-sm font-medium">Teléfono</th>
                    <th className="text-left p-4 text-gray-400 text-sm font-medium">Servicio</th>
                    <th className="text-left p-4 text-gray-400 text-sm font-medium">Status</th>
                    <th className="text-left p-4 text-gray-400 text-sm font-medium">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-t border-white/5 hover:bg-white/5">
                      <td className="p-4 text-white">{lead.name}</td>
                      <td className="p-4 text-gray-300">{lead.email}</td>
                      <td className="p-4 text-gray-300">{lead.phone || "-"}</td>
                      <td className="p-4 text-gray-300">
                        {lead.service === "web-basic" && "Plan Básico"}
                        {lead.service === "web-full" && "Plan Avanzado"}
                        {lead.service === "custom" && "Personalizado"}
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${statusColors[lead.status]}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="p-4 text-gray-400 text-sm">
                        {new Date(lead.createdAt).toLocaleDateString("es-MX")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Section>
    </main>
  );
}
