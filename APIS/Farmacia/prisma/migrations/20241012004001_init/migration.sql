-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "precio" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "categoria" TEXT NOT NULL,
    "marca" TEXT,
    "codigo" TEXT NOT NULL,
    "peso" DOUBLE PRECISION,
    "color" TEXT,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);