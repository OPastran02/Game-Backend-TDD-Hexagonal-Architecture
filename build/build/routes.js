"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = void 0;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const Player_controller_1 = require("./../src/Contexts/Player/Players/Infrastructure/controllers/Player.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const Wallet_controller_1 = require("./../src/Contexts/Player/Wallet/Infrastructure/controllers/Wallet.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
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
            "experience": { "dataType": "double", "required": true },
            "level": { "dataType": "double", "required": true },
            "avatar": { "dataType": "string", "required": true },
            "avatarBlock": { "dataType": "string", "required": true },
            "hasBattlePass": { "dataType": "boolean", "required": true },
            "hasYearPass": { "dataType": "boolean", "required": true },
            "loginDays": { "dataType": "double", "required": true },
            "lastLogin": { "dataType": "datetime", "required": true },
            "isActive": { "dataType": "boolean", "required": true },
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
};
const validationService = new runtime_1.ValidationService(models);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.post('/player/add', ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController)), ...((0, runtime_1.fetchMiddlewares)(Player_controller_1.PlayerController.prototype.addPlayer)), function PlayerController_addPlayer(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "hasYearPass": { "dataType": "boolean", "required": true }, "hasBattlePass": { "dataType": "boolean", "required": true }, "createdAt": { "dataType": "datetime", "required": true }, "isActive": { "dataType": "boolean", "required": true }, "lastLogin": { "dataType": "datetime", "required": true }, "loginDays": { "dataType": "double", "required": true }, "avatarBlock": { "dataType": "string", "required": true }, "avatar": { "dataType": "string", "required": true }, "level": { "dataType": "double", "required": true }, "experience": { "dataType": "double", "required": true }, "diamonds": { "dataType": "double", "required": true }, "coins": { "dataType": "double", "required": true }, "phrase": { "dataType": "string", "required": true }, "lastname": { "dataType": "string", "required": true }, "firstname": { "dataType": "string", "required": true }, "nickname": { "dataType": "string", "required": true }, "mail": { "dataType": "string", "required": true }, "appleId": { "dataType": "string", "required": true }, "facebookId": { "dataType": "string", "required": true }, "googleId": { "dataType": "string", "required": true }, "id": { "dataType": "string", "required": true } } },
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
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "coins": { "dataType": "double", "required": true }, "id": { "dataType": "string", "required": true } } },
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
            requestBody: { "in": "body", "name": "requestBody", "required": true, "dataType": "nestedObjectLiteral", "nestedProperties": { "diamonds": { "dataType": "double", "required": true }, "id": { "dataType": "string", "required": true } } },
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