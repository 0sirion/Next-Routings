import Link from "next/link";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Typography variant="h2">Benventuo nella Home</Typography>
      <Link href="/Shop">
        <Typography variant="h5"> Visualizza i nostri prodotti!</Typography>
      </Link>
    </>
  );
}
