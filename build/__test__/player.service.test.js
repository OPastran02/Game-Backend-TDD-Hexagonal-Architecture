"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("../src/Contexts/Player/Players/Domain/Player");
const client_1 = require("@prisma/client");
const uuid_1 = require("uuid");
describe('PlayerService', () => {
    let prisma; // Agrega el Prisma Client
    beforeAll(() => {
        prisma = new client_1.PrismaClient(); // Inicializa el Prisma Client
    });
    afterAll(async () => {
        await prisma.$disconnect(); // Cierra la conexión del Prisma Client al finalizar las pruebas
    });
    test("addPlayer adds a player to the database", async () => {
        const playerId = (0, uuid_1.v4)(); // Generar un ID único
        const player = new Player_1.Player(playerId, // Generar un ID único
        "googleId", "face", "apple", "mail@mail.com", "sephyneko", "oscar", "pastran", "boludooooo", 100, 1000, 1000, 1000, 1, "avatar.jpg", "avatar.jpg", false, false, 1, new Date(2023, 5, 7), true, 0, new Date(2023, 5, 7));
        const addedPlayer = await prisma.players.create({
            data: player,
        });
        expect(addedPlayer.googleId).toBe(player.googleId);
        expect(addedPlayer.appleId).toBe(player.appleId);
    });
    test("findPlayerById returns the correct player", async () => {
        const ultimoPlayer = new Player_1.Player("1c08c7de-1bb8-4ac3-8742-6c69099c081d", "googleId", "face", "apple", "mail@mail.com", "sephyneko", "oscar", "pastran", "boludooooo", 100, 1000, 1000, 1000, 1, "avatar.jpg", "avatar.jpg", false, false, 1, new Date(2023, 5, 7), true, 0, new Date(2023, 5, 7));
        const foundPlayer = await prisma.players.findUnique({
            where: {
                id: "1c08c7de-1bb8-4ac3-8742-6c69099c081d"
            }
        });
        expect(foundPlayer).toEqual(ultimoPlayer);
    });
});
//# sourceMappingURL=player.service.test.js.map