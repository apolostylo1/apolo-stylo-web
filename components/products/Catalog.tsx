"use client";

import { useMemo, useState } from "react";

import { perfumes } from "@/data/perfumes";
import { decants } from "@/data/Decants";

import ProductCard from "./ProductCard";
import ProductModal from "../ProductModal";

export default function Catalog() {
  const [selectedPerfume, setSelectedPerfume] = useState<any>(null);

  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [marca, setMarca] = useState("Todas");
  const [tipo, setTipo] = useState("Perfume");

  const productos = tipo === "Perfume" ? perfumes : decants;

  const marcas = [
    "Todas",
    ...new Set(productos.map((producto) => producto.marca)),
  ];

  const productosFiltrados = useMemo(() => {
    return productos.filter((producto) => {
      const coincideBusqueda =
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.marca.toLowerCase().includes(busqueda.toLowerCase());

      const coincideCategoria =
        categoria === "Todos" ||
        producto.categoria === categoria;

      const coincideMarca =
        marca === "Todas" ||
        producto.marca === marca;

      return (
        coincideBusqueda &&
        coincideCategoria &&
        coincideMarca
      );
    });
  }, [productos, busqueda, categoria, marca]);

  return (
    <section
      id="catalogo"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6"
    >
      <h2 className="mb-10 text-center text-3xl font-bold text-[#D4AF37] md:text-5xl">
        Catálogo
      </h2>

      {/* Perfumes / Decants */}

      <div className="mb-8 flex flex-wrap justify-center gap-3">

        <button
          onClick={() => {
            setTipo("Perfume");
            setMarca("Todas");
          }}
          className={`rounded-full px-6 py-3 font-semibold transition md:px-8 ${
            tipo === "Perfume"
              ? "bg-[#D4AF37] text-black"
              : "bg-[#161B22] text-white"
          }`}
        >
          Perfumes
        </button>

        <button
          onClick={() => {
            setTipo("Decant");
            setMarca("Todas");
          }}
          className={`rounded-full px-6 py-3 font-semibold transition md:px-8 ${
            tipo === "Decant"
              ? "bg-[#D4AF37] text-black"
              : "bg-[#161B22] text-white"
          }`}
        >
          Decants
        </button>

      </div>

      {/* Categorías */}

      <div className="mb-8 flex flex-wrap justify-center gap-3">

        <button
          onClick={() => setCategoria("Todos")}
          className={`rounded-full px-5 py-2 transition ${
            categoria === "Todos"
              ? "bg-[#D4AF37] text-black"
              : "bg-[#161B22] text-white"
          }`}
        >
          Todos
        </button>

        <button
          onClick={() => setCategoria("Árabe")}
          className={`rounded-full px-5 py-2 transition ${
            categoria === "Árabe"
              ? "bg-[#D4AF37] text-black"
              : "bg-[#161B22] text-white"
          }`}
        >
          Árabes
        </button>

        <button
          onClick={() => setCategoria("Diseñador")}
          className={`rounded-full px-5 py-2 transition ${
            categoria === "Diseñador"
              ? "bg-[#D4AF37] text-black"
              : "bg-[#161B22] text-white"
          }`}
        >
          Diseñador
        </button>

      </div>

      {/* Buscador */}

      <div className="mb-6 flex justify-center">

        <input
          type="text"
          placeholder="Buscar perfume..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full max-w-xl rounded-xl border border-[#D4AF37]/30 bg-[#161B22] px-5 py-4 text-sm text-white placeholder:text-gray-500 focus:border-[#D4AF37] focus:outline-none md:text-base"
        />

      </div>

      {/* Marcas */}

      <div className="mb-10 flex justify-center">

        <select
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          className="w-full max-w-sm rounded-xl border border-[#D4AF37]/30 bg-[#161B22] px-5 py-3 text-white focus:border-[#D4AF37] focus:outline-none"
        >
          {marcas.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

      </div>

      {/* Productos */}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

        {productosFiltrados.map((producto) => (
          <ProductCard
            key={producto.nombre}
            {...producto}
            onClick={() => setSelectedPerfume(producto)}
          />
        ))}

      </div>

      {selectedPerfume && (
        <ProductModal
          perfume={selectedPerfume}
          onClose={() => setSelectedPerfume(null)}
        />
      )}

    </section>
  );
}