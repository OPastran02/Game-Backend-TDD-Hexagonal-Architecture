"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerCreateUseCase = void 0;
const Player_1 = require("../Domain/Player");
class PlayerCreateUseCase {
    constructor(playerRepository) {
        this.playerRepository = playerRepository;
    }
    async addPlayer(_id, _googleId, _facebookId, _appleId, _mail, _nickname, _firstname, _lastname, _phrase, _coins, _diamonds, _experience, _level, _avatar, _avatarBlock, _hasBattlePass, _hasYearPass, _loginDays, _lastLogin, _isActive, _createdAt) {
        const player = new Player_1.Player(_id, _googleId, _facebookId, _appleId, _mail, _nickname, _firstname, _lastname, _phrase, _coins, _diamonds, _experience, _level, _avatar, _avatarBlock, _hasBattlePass, _hasYearPass, _loginDays, _lastLogin, _isActive, _createdAt);
        // Realizar validaciones adicionales antes de agregar el jugador
        // ...
        return await this.playerRepository.addPlayer(player);
    }
}
exports.PlayerCreateUseCase = PlayerCreateUseCase;
//# sourceMappingURL=PlayerCreateUseCase.js.map