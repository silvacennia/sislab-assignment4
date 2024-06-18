import { NoteForm } from "@/components/noteForm";
import { DelCard } from "@/components/delCard";
import { DashboardTemplate } from "@/components/dashboard/dashboard.template";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/5XeeeDNsRFLu", {
    cache: "no-store",
  });
  const { data } = await res.json();
  console.log(data);

  return (
    <DashboardTemplate>
      <main>
        <h1 className="text-2xl py-4 font-bold">Penggunaan Bahan Kimia</h1>
        <NoteForm />
        <table className="w-full mt-4">
          <thead className="text-center bg-blue-900">
            <tr>
              <th>Nama Bahan</th>
              <th> Jumlah</th>
              <th>Satuan</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody className="space-y-4">
            {data.map((item) => {
              return <DelCard key={item._id} item={item} />;
            })}
          </tbody>
        </table>
      </main>
    </DashboardTemplate>
  );
}
