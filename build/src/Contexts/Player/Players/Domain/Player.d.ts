export declare class Player {
    id: string;
    googleId: string | null;
    facebookId: string | null;
    appleId: string | null;
    mail: string;
    nickname: string | null;
    firstname: string | null;
    lastname: string | null;
    phrase: string | null;
    coins: number;
    diamonds: number;
    crystals: number;
    experience: number;
    level: number;
    avatar: string;
    avatarBlock: string;
    hasBattlePass: boolean;
    hasYearPass: boolean;
    loginDays: number;
    lastLogin: Date;
    isActive: boolean;
    createdAt: Date;
    constructor(__id: string | undefined, _googleId: string | null, _facebookId: string | null, _appleId: string | null, _mail: string, _nickname: string | null, _firstname: string | null, _lastname: string | null, _phrase: string | null, _coins: number, _diamonds: number, _crystals: number, _experience: number, _level: number, _avatar: string, _avatarBlock: string, _hasBattlePass: boolean, _hasYearPass: boolean, _loginDays: number, _lastLogin: Date, _isActive: boolean, _createdAt: Date);
}
