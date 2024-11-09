/*
  Warnings:

  - You are about to drop the `receipt_products` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `products_id` to the `receipts` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "receipt_products";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_receipts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "consumerCpf" TEXT,
    "price" INTEGER NOT NULL,
    "products_id" TEXT NOT NULL,
    CONSTRAINT "receipts_products_id_fkey" FOREIGN KEY ("products_id") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_receipts" ("consumerCpf", "id", "price") SELECT "consumerCpf", "id", "price" FROM "receipts";
DROP TABLE "receipts";
ALTER TABLE "new_receipts" RENAME TO "receipts";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
