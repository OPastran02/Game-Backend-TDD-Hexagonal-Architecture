
import { PlayerCreateUseCase } from '../src/Contexts/Player/Players/Application/PlayerCreateUseCase';
import { PlayerFindById } from '../src/Contexts/Player/Players/Application/PlayerFindById';
import { IPlayerRepository } from '../src/Contexts/Player/Players/Domain/Interfaces/Player.interface';
import { Player } from '../src/Contexts/Player/Players/Domain/Player';

import { v4 as uuid } from 'uuid';

class MockPlayerRepository implements IPlayerRepository {
  private player: Player[] = [];

  async addPlayer(player: Player) {
    this.player.push(player);
    return player;
  }

  async findPlayerById(playerId: string) {
    const foundPlayer = this.player.find(player => player.id === playerId);
    return foundPlayer || null;
  }
}

describe('PlayerService', () => {
  let playerCreateUser: PlayerCreateUseCase;
  let playerFindById: PlayerFindById;

  beforeEach(() => {
    var mockPlayerRepository = new MockPlayerRepository();
    playerCreateUser = new PlayerCreateUseCase(mockPlayerRepository);
    playerFindById = new PlayerFindById(mockPlayerRepository);
  });

  test("addPlayer adds a player to the database", async () => {
    const player: Player = new Player(
        uuid(), // Generar un ID único
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
        1,
        new Date(2023, 5, 7),
        true,
        new Date(2023, 5, 7)
    );
    const addedOrder = await playerCreateUser.addPlayer(
        uuid(), // Generar un ID único
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
        1,
        new Date(2023, 5, 7),
        true,
        new Date(2023, 5, 7)
    );

    expect(addedOrder.googleId).toBe(player.googleId);
    expect(addedOrder.appleId).toBe(player.appleId);
})

    test("findPlayerById returns the correct player", async () => {
    const playerId = uuid(); // Generar un ID único
    const player: Player =new Player(
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
        1,
        new Date(2023, 5, 7),
        true,
        new Date(2023, 5, 7)
    );
    await playerCreateUser.addPlayer(
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
        1,
        new Date(2023, 5, 7),
        true,
        new Date(2023, 5, 7)
    );
  
    const foundPlayer = await playerFindById.findPlayerById(playerId);
  
    expect(foundPlayer).toEqual(player);
  });
})