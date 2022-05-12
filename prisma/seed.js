const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main(){
  try{
    const woopa = await prisma.explorer.upsert({
      where: {name: "Woopa"},
      update: {},
      create: {
        name: "Woopa",
        username:"ajolonauta",
        mission: "Node"
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: "Woopa1" },
      update: {},
      create: {
        name: "Woopa1",
        username: "ajolonauta1",
        mission: "Node"
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: "Woopa 2" },
      update: {},
      create: {
        name: "Woopa 2",
        username: "ajolonauta2",
        mission: "Java"
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: "Woopa 3" },
      update: {},
      create: {
        name: "Woopa 3",
        username: "ajolonauta3",
        mission: "Node"
      },
    });

    const woopa4 = await prisma.explorer.upsert({
      where: { name: "Woopa4" },
      update: {},
      create: {
        name: "Woopa4",
        username: "ajolonauta4",
        mission: "Node"
      },
    });

    const woopa5 = await prisma.explorer.upsert({
      where: { name: "Woopa 5" },
      update: {},
      create: {
        name: "Woopa 5",
        username: "ajolonauta5",
        mission: "Java"
      },
    });

    const woopa6 = await prisma.explorer.upsert({
      where: { name: "Woopa 6" },
      update: {},
      create: {
        name: "Woopa 6",
        username: "ajolonauta6",
        mission: "Java"
      },
    });

    const student1 = await prisma.student.upsert({
      where: { name: "student1"},
      update: {},
      create: {
        name: "student1",
        lang: ["javascript", "elixir"],
        missionCommander: "Carlo",
        enrollments: 1,
        hasCertification: false
      }
    });
    
    const student2 = await prisma.student.upsert({
      where: { name: "student2"},
      update: {},
      create: {
        name: "student2",
        lang: ["java", "c++"],
        missionCommander: "fer",
        enrollments: 2,
        hasCertification: false
      }
    });
    const student3 = await prisma.student.upsert({
      where: { name: "student3"},
      update: {},
      create: {
        name: "student3",
        lang: ["javascript", "java"],
        missionCommander: "Carlo",
        enrollments: 1,
        hasCertification: true
      }
    });

    const missionCommander1 = await prisma.missionCommander.upsert({
      where: { name: "missionCommander1"},
      update: {},
      create: {
        name: "missionCommander1",
        username: "mc1",
        mainStack: "frontend",
        currentEnrollment: false,
        hasAzureCertification: false
      }
    });
    
    const missionCommander2 = await prisma.missionCommander.upsert({
      where: { name: "missionCommander2"},
      update: {},
      create: {
        name: "missionCommander2",
        username: "mc2",
        mainStack: "backend-node",
        currentEnrollment: true,
        hasAzureCertification: true
      }
    });
    const missionCommander3 = await prisma.missionCommander.upsert({
      where: { name: "missionCommander3"},
      update: {},
      create: {
        name: "missionCommander3",
        username: "mc3",
        mainStack: "backend-java",
        currentEnrollment: true,
        hasAzureCertification: true
      }
    });

    console.log("Create 4 explorers");
  } catch(e){
    console.error(e);
    process.exit(1);
  } finally{
    await prisma.$disconnect();
  }
})();