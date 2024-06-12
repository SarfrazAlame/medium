/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Follows` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Claps" DROP CONSTRAINT "Claps_userId_fkey";

-- DropForeignKey
ALTER TABLE "Follows" DROP CONSTRAINT "Follows_followerId_fkey";

-- DropForeignKey
ALTER TABLE "Follows" DROP CONSTRAINT "Follows_followingId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropForeignKey
ALTER TABLE "Response" DROP CONSTRAINT "Response_userId_fkey";

-- DropForeignKey
ALTER TABLE "SavedPost" DROP CONSTRAINT "SavedPost_userId_fkey";

-- AlterTable
ALTER TABLE "Follows" ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "users";
