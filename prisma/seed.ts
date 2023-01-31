import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const firstMovieId = "7448e3df-c27e-4127-9fa1-c0a55a6746c4";
const secondMovieId = "78329678-cc20-4834-87c4-45b0164733d6";
const thirdMovieId = "e722365e-428b-421e-8200-3d619dcf0bf5";
const fourthMovieId = "182fffd7-276f-4ce3-9c41-fd83fa295ea1";

async function main() {
  await prisma.movie.deleteMany();

  // Create Movies
  await Promise.all([
    await prisma.movie.create({
      data: {
        id: firstMovieId,
        title: "Blade Runner 2049",
        description:
          "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
        director: "Denis Villeneuve",
        year: 2017
      }
    }),

    await prisma.movie.create({
      data: {
        id: secondMovieId,
        title: "The Godfather",
        description:
          "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
        director: "Francis Ford Coppola",
        year: 1972
      }
    }),

    await prisma.movie.create({
      data: {
        id: thirdMovieId,
        title: "The Good, the Bad and the Ugly",
        description:
          "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
        director: "Sergio Leone",
        year: 1966
      }
    }),

    await prisma.movie.create({
      data: {
        id: fourthMovieId,
        title: "Pulp Fiction",
        description:
          "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        director: "Quentin Tarantino",
        year: 1994
      }
    })
  ]);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
