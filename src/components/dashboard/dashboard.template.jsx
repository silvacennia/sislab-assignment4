import React from "react";

export const DashboardTemplate = ({ children }) => {
  return (
    <div className="flex h-screen">
      <aside className="w-[260px] bg-slate-50 border-r p-8 space-y-6">
        <div className="text-3xl font-bold text-blue-900">Sislab.</div>
        <section>
         <Menu label="Profil" />
         <Menu label="Penggunaan Bahan" />
         <Menu label="Peminjaman Alat" />
         <Menu label="Laporan" />
         <Menu label="Keluar" />
        </section>
      </aside>
      <main className="w-[calc(100%-230px)] p-8">
        <div className="max-w-3xl m-auto">{children}</div>
      </main>
    </div>
  );
};

export const Menu = ({ label }) => {
  return (
    <div className="bg-transparent hover:bg-indigo-600 hover:text-white p-2 rounded-lg hover:cursor-pointer">
      {label}
    </div>
  );
};
