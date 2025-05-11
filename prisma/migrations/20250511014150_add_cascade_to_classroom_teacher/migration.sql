-- DropForeignKey
ALTER TABLE "classroom" DROP CONSTRAINT "classroom_teacher_user_id_fkey";

-- AddForeignKey
ALTER TABLE "classroom" ADD CONSTRAINT "classroom_teacher_user_id_fkey" FOREIGN KEY ("teacher_user_id") REFERENCES "teacher"("teacher_user_id") ON DELETE CASCADE ON UPDATE CASCADE;
