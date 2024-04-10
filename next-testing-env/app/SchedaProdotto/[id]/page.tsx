"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const DettagliProdotto = ({ params }: { params: { id: string } }) => {
  console.log("Questo è l'id del prodotto: ", params.id);

  const [prodotto, setProdotto] = useState<any>(null);
  const idString = params.id.toString();

  useEffect(() => {
    const fetchProdotto = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${idString}`
        );
        const data = await response.json();
        setProdotto(data);
        console.log("Prodotto Fetchato", data);
      } catch (error) {
        console.error("Errore nel fetch dei dati:", error);
      }
    };

    fetchProdotto();
  }, []);

  return (
    <Box sx={{ margin: 10 }}>
      <Typography variant="h3">
        {prodotto ? prodotto.title : "Caricamento in corso..."}
      </Typography>
      {prodotto && prodotto.images && prodotto.images.length > 0 && (
        <Image
          src={prodotto.images[0]} // Utilizza il primo elemento dell'array images
          alt="Immagine del prodotto"
          width={300}
          height={300}
        />
      )}
      <Typography variant="body1">
        {prodotto ? prodotto.description : ""}
      </Typography>
      <Typography variant="body1">
        {prodotto ? `Prezzo: ${prodotto.price}` : ""}
      </Typography>
    </Box>
  );
};

export default DettagliProdotto;

// "use client";
// import { Box, Button, Typography } from "@mui/material";
// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// const DettagliProdotto = ({ params }: { parms: { id: string } }) => {
//   console.log("Questo è l'id del prodotto: ", params.id);

//   const [prodotto, setProdotto] = useState<any>(null);
//   const idString = params.id.toString();

//   useEffect(() => {
//     const fetchProdotto = async () => {
//       try {
//         const response = await fetch(
//           `https://dummyjson.com/products/${idString}`
//         );
//         const data = await response.json();
//         setProdotto(data);
//         console.log("Prodotto Fetchato con use", prodotto);
//       } catch (error) {
//         console.error("Errore nel fetch dei dati:", error);
//       }
//     };

//     fetchProdotto();
//   }, []);

//   return (
//     <Box sx={{ margin: 10 }}>
//       <Typography></Typography>
//       <Button
//         onClick={() => {
//           console.log(prodotto);
//         }}
//       >
//         Prodotto
//       </Button>
//     </Box>
//   );
// };

// export default DettagliProdotto;
