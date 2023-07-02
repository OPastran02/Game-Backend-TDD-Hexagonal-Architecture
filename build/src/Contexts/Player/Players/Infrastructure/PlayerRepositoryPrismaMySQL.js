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
                crystals: player.crystals,
                experience: player.experience,
                level: player.level,
                avatar: player.avatar,
                avatarBlock: player.avatarBlock,
                hasBattlePass: player.hasBattlePass,
                hasYearPass: player.hasYearPass,
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
    async playerAlwaysFindById(playerId) {
        return await index_1.default.players.findUniqueOrThrow({
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
    async playerUpdateLastLogin(playerId, _loginDays) {
        await index_1.default.players.update({
            where: {
                id: playerId,
            },
            data: {
                lastLogin: new Date(),
                loginDays: _loginDays,
            },
        });
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
    async playerUpdateIds(playerId, _googleId, _facebookId, _appleId) {
        await index_1.default.players.update({
            where: {
                id: playerId,
            },
            data: {
                googleId: _googleId,
                facebookId: _facebookId,
                appleId: _appleId
            },
        });
    }
    async playerUpdateNames(playerId, _googleId, _facebookId, _appleId) {
        await index_1.default.players.update({
            where: {
                id: playerId,
            },
            data: {
                googleId: _googleId,
                facebookId: _facebookId,
                appleId: _appleId
            },
        });
    }
    async playerUpdateMail(playerId, _mail) {
        await index_1.default.players.update({
            where: {
                id: playerId,
            },
            data: {
                mail: _mail,
            },
        });
    }
    async playerAddCoins(playerId, _coins) {
        await index_1.default.players.update({
            where: {
                id: playerId,
            },
            data: {
                coins: _coins,
            },
        });
    }
    async playerAddDiamons(playerId, _diamonds) {
        await index_1.default.players.update({
            where: {
                id: playerId,
            },
            data: {
                diamonds: _diamonds,
            },
        });
    }
    async playerAddCrystals(playerId, _crystals) {
        await index_1.default.players.update({
            where: {
                id: playerId,
            },
            data: {
                crystals: _crystals,
            },
        });
    }
    async playerMinusMoney(playerId, _coins, _diamonds, _crystals) {
        await index_1.default.players.update({
            where: {
                id: playerId,
            },
            data: {
                coins: _coins,
                diamonds: _diamonds,
                crystals: _crystals
            },
        });
    }
    async playerAddExperience(playerId, _experience) {
        await index_1.default.players.update({
            where: {
                id: playerId,
            },
            data: {
                experience: _experience,
            },
        });
    }
    async playerAddPhrase(playerId, _phrase) {
        await index_1.default.players.update({
            where: {
                id: playerId,
            },
            data: {
                phrase: _phrase,
            },
        });
    }
    async playerAddBattlePass(playerId) {
        await index_1.default.players.update({
            where: {
                id: playerId,
            },
            data: {
                hasBattlePass: true, // Cambia el valor de isActive a false
            },
        });
    }
    async playerAddYearPass(playerId) {
        await index_1.default.players.update({
            where: {
                id: playerId,
            },
            data: {
                hasYearPass: true, // Cambia el valor de isActive a false
            },
        });
    }
}
exports.PlayerRepositoryPrismaMySQL = PlayerRepositoryPrismaMySQL;
//# sourceMappingURL=PlayerRepositoryPrismaMySQL.js.map