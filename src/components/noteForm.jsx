"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const NoteForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [satuan, setSatuan] = useState("");

  async function handleCreateData() {
    await fetch("https://v1.appbackend.io/v1/rows/5XeeeDNsRFLu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ name, jumlah, satuan }]),
    });

    router.refresh();
    setName("");
    setJumlah("");
    setSatuan("");
  }

  return (
    <div className="space-y-3">
      <input
        placeholder="Nama Bahan"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Jumlah"
        value={jumlah}
        onChange={(e) => setJumlah(e.target.value)}
      />
      <select value={satuan} onChange={(e) => setSatuan(e.target.value)}>
        <option>--satuan--</option>
        <option>mg</option>
        <option>gr</option>
        <option>mL</option>
        <option>L</option>
      </select>
      <button onClick={handleCreateData}>Kirim</button>
    </div>
  );
};
