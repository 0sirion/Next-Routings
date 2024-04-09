"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const DettagliProdotto = ({ id }: { id: string }) => {
  console.log("Questo è l'id del prodotto: ", id);

  const [prodotto, setProdotto] = useState<any>(null);

  useEffect(() => {
    const fetchProdotto = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProdotto(data);
        console.log(data);
      } catch (error) {
        console.error("Errore nel fetch dei dati:", error);
      }
    };

    fetchProdotto();
  }, [id]);

  if (!prodotto) {
    return <Typography variant="h5">Caricamento...</Typography>;
  }

  return (
    <Box sx={{ margin: 10 }}>
      <Typography variant="h5" sx={{ color: "blue" }}>
        {prodotto.title}
      </Typography>

      <Typography variant="body1" sx={{ color: "black" }}>
        {prodotto.description}
      </Typography>
      <Typography variant="h6" sx={{ color: "red" }}>
        Prezzo: {prodotto.price} Euro
      </Typography>
      <Link href="/Shop">
        <Button variant="contained">Torna allo Shop</Button>
      </Link>
      <Button
        variant="contained"
        onClick={() => {
          console.log("Questo è l'id del prodotto: ", id);
        }}
      >
        id
      </Button>
    </Box>
  );
};

export default DettagliProdotto;
