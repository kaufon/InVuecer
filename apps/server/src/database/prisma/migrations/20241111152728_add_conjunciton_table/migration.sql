/*
  Warnings:

  - You are about to drop the `_ProductReceipt` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ProductReceipt";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ReceiptProduct" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "receiptId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "ReceiptProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ReceiptProduct_receiptId_fkey" FOREIGN KEY ("receiptId") REFERENCES "receipts" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
