-- CreateTable
CREATE TABLE "DELIVERYMAN" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "DELIVERYMAN_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DELIVERYMAN_username_key" ON "DELIVERYMAN"("username");
