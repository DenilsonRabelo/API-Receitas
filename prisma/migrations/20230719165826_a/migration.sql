-- CreateTable
CREATE TABLE "receita" (
    "id" SERIAL NOT NULL,
    "receita" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL,
    "modo_preparo" TEXT NOT NULL,
    "link_imagem" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "receita_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ingredientesbase" (
    "id" SERIAL NOT NULL,
    "nomesIngrediente" JSONB[],
    "receita_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ingredientesbase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- AddForeignKey
ALTER TABLE "ingredientesbase" ADD CONSTRAINT "ingredientesbase_receita_id_fkey" FOREIGN KEY ("receita_id") REFERENCES "receita"("id") ON DELETE SET NULL ON UPDATE CASCADE;
