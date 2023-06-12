"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerFindById = void 0;
class PlayerFindById {
    constructor(playerRepository) {
        this.playerRepository = playerRepository;
    }
    async playerFindById(id) {
        return await this.playerRepository.playerFindById(id);
    }
}
exports.PlayerFindById = PlayerFindById;
//# sourceMappingURL=PlayerFindById.js.map