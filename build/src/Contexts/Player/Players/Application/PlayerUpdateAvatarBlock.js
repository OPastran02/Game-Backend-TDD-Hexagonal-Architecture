"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerUpdateAvatarBlock = void 0;
//import { Player } from '../Domain/Player';
class PlayerUpdateAvatarBlock {
    constructor(playerRepository) {
        this.playerRepository = playerRepository;
    }
    async playerUpdateAvatarBlock(playerId, playerAvatar) {
        await this.playerRepository.playerUpdateAvatarBlock(playerId, playerAvatar);
    }
}
exports.PlayerUpdateAvatarBlock = PlayerUpdateAvatarBlock;
//# sourceMappingURL=PlayerUpdateAvatarBlock.js.map