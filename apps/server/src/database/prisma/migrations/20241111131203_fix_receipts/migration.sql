/*
  Warnings:

  - You are about to drop the column `products_id` on the `receipts` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_ProductReceipt" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ProductReceipt_A_fkey" FOREIGN KEY ("A") REFERENCES "products" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProductReceipt_B_fkey" FOREIGN KEY ("B") REFERENCES "receipts" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_receipts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "consumerCpf" TEXT,
    "price" INTEGER NOT NULL
);
INSERT INTO "new_receipts" ("consumerCpf", "id", "price") SELECT "consumerCpf", "id", "price" FROM "receipts";
DROP TABLE "receipts";
ALTER TABLE "new_receipts" RENAME TO "receipts";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_ProductReceipt_AB_unique" ON "_ProductReceipt"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductReceipt_B_index" ON "_ProductReceipt"("B");
