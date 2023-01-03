/*
  Warnings:

  - You are about to drop the column `miliseconds_reached` on the `match` table. All the data in the column will be lost.
  - Added the required column `time_reached` to the `match` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_match" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "time_reached" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_match" ("created_at", "id", "username") SELECT "created_at", "id", "username" FROM "match";
DROP TABLE "match";
ALTER TABLE "new_match" RENAME TO "match";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
