"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerRepositoryPrismaMySQL = void 0;
const index_1 = __importDefault(require("../../../../../prisma/index"));
const date_fns_1 = require("date-fns");
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
    async playerUpdateLastLogin(playerId) {
        const player = await index_1.default.players.findUnique({
            where: {
                id: playerId,
            },
        });
        if (player) {
            const lastLogin = player.lastLogin;
            const currentDate = new Date();
            const difference = (0, date_fns_1.differenceInDays)(currentDate, lastLogin);
            if (difference === 1) {
                const updatedLoginDays = (player.loginDays || 0) + 1;
                await index_1.default.players.update({
                    where: {
                        id: playerId,
                    },
                    data: {
                        lastLogin: currentDate,
                        loginDays: updatedLoginDays,
                    },
                });
            }
            else if (difference > 1) {
                await index_1.default.players.update({
                    where: {
                        id: playerId,
                    },
                    data: {
                        lastLogin: currentDate,
                        loginDays: 1,
                    },
                });
            }
        }
    }
    async playerUpdateAvatar(playerId, _avatar) {
        await index_1.default.players.update({
            where: {
                id: playerId,
            },
            data: {
                avatar: _avatar,
            },
        });
    }
    async playerUpdateAvatarBlock(playerId, _avatarBlock) {
        await index_1.default.players.update({
            where: {
                id: playerId,
            },
            data: {
                avatarBlock: _avatarBlock,
            },
        });
    }
}
exports.PlayerRepositoryPrismaMySQL = PlayerRepositoryPrismaMySQL;
//# sourceMappingURL=PlayerRepositoryPrismaMySQL.js.map