-- CreateTable
CREATE TABLE "CLIENTS" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "CLIENTS_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CLIENTS_username_key" ON "CLIENTS"("username");
