-- CreateTable
CREATE TABLE "DELIVERIES" (
    "id" TEXT NOT NULL,
    "id_client" TEXT NOT NULL,
    "id_delivery" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DELIVERIES_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DELIVERIES" ADD CONSTRAINT "DELIVERIES_id_delivery_fkey" FOREIGN KEY ("id_delivery") REFERENCES "DELIVERYMAN"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DELIVERIES" ADD CONSTRAINT "DELIVERIES_id_client_fkey" FOREIGN KEY ("id_client") REFERENCES "CLIENTS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;