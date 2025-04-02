import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReXHjnn4-8_hTYICvwLRcFPu5H0kabrjoj2g&s"
        alt="imagem argo" className=" h-52 w-full rounded-lg object-cover"
        
      />

      <div>
      <h3 className="text-xl font-semibold">Fiat Argo 1.3</h3>
      <p className="truncate text-sm text-gray-500">
        O Fiat Argo versão 1.0 
         Segurança Airbag motorista, airbag passageiro, airbag lateral Controle de tração Distribuição eletrônica de frenagem Alarme e Freios ABS
      </p>
      </div>
      <p>
        <span className="font-semibold">120 Diária</span>
      </p>
    </a>
  );
};

export default Item;
