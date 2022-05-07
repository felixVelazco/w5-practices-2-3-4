-- CreateTable
CREATE TABLE "MissionCommander" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "mainStack" TEXT NOT NULL,
    "currentEnrollment" BOOLEAN NOT NULL DEFAULT false,
    "hasAzureCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MissionCommander_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MissionCommander_name_key" ON "MissionCommander"("name");
