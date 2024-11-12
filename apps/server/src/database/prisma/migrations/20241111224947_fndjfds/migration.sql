/*
  Warnings:

  - You are about to drop the `ReceiptProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ReceiptProduct";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "receipt_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "receiptId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "receipt_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "receipt_products_receiptId_fkey" FOREIGN KEY ("receiptId") REFERENCES "receipts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "receipt_products_productId_receiptId_key" ON "receipt_products"("productId", "receiptId");
