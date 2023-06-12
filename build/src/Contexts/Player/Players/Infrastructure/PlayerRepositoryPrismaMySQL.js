"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerRepositoryPrismaMySQL = void 0;
const index_1 = __importDefault(require("../../../../../prisma/index"));
class PlayerRepositoryPrismaMySQL {
    async addPlayer(player) {
        return await index_1.default.players.create({
            data: {
                id: player.id,
                googleId: player.googleId,
                facebookId: player.facebookId,
                appleId: player.appleId,
                mail: player.mail,
                nickname: player.nickname,
                firstname: player.firstname,
                lastname: player.lastname,
                phrase: player.phrase,
                coins: player.coins,
                diamonds: player.diamonds,
                experience: player.experience,
                level: player.level,
                avatar: player.avatar,
                avatarBlock: player.avatarBlock,
                loginDays: player.loginDays,
                lastLogin: player.lastLogin,
                isActive: player.isActive,
                createdAt: player.createdAt
            }
        });
    }
    async playerFindById(playerId) {
        return await index_1.default.players.findFirstOrThrow({
            where: {
                id: playerId,
            }
        });
    }
    async playerDeactivate(playerId) {
        await index_1.default.players.update({
            where: {
                id: playerId,
            },
            data: {
                isActive: false, // Cambia el valor de isActive a false
            },
        });
    }
}
exports.PlayerRepositoryPrismaMySQL = PlayerRepositoryPrismaMySQL;
//# sourceMappingURL=PlayerRepositoryPrismaMySQL.js.map