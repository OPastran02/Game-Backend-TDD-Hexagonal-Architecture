"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerDeactivate = void 0;
//import { Player } from '../Domain/Player';
class PlayerDeactivate {
    constructor(playerRepository) {
        this.playerRepository = playerRepository;
    }
    async playerDeactivate(playerId) {
        await this.playerRepository.playerDeactivate(playerId);
    }
}
exports.PlayerDeactivate = PlayerDeactivate;
//# sourceMappingURL=PlayerDeactivate.js.map