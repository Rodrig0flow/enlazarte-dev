"use client";

import { useState } from "react";

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

const statusColors: Record<string, string> = {
  new: "bg-blue-500/20 text-blue-400",
  contacted: "bg-yellow-500/20 text-yellow-400",
  "in-progress": "bg-purple-500/20 text-purple-400",
  completed: "bg-green-500/20 text-green-400",
};

const serviceLabels: Record<string, string> = {
  "web-basic": "Plan Básico",
  "web-full": "Plan Avanzado",
  custom: "Personalizado",
};

const budgetLabels: Record<string, string> = {
  "under-5k": "Menos de $5,000 MXN",
  "5k-10k": "$5,000 - $10,000 MXN",
  "10k-20k": "$10,000 - $20,000 MXN",
  "20k+": "Más de $20,000 MXN",
};

export function LeadTable({ leads: initialLeads }: { leads: LeadData[] }) {
  const [leads, setLeads] = useState(initialLeads);
  const [selectedLead, setSelectedLead] = useState<LeadData | null>(null);

  const handleDelete = async (id: string) => {
    if (!window.confirm("¿Eliminar este lead? Esta acción no se puede deshacer.")) return;

    try {
      const res = await fetch(`/api/leads/${id}`, { method: "DELETE" });
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l.id !== id));
        setSelectedLead(null);
      }
    } catch {
      // silently fail
    }
  };

  return (
    <>
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
              <tr
                key={lead.id}
                onClick={() => setSelectedLead(lead)}
                className="border-t border-white/5 hover:bg-white/5 cursor-pointer transition-colors"
              >
                <td className="p-4 text-white">{lead.name}</td>
                <td className="p-4 text-gray-300">{lead.email}</td>
                <td className="p-4 text-gray-300">{lead.phone || "-"}</td>
                <td className="p-4 text-gray-300">{serviceLabels[lead.service] || lead.service}</td>
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

      {selectedLead && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedLead(null)}
        >
          <div
            className="bg-[#0a0a1a] border border-white/10 rounded-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-xl font-bold text-white">Detalle del Lead</h3>
              <button
                onClick={() => setSelectedLead(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <p className="text-gray-400 text-sm">Nombre</p>
                <p className="text-white">{selectedLead.name}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white">{selectedLead.email}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Teléfono</p>
                <p className="text-white">{selectedLead.phone || "No proporcionado"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Servicio</p>
                <p className="text-white">{serviceLabels[selectedLead.service] || selectedLead.service}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Presupuesto</p>
                <p className="text-white">{budgetLabels[selectedLead.budget || ""] || "No especificado"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Status</p>
                <span className={`px-2 py-1 rounded-full text-xs ${statusColors[selectedLead.status]}`}>
                  {selectedLead.status}
                </span>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Fecha</p>
                <p className="text-white">{new Date(selectedLead.createdAt).toLocaleDateString("es-MX")}</p>
              </div>
              {selectedLead.message && (
                <div>
                  <p className="text-gray-400 text-sm">Mensaje / Descripción del proyecto</p>
                  <p className="text-white whitespace-pre-wrap">{selectedLead.message}</p>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-white/10">
              <button
                onClick={() => handleDelete(selectedLead.id)}
                className="w-full px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors text-sm"
              >
                Eliminar lead
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
