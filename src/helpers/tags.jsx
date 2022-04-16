export const traerCategoria = (categoriaDB) => {
  let categoria = "";
  switch (categoriaDB) {
    case "video":
      categoria = "Placa de Video";
      break;
    case "mother":
      categoria = "Motherboard";
      break;
    case "procesador":
      categoria = "Procesador";
      break;
  }
  return categoria;
};

export const traerCompatible = (compatibleDB) => {
  let compatible = "";
  switch (compatibleDB) {
    case "intel":
      compatible = "Intel";
      break;
    case "amd":
      compatible = "AMD";
      break;
    default:
      compatible = "Intel/AMD";
      break;
  }
  return compatible;
};
