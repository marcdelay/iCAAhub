-- DropForeignKey
ALTER TABLE "user_classroom" DROP CONSTRAINT "user_classroom_classroom_id_fkey";

-- DropForeignKey
ALTER TABLE "user_classroom" DROP CONSTRAINT "user_classroom_user_id_fkey";

-- AddForeignKey
ALTER TABLE "user_classroom" ADD CONSTRAINT "user_classroom_classroom_id_fkey" FOREIGN KEY ("classroom_id") REFERENCES "classroom"("classroom_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_classroom" ADD CONSTRAINT "user_classroom_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
