import { Player } from '../src/Contexts/Player/Players/Domain/Player';
import { PrismaClient } from '@prisma/client';
import { v4 as uuid } from 'uuid';


describe('PlayerService', () => {
  let prisma: PrismaClient; // Agrega el Prisma Client

  beforeAll(() => {
    prisma = new PrismaClient(); // Inicializa el Prisma Client
  });

  afterAll(async () => {
    await prisma.$disconnect(); // Cierra la conexión del Prisma Client al finalizar las pruebas
  });

  test("addPlayer adds a player to the database", async () => {
    const playerId = uuid(); // Generar un ID único
    const player: Player = new Player(
        playerId, // Generar un ID único
        "googleId",
        "face",
        "apple",
        "mail@mail.com",
        "sephyneko",
        "oscar",
        "pastran",
        "boludooooo",
        100,
        1000,
        1000,
        1,
        "avatar.jpg",
        "avatar.jpg",
        false,
        false,
        1,
        new Date(2023, 5, 7),
        true,
        new Date(2023, 5, 7)
    );

    const addedPlayer = await prisma.players.create({
      data: player,
    });

    expect(addedPlayer.googleId).toBe(player.googleId);
    expect(addedPlayer.appleId).toBe(player.appleId);
  });

  test("findPlayerById returns the correct player", async () => {
    const ultimoPlayer: Player = new Player(
      "1c08c7de-1bb8-4ac3-8742-6c69099c081d",
      "googleId",
      "face",
      "apple",
      "mail@mail.com",
      "sephyneko",
      "oscar",
      "pastran",
      "boludooooo",
      100,
      1000,
      1000,
      1,
      "avatar.jpg",
      "avatar.jpg",
      false,
      false,
      1,
      new Date(2023, 5, 7),
      true,
      new Date(2023, 5, 7)
    );
  
    const foundPlayer = await prisma.players.findUnique({
      where: {
        id:"1c08c7de-1bb8-4ac3-8742-6c69099c081d"
      }
    })
  
    expect(foundPlayer).toEqual(ultimoPlayer);
  });
});