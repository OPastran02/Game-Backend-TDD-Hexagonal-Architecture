"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = void 0;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const AvailableHeroes_controller_1 = require("./../src/Contexts/AvailableHeroes/Infrastructure/controllers/AvailableHeroes.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const Box_controller_1 = require("./../src/Contexts/Box/Infrastructure/Controller/Box.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const Hero_controller_1 = require("./../src/Contexts/Heroes/Hero/Infrastructure/Controller/Hero.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const Nature_controller_1 = require("./../src/Contexts/Heroes/Nature/Infrastructure/Controller/Nature.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const Race_controller_1 = require("./../src/Contexts/Heroes/Race/Infrastructure/Controller/Race.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const Rarity_controller_1 = require("./../src/Contexts/Heroes/Rarity/Infrastructure/Controller/Rarity.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const Stats_controller_1 = require("./../src/Contexts/Heroes/Stats/Infrastructure/Controller/Stats.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const Type_controller_1 = require("./../src/Contexts/Heroes/Type/Infrastructure/Controller/Type.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const Player_controller_1 = require("./../src/Contexts/Player/Players/Infrastructure/controllers/Player.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const Wallet_controller_1 = require("./../src/Contexts/Player/Wallet/Infrastructure/controllers/Wallet.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const Mobs_controller_1 = require("./../src/Contexts/Worlds/Mobs/Infrastructure/Controller/Mobs.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const PlayerWorld_controller_1 = require("./../src/Contexts/Worlds/PlayerWorld/Infrastructure/Controller/PlayerWorld.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const Reward_controller_1 = require("./../src/Contexts/Worlds/Reward/Infrastructure/Controller/Reward.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const Waves_controller_1 = require("./../src/Contexts/Worlds/Waves/Infrastructure/Controller/Waves.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const World_controller_1 = require("./../src/Contexts/Worlds/World/Infrastructure/Controller/World.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "AvailableHeroes": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
            "world": { "dataType": "string", "required": true },
            "avatar": { "dataType": "string", "required": true },
            "avatarBlock": { "dataType": "string", "required": true },
            "rarityId": { "dataType": "double", "required": true },
            "natureId": { "dataType": "double", "required": true },
            "typeId": { "dataType": "double", "required": true },
            "raceId": { "dataType": "double", "required": true },
            "attackMin": { "dataType": "double", "required": true },
            "attackMax": { "dataType": "double", "required": true },
            "attackBstMin": { "dataType": "double", "required": true },
            "attackBstMax": { "dataType": "double", "required": true },
            "defenseMin": { "dataType": "double", "required": true },
            "defenseMax": { "dataType": "double", "required": true },
            "defenseBstMin": { "dataType": "double", "required": true },
            "defenseBstMax": { "dataType": "double", "required": true },
            "hpMin": { "dataType": "double", "required": true },
            "hpMax": { "dataType": "double", "required": true },
            "hpBstMin": { "dataType": "double", "required": true },
            "hpBstMax": { "dataType": "double", "required": true },
            "sp_attackMin": { "dataType": "double", "required": true },
            "sp_attackMax": { "dataType": "double", "required": true },
            "sp_attackBstMin": { "dataType": "double", "required": true },
            "sp_attackBstMax": { "dataType": "double", "required": true },
            "sp_defenseMin": { "dataType": "double", "required": true },
            "sp_defenseMax": { "dataType": "double", "required": true },
            "sp_defenseBstMin": { "dataType": "double", "required": true },
            "sp_defenseBstMax": { "dataType": "double", "required": true },
            "speedMin": { "dataType": "double", "required": true },
            "speedMax": { "dataType": "double", "required": true },
            "speedBstMin": { "dataType": "double", "required": true },
            "speedBstMax": { "dataType": "double", "required": true },
            "farmingMin": { "dataType": "double", "required": true },
            "farmingMax": { "dataType": "double", "required": true },
            "farmingBstMin": { "dataType": "double", "required": true },
            "farmingBstMax": { "dataType": "double", "required": true },
            "steelingMin": { "dataType": "double", "required": true },
            "steelingMax": { "dataType": "double", "required": true },
            "steelingBstMin": { "dataType": "double", "required": true },
            "steelingBstMax": { "dataType": "double", "required": true },
            "woodingMin": { "dataType": "double", "required": true },
            "woodingMax": { "dataType": "double", "required": true },
            "woodingBstMin": { "dataType": "double", "required": true },
            "woodingBstMax": { "dataType": "double", "required": true },
            "catchRate": { "dataType": "double", "required": true },
            "available": { "dataType": "boolean", "required": true },
            "created_at": { "dataType": "datetime", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Box": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
            "race": { "dataType": "double", "required": true },
            "booster": { "dataType": "string", "required": true },
            "modifier": { "dataType": "double", "required": true },
            "coins": { "dataType": "double", "required": true },
            "Diamonds": { "dataType": "double", "required": true },
            "Crystal": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Nature": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
            "boost_attack": { "dataType": "double", "required": true },
            "boost_defense": { "dataType": "double", "required": true },
            "boost_hp": { "dataType": "double", "required": true },
            "boost_sp_attack": { "dataType": "double", "required": true },
            "boost_sp_defense": { "dataType": "double", "required": true },
            "boost_speed": { "dataType": "double", "required": true },
            "boost_farming": { "dataType": "double", "required": true },
            "boost_steeling": { "dataType": "double", "required": true },
            "boost_wooding": { "dataType": "double", "required": true },
            "created_at": { "dataType": "datetime", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Rarity": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
            "avatar": { "dataType": "string", "required": true },
            "created_at": { "dataType": "datetime", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Type": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "horoscope": { "dataType": "string", "required": true },
            "avatar": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Stats": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "attack": { "dataType": "double", "required": true },
            "defense": { "dataType": "double", "required": true },
            "hp": { "dataType": "double", "required": true },
            "sp_attack": { "dataType": "double", "required": true },
            "sp_defense": { "dataType": "double", "required": true },
            "speed": { "dataType": "double", "required": true },
            "farming": { "dataType": "double", "required": true },
            "steeling": { "dataType": "double", "required": true },
            "wooding": { "dataType": "double", "required": true },
            "attackBst": { "dataType": "double", "required": true },
            "defenseBst": { "dataType": "double", "required": true },
            "hpBst": { "dataType": "double", "required": true },
            "sp_attackBst": { "dataType": "double", "required": true },
            "sp_defenseBst": { "dataType": "double", "required": true },
            "speedBst": { "dataType": "double", "required": true },
            "farmingBst": { "dataType": "double", "required": true },
            "steelingBst": { "dataType": "double", "required": true },
            "woodingBst": { "dataType": "double", "required": true },
            "created_at": { "dataType": "datetime", "required": true },
            "power_points": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Race": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Hero": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "playerId": { "dataType": "string", "required": true },
            "idAvailableHero": { "dataType": "double", "required": true },
            "level": { "dataType": "double", "required": true },
            "Experience": { "dataType": "double", "required": true },
            "id_placement": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "description": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }], "required": true },
            "avatar": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }], "required": true },
            "created_at": { "dataType": "datetime", "required": true },
            "nature": { "ref": "Nature", "required": true },
            "rarity": { "ref": "Rarity", "required": true },
            "type": { "ref": "Type", "required": true },
            "stats": { "ref": "Stats", "required": true },
            "race": { "ref": "Race", "required": true },
            "orderInGeneralTeam": { "dataType": "double", "required": true },
            "orderInRaceTeam": { "dataType": "double", "required": true },
            "isInQueue": { "dataType": "boolean", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Player": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "string", "required": true },
            "googleId": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }], "required": true },
            "facebookId": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }], "required": true },
            "appleId": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }], "required": true },
            "mail": { "dataType": "string", "required": true },
            "nickname": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }], "required": true },
            "firstname": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }], "required": true },
            "lastname": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }], "required": true },
            "phrase": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }], "required": true },
            "coins": { "dataType": "double", "required": true },
            "diamonds": { "dataType": "double", "required": true },
            "crystals": { "dataType": "double", "required": true },
            "experience": { "dataType": "double", "required": true },
            "level": { "dataType": "double", "required": true },
            "avatar": { "dataType": "string", "required": true },
            "avatarBlock": { "dataType": "string", "required": true },
            "hasBattlePass": { "dataType": "boolean", "required": true },
            "hasYearPass": { "dataType": "boolean", "required": true },
            "loginDays": { "dataType": "double", "required": true },
            "lastLogin": { "dataType": "datetime", "required": true },
            "isActive": { "dataType": "boolean", "required": true },
            "adsViewed": { "dataType": "double", "required": true },
            "createdAt": { "dataType": "datetime", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Wallet": {
        "dataType": "refObject",
        "properties": {
            "exp_rarity": { "dataType": "double", "required": true },
            "exp_quantity": { "dataType": "double", "required": true },
            "gameId": { "dataType": "double", "required": true },
            "playerId": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Mobs": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "waveId": { "dataType": "double", "required": true },
            "order": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "attack": { "dataType": "double", "required": true },
            "defense": { "dataType": "double", "required": true },
            "hp": { "dataType": "double", "required": true },
            "sp_attack": { "dataType": "double", "required": true },
            "sp_defense": { "dataType": "double", "required": true },
            "speed": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PlayerWorld": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "idPlayer": { "dataType": "string", "required": true },
            "idWorld": { "dataType": "double", "required": true },
            "stars": { "dataType": "double", "required": true },
            "MundoAvatar": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Reward": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "mundoId": { "dataType": "double", "required": true },
            "item": { "dataType": "double", "required": true },
            "quantity": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Waves": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "mundoId": { "dataType": "double", "required": true },
            "wave": { "dataType": "double", "required": true },
            "mobs": { "dataType": "array", "array": { "dataType": "refObject", "ref": "Mobs" }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "World": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "race": { "dataType": "double", "required": true },
            "chapter": { "dataType": "double", "required": true },
            "MundoAvatar": { "dataType": "string", "required": true },
            "rewards": { "dataType": "array", "array": { "dataType": "refObject", "ref": "Reward" }, "required": true },
            "waves": { "dataType": "array", "array": { "dataType": "refObject", "ref": "Waves" }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new runtime_1.ValidationService(models);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.post('/availableHeroes/findById', ...((0, runtime_1.fetchMiddlewares)(AvailableHeroes_controller_1.AvailableHeroesController)), ...((0, runtime_1.fetchMiddlewares)(AvailableHeroes_controller_1.AvailableHeroesController.prototype.playerFindById)), function AvailableHeroesController_playerFindById(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new AvailableHeroes_controller_1.AvailableHeroesController();
            const promise = controller.playerFindById.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/availableHeroes/findByRarity', ...((0, runtime_1.fetchMiddlewares)(AvailableHeroes_controller_1.AvailableHeroesController)), ...((0, runtime_1.fetchMiddlewares)(AvailableHeroes_controller_1.AvailableHeroesController.prototype.availableHeroFindByRarity)), function AvailableHeroesController_availableHeroFindByRarity(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new AvailableHeroes_controller_1.AvailableHeroesController();
            const promise = controller.availableHeroFindByRarity.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/box/findAllBoxes', ...((0, runtime_1.fetchMiddlewares)(Box_controller_1.BoxController)), ...((0, runtime_1.fetchMiddlewares)(Box_controller_1.BoxController.prototype.findAllBoxes)), function BoxController_findAllBoxes(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Box_controller_1.BoxController();
            const promise = controller.findAllBoxes.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/hero/add', ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController)), ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController.prototype.create)), function HeroController_create(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "_race": { "dataType": "double", "required": true }, "modifier": { "dataType": "double", "required": true }, "booster": { "dataType": "array", "array": { "dataType": "double" }, "required": true }, "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Hero_controller_1.HeroController();
            const promise = controller.create.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/hero/findById', ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController)), ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController.prototype.findById)), function HeroController_findById(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Hero_controller_1.HeroController();
            const promise = controller.findById.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/hero/findByPlayerWorld', ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController)), ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController.prototype.findByPlayerWorld)), function HeroController_findByPlayerWorld(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "world": { "dataType": "double", "required": true }, "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Hero_controller_1.HeroController();
            const promise = controller.findByPlayerWorld.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/hero/findByPlayer', ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController)), ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController.prototype.findbyPlayer)), function HeroController_findbyPlayer(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Hero_controller_1.HeroController();
            const promise = controller.findbyPlayer.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/hero/findByPlayerTopFive', ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController)), ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController.prototype.findByPlayerTopFive)), function HeroController_findByPlayerTopFive(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Hero_controller_1.HeroController();
            const promise = controller.findByPlayerTopFive.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/hero/numbers', ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController)), ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController.prototype.probabilities)), function HeroController_probabilities(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Hero_controller_1.HeroController();
            const promise = controller.probabilities.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/hero/isHeroInQueue', ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController)), ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController.prototype.IsThereAnyHeroInQueue)), function HeroController_IsThereAnyHeroInQueue(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "queue": { "dataType": "boolean", "required": true }, "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Hero_controller_1.HeroController();
            const promise = controller.IsThereAnyHeroInQueue.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/hero/findByRace', ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController)), ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController.prototype.findByRace)), function HeroController_findByRace(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "string", "required": true }, "race": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Hero_controller_1.HeroController();
            const promise = controller.findByRace.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/hero/deleteHeroInQueue', ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController)), ...((0, runtime_1.fetchMiddlewares)(Hero_controller_1.HeroController.prototype.deleteHeroInQueue)), function HeroController_deleteHeroInQueue(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Hero_controller_1.HeroController();
            const promise = controller.deleteHeroInQueue.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/nature/add', ...((0, runtime_1.fetchMiddlewares)(Nature_controller_1.NatureController)), ...((0, runtime_1.fetchMiddlewares)(Nature_controller_1.NatureController.prototype.create)), function NatureController_create(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "created_at": { "dataType": "datetime", "required": true }, "boost_wooding": { "dataType": "double", "required": true }, "boost_steeling": { "dataType": "double", "required": true }, "boost_farming": { "dataType": "double", "required": true }, "boost_speed": { "dataType": "double", "required": true }, "boost_sp_defense": { "dataType": "double", "required": true }, "boost_sp_attack": { "dataType": "double", "required": true }, "boost_hp": { "dataType": "double", "required": true }, "boost_defense": { "dataType": "double", "required": true }, "boost_attack": { "dataType": "double", "required": true }, "description": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true }, "id": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Nature_controller_1.NatureController();
            const promise = controller.create.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/nature/findById', ...((0, runtime_1.fetchMiddlewares)(Nature_controller_1.NatureController)), ...((0, runtime_1.fetchMiddlewares)(Nature_controller_1.NatureController.prototype.findById)), function NatureController_findById(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Nature_controller_1.NatureController();
            const promise = controller.findById.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/race/findById', ...((0, runtime_1.fetchMiddlewares)(Race_controller_1.RaceController)), ...((0, runtime_1.fetchMiddlewares)(Race_controller_1.RaceController.prototype.findById)), function RaceController_findById(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Race_controller_1.RaceController();
            const promise = controller.findById.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/rarity/add', ...((0, runtime_1.fetchMiddlewares)(Rarity_controller_1.RarityController)), ...((0, runtime_1.fetchMiddlewares)(Rarity_controller_1.RarityController.prototype.create)), function RarityController_create(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "created_at": { "dataType": "datetime", "required": true }, "avatar": { "dataType": "string", "required": true }, "description": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true }, "id": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Rarity_controller_1.RarityController();
            const promise = controller.create.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/rarity/findById', ...((0, runtime_1.fetchMiddlewares)(Rarity_controller_1.RarityController)), ...((0, runtime_1.fetchMiddlewares)(Rarity_controller_1.RarityController.prototype.findById)), function RarityController_findById(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Rarity_controller_1.RarityController();
            const promise = controller.findById.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/stats/add', ...((0, runtime_1.fetchMiddlewares)(Stats_controller_1.StatsController)), ...((0, runtime_1.fetchMiddlewares)(Stats_controller_1.StatsController.prototype.create)), function StatsController_create(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "power_points": { "dataType": "double", "required": true }, "created_at": { "dataType": "datetime", "required": true }, "woodingBst": { "dataType": "double", "required": true }, "steelingBst": { "dataType": "double", "required": true }, "farmingBst": { "dataType": "double", "required": true }, "speedBst": { "dataType": "double", "required": true }, "sp_defenseBst": { "dataType": "double", "required": true }, "sp_attackBst": { "dataType": "double", "required": true }, "hpBst": { "dataType": "double", "required": true }, "defenseBst": { "dataType": "double", "required": true }, "attackBst": { "dataType": "double", "required": true }, "wooding": { "dataType": "double", "required": true }, "steeling": { "dataType": "double", "required": true }, "farming": { "dataType": "double", "required": true }, "speed": { "dataType": "double", "required": true }, "sp_defense": { "dataType": "double", "required": true }, "sp_attack": { "dataType": "double", "required": true }, "hp": { "dataType": "double", "required": true }, "defense": { "dataType": "double", "required": true }, "attack": { "dataType": "double", "required": true }, "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Stats_controller_1.StatsController();
            const promise = controller.create.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/stats/findById', ...((0, runtime_1.fetchMiddlewares)(Stats_controller_1.StatsController)), ...((0, runtime_1.fetchMiddlewares)(Stats_controller_1.StatsController.prototype.findById)), function StatsController_findById(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Stats_controller_1.StatsController();
            const promise = controller.findById.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/type/add', ...((0, runtime_1.fetchMiddlewares)(Type_controller_1.TypeController)), ...((0, runtime_1.fetchMiddlewares)(Type_controller_1.TypeController.prototype.createType)), function TypeController_createType(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "description": { "dataType": "string", "required": true }, "avatar": { "dataType": "string", "required": true }, "horoscope": { "dataType": "string", "required": true }, "name": { "dataType": "string", "required": true }, "id": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Type_controller_1.TypeController();
            const promise = controller.createType.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/type/findById', ...((0, runtime_1.fetchMiddlewares)(Type_controller_1.TypeController)), ...((0, runtime_1.fetchMiddlewares)(Type_controller_1.TypeController.prototype.findById)), function TypeController_findById(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Type_controller_1.TypeController();
            const promise = controller.findById.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/add', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.addPlayer)), function PlayerController_addPlayer(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "hasYearPass": { "dataType": "boolean", "required": true }, "adsViewed": { "dataType": "double", "required": true }, "hasBattlePass": { "dataType": "boolean", "required": true }, "createdAt": { "dataType": "datetime", "required": true }, "isActive": { "dataType": "boolean", "required": true }, "lastLogin": { "dataType": "datetime", "required": true }, "loginDays": { "dataType": "double", "required": true }, "avatarBlock": { "dataType": "string", "required": true }, "avatar": { "dataType": "string", "required": true }, "level": { "dataType": "double", "required": true }, "experience": { "dataType": "double", "required": true }, "crystals": { "dataType": "double", "required": true }, "diamonds": { "dataType": "double", "required": true }, "coins": { "dataType": "double", "required": true }, "phrase": { "dataType": "string", "required": true }, "lastname": { "dataType": "string", "required": true }, "firstname": { "dataType": "string", "required": true }, "nickname": { "dataType": "string", "required": true }, "mail": { "dataType": "string", "required": true }, "appleId": { "dataType": "string", "required": true }, "facebookId": { "dataType": "string", "required": true }, "googleId": { "dataType": "string", "required": true }, "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.addPlayer.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/findById', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.playerFindById)), function PlayerController_playerFindById(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.playerFindById.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/findAlwaysById', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.playerAlwaysFindById)), function PlayerController_playerAlwaysFindById(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.playerAlwaysFindById.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/deactivate', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.playerDeactivate)), function PlayerController_playerDeactivate(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.playerDeactivate.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/updateLastLogin', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.playerUpdateLastLogin)), function PlayerController_playerUpdateLastLogin(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.playerUpdateLastLogin.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/updateAvatar', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.playerUpdateAvatar)), function PlayerController_playerUpdateAvatar(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "avatar": { "dataType": "string", "required": true }, "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.playerUpdateAvatar.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/updateAvatarBlock', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.playerUpdateAvatarBlock)), function PlayerController_playerUpdateAvatarBlock(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "avatarBlock": { "dataType": "string", "required": true }, "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.playerUpdateAvatarBlock.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/updateIds', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.playerUpdateIds)), function PlayerController_playerUpdateIds(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "appleId": { "dataType": "string", "required": true }, "facebookId": { "dataType": "string", "required": true }, "googleId": { "dataType": "string", "required": true }, "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.playerUpdateIds.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/updateNames', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.playerUpdateNames)), function PlayerController_playerUpdateNames(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "lastName": { "dataType": "string", "required": true }, "firstName": { "dataType": "string", "required": true }, "nickName": { "dataType": "string", "required": true }, "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.playerUpdateNames.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/updateMail', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.playerUpdateMail)), function PlayerController_playerUpdateMail(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "mail": { "dataType": "string", "required": true }, "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.playerUpdateMail.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/addCoins', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.playerAddCoins)), function PlayerController_playerAddCoins(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "action": { "dataType": "string", "required": true }, "coins": { "dataType": "double", "required": true }, "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.playerAddCoins.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/addDiamonds', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.playerAddDiamons)), function PlayerController_playerAddDiamons(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "action": { "dataType": "string", "required": true }, "diamonds": { "dataType": "double", "required": true }, "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.playerAddDiamons.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/addCrystals', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.playerAddCrystals)), function PlayerController_playerAddCrystals(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "action": { "dataType": "string", "required": true }, "crystals": { "dataType": "double", "required": true }, "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.playerAddCrystals.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/playerMinusMoney', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.playerMinusMoney)), function PlayerController_playerMinusMoney(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "crystals": { "dataType": "double", "required": true }, "diamond": { "dataType": "double", "required": true }, "coins": { "dataType": "double", "required": true }, "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.playerMinusMoney.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/addExperience', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.playerAddExperience)), function PlayerController_playerAddExperience(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "experience": { "dataType": "double", "required": true }, "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.playerAddExperience.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/addPhrase', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.playerAddPhrase)), function PlayerController_playerAddPhrase(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "phrase": { "dataType": "string", "required": true }, "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.playerAddPhrase.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/addBattlePass', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.playerAddBattlePass)), function PlayerController_playerAddBattlePass(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.playerAddBattlePass.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/player/addYearPass', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.playerYearPass)), function PlayerController_playerYearPass(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Player_controller_1.PlayerController();
            const promise = controller.playerYearPass.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/wallet/create', ...((0, runtime_1.fetchMiddlewares)(Wallet_controller_1.WalletController)), ...((0, runtime_1.fetchMiddlewares)(Wallet_controller_1.WalletController.prototype.createWallet)), function WalletController_createWallet(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "playerId": { "dataType": "string", "required": true }, "gameId": { "dataType": "double", "required": true }, "exp_quantity": { "dataType": "double", "required": true }, "exp_rarity": { "dataType": "double", "required": true }, "_id": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Wallet_controller_1.WalletController();
            const promise = controller.createWallet.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/wallet/findByPlayerId', ...((0, runtime_1.fetchMiddlewares)(Wallet_controller_1.WalletController)), ...((0, runtime_1.fetchMiddlewares)(Wallet_controller_1.WalletController.prototype.findWalletsByPlayerId)), function WalletController_findWalletsByPlayerId(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "playerId": { "dataType": "string", "required": true }, "gameId": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Wallet_controller_1.WalletController();
            const promise = controller.findWalletsByPlayerId.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/wallet/findByPlayerIdRarity', ...((0, runtime_1.fetchMiddlewares)(Wallet_controller_1.WalletController)), ...((0, runtime_1.fetchMiddlewares)(Wallet_controller_1.WalletController.prototype.findWalletsByPlayerIdRarity)), function WalletController_findWalletsByPlayerIdRarity(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "exp_rarity": { "dataType": "double", "required": true }, "playerId": { "dataType": "string", "required": true }, "gameId": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Wallet_controller_1.WalletController();
            const promise = controller.findWalletsByPlayerIdRarity.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/wallet/addExperience', ...((0, runtime_1.fetchMiddlewares)(Wallet_controller_1.WalletController)), ...((0, runtime_1.fetchMiddlewares)(Wallet_controller_1.WalletController.prototype.addExperience)), function WalletController_addExperience(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "_exp_quantity": { "dataType": "double", "required": true }, "exp_rarity": { "dataType": "double", "required": true }, "playerId": { "dataType": "string", "required": true }, "gameId": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Wallet_controller_1.WalletController();
            const promise = controller.addExperience.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/mobs/findByWave', ...((0, runtime_1.fetchMiddlewares)(Mobs_controller_1.MobsController)), ...((0, runtime_1.fetchMiddlewares)(Mobs_controller_1.MobsController.prototype.findByWave)), function MobsController_findByWave(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Mobs_controller_1.MobsController();
            const promise = controller.findByWave.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/playerWorld/findByPlayerWorld', ...((0, runtime_1.fetchMiddlewares)(PlayerWorld_controller_1.PlayerWorldController)), ...((0, runtime_1.fetchMiddlewares)(PlayerWorld_controller_1.PlayerWorldController.prototype.findByPlayerWorld)), function PlayerWorldController_findByPlayerWorld(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "idn": { "dataType": "double", "required": true }, "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new PlayerWorld_controller_1.PlayerWorldController();
            const promise = controller.findByPlayerWorld.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/playerWorld/findByPlayer', ...((0, runtime_1.fetchMiddlewares)(PlayerWorld_controller_1.PlayerWorldController)), ...((0, runtime_1.fetchMiddlewares)(PlayerWorld_controller_1.PlayerWorldController.prototype.findByPlayer)), function PlayerWorldController_findByPlayer(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "string", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new PlayerWorld_controller_1.PlayerWorldController();
            const promise = controller.findByPlayer.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/reward/findByMundo', ...((0, runtime_1.fetchMiddlewares)(Reward_controller_1.RewardController)), ...((0, runtime_1.fetchMiddlewares)(Reward_controller_1.RewardController.prototype.findByMundo)), function RewardController_findByMundo(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Reward_controller_1.RewardController();
            const promise = controller.findByMundo.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/waves/findByMundo', ...((0, runtime_1.fetchMiddlewares)(Waves_controller_1.WavesController)), ...((0, runtime_1.fetchMiddlewares)(Waves_controller_1.WavesController.prototype.findByMundo)), function WavesController_findByMundo(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new Waves_controller_1.WavesController();
            const promise = controller.findByMundo.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/world/findById', ...((0, runtime_1.fetchMiddlewares)(World_controller_1.WorldController)), ...((0, runtime_1.fetchMiddlewares)(World_controller_1.WorldController.prototype.findById)), function WorldController_findById(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new World_controller_1.WorldController();
            const promise = controller.findById.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/world/findByRace', ...((0, runtime_1.fetchMiddlewares)(World_controller_1.WorldController)), ...((0, runtime_1.fetchMiddlewares)(World_controller_1.WorldController.prototype.findByRace)), function WorldController_findByRace(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "id": { "dataType": "double", "required": true } } },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new World_controller_1.WorldController();
            const promise = controller.findByRace.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/world/findAllWorlds', ...((0, runtime_1.fetchMiddlewares)(World_controller_1.WorldController)), ...((0, runtime_1.fetchMiddlewares)(World_controller_1.WorldController.prototype.findAllWorlds)), function WorldController_findAllWorlds(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
            const controller = new World_controller_1.WorldController();
            const promise = controller.findAllWorlds.apply(controller, validatedArgs);
            promiseHandler(controller, promise, response, undefined, next);
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, successStatus, next) {
        return Promise.resolve(promise)
            .then((data) => {
            let statusCode = successStatus;
            let headers;
            if (isController(controllerObj)) {
                headers = controllerObj.getHeaders();
                statusCode = controllerObj.getStatus() || statusCode;
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            returnHandler(response, statusCode, data, headers);
        })
            .catch((error) => next(error));
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function returnHandler(response, statusCode, data, headers = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            response.status(statusCode || 200);
            data.pipe(response);
        }
        else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        }
        else {
            response.status(statusCode || 204).end();
        }
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function responder(response) {
        return function (status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    }
    ;
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function getValidatedArgs(args, request, response) {
        const fieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'queries':
                    return validationService.ValidateParam(args[key], request.query, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                case 'res':
                    return responder(response);
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new runtime_1.ValidateError(fieldErrors, '');
        }
        return values;
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
//# sourceMappingURL=routes.js.map