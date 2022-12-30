/*
  Warnings:

  - You are about to alter the column `miliseconds_reached` on the `matches` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_matches" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "miliseconds_reached" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_matches" ("created_at", "id", "miliseconds_reached", "username") SELECT "created_at", "id", "miliseconds_reached", "username" FROM "matches";
DROP TABLE "matches";
ALTER TABLE "new_matches" RENAME TO "matches";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
