-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(30) NOT NULL,
    "lastname" VARCHAR(30) NOT NULL,
    "email" VARCHAR(30) NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "Department" TEXT NOT NULL,
    "Position" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
