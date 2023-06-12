"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerUpdateLastLogin = void 0;
//import { Player } from '../Domain/Player';
class PlayerUpdateLastLogin {
    constructor(playerRepository) {
        this.playerRepository = playerRepository;
    }
    async playerUpdateLastLogin(playerId) {
        await this.playerRepository.playerUpdateLastLogin(playerId);
    }
}
exports.PlayerUpdateLastLogin = PlayerUpdateLastLogin;
//# sourceMappingURL=PlayerUpdateLastLogin.js.map