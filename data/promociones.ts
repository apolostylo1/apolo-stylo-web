
export type Promocion = {
  nombre: string;
  marca: string;
  descripcion: string;
  precio: number;
  precioPromo: number;
  imagen: string;
  disponible: boolean;
  whatsapp?: string;
};

export const promociones: Promocion[] = [
  {
    nombre: "X2 BODY SPLASH",
    marca: "Victoria's Secret",
    descripcion: "Consultar por cuales hay disponible.",
    precio: 60000,
    precioPromo: 56000,
    imagen: "/perfumes/2-body-splash.jpg",
    disponible: true,
  },
  {
    nombre: "Combo mascarilla + Oleo capilar",
    marca: "Karsell",
    descripcion: "Tambien se vende por separado.",
    precio: 44000,
    precioPromo: 36000,
    imagen: "/perfumes/combo-mascarilla-oleo.jpg",
    disponible: true,
  },

];
