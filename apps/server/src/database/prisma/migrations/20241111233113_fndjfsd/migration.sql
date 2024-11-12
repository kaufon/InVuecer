-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_receipt_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "receiptId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "receipt_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "receipt_products_receiptId_fkey" FOREIGN KEY ("receiptId") REFERENCES "receipts" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_receipt_products" ("id", "productId", "quantity", "receiptId") SELECT "id", "productId", "quantity", "receiptId" FROM "receipt_products";
DROP TABLE "receipt_products";
ALTER TABLE "new_receipt_products" RENAME TO "receipt_products";
CREATE UNIQUE INDEX "receipt_products_productId_receiptId_key" ON "receipt_products"("productId", "receiptId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
