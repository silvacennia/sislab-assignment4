"use client";
import { useRouter } from "next/navigation";

export const DelCard = ({ item }) => {
  const router = useRouter();

  async function handleDeleteData() {
    await fetch("https://v1.appbackend.io/v1/rows/5XeeeDNsRFLu", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });

    router.refresh();
  }

  return (
      <tr key={item._id} className="text-center border border-grey-300">
        <td>{item.name}</td>
        <td>{item.jumlah}</td>
        <td>{item.satuan}</td>
        <td>
          <button onClick={handleDeleteData}>Hapus</button>
        </td>
      </tr>
  );
};
