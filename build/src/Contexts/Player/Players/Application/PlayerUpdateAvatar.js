"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerUpdateAvatar = void 0;
const PlayerAvatar_1 = require("../Domain/value-object/PlayerAvatar");
class PlayerUpdateAvatar {
    constructor(playerRepository) {
        this.playerRepository = playerRepository;
    }
    async playerUpdateAvatar(playerId, playerAvatar) {
        const avatar = new PlayerAvatar_1.PlayerAvatar(playerAvatar);
        const player = await this.playerRepository.playerFindById(playerId);
        if (player) {
            player.avatar = avatar.getValue();
            await this.playerRepository.playerUpdateAvatar(playerId, playerAvatar);
        }
    }
}
exports.PlayerUpdateAvatar = PlayerUpdateAvatar;
//# sourceMappingURL=PlayerUpdateAvatar.js.map