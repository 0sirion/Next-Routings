"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Prodotto {
  id: number;
  title: string;
  description: string;
  price: number;
  // Altri campi se necessario
}

export default function Shop() {
  const [prodotti, setProdotti] = useState<Prodotto[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data: { products: Prodotto[] }) => {
        // Prendi i primi 4 prodotti
        const primiQuattroProdotti = data.products.slice(0, 4);
        setProdotti(primiQuattroProdotti);
      })
      .catch((error) => console.error("Errore nel fetch dei dati:", error));
  }, []);

  const schedaProdotto = (prodotto: Prodotto) => {
    const id = prodotto.id;
    return (
      <Box sx={{ margin: 10 }} key={prodotto.id}>
        <Typography variant="h5" sx={{ color: "blue" }}>
          {prodotto.title}
        </Typography>
        <Typography variant="body1" sx={{ color: "black" }}>
          {prodotto.description}
        </Typography>
        <Typography variant="h6" sx={{ color: "red" }}>
          Prezzo: {prodotto.price} Euro
        </Typography>
        {/* <Link href={`/SchedaProdotto/${prodotto.id}`}>
          <Button variant="contained">Acquista</Button>
        </Link> */}
        <Link href={`/SchedaProdotto/${id}`} passHref>
          <Button variant="contained">Acquista</Button>
        </Link>
      </Box>
    );
  };

  return (
    <>
      <Typography sx={{ fontSize: 22 }}>I nostri migliori prodotti:</Typography>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        {prodotti.map((prodotto) => schedaProdotto(prodotto))}
      </Box>

      <Link href="/">
        <Button variant="contained">Torna alla Home</Button>
      </Link>
    </>
  );
}
