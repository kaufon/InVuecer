/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `suppliers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "supplierId" TEXT NOT NULL,
    CONSTRAINT "products_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "receipts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "consumerCpf" TEXT,
    "price" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "receipt_products" (
    "receiptId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    PRIMARY KEY ("receiptId", "productId"),
    CONSTRAINT "receipt_products_receiptId_fkey" FOREIGN KEY ("receiptId") REFERENCES "receipts" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "receipt_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "suppliers_email_key" ON "suppliers"("email");
