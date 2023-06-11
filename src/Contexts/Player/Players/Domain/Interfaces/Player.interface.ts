import { Player } from '../Player';
/*
import { PlayerId } from '../../../Shared/Domain/Courses/PlayerId';
import { PlayerMail } from '../value-object/PlayerMail';
import { PlayerNickname } from '../value-object/PlayerNickname';
import { PlayerPhrase } from '../value-object/PlayerPhrase';
import { PlayerCoins } from '../value-object/PlayerCoins';
import { PlayerDiamonds } from '../value-object/PlayerDiamonds';
import { PlayerExperience } from '../value-object/PlayerExperience';
import { PlayerLevel } from '../value-object/PlayerLevel';
import { PlayerAvatar } from '../value-object/PlayerAvatar';
import { PlayerLoginDays } from '../value-object/PlayerLoginDays';
import { PlayerLastLogin } from '../value-object/PlayerLastLogin';
import { PlayerIsActive } from '../value-object/PlayerIsActive';
*/
export interface IPlayerRepository {
    
    addPlayer(player: Player): Promise<Player>;
/*
    deletePlayer(playerId: PlayerId): Promise<void>;

    findPlayerById(playerId: PlayerId): Promise<Player | null>;
    
    updatePlayerEmail(playerId: PlayerId, newEmail: PlayerMail): Promise<void>;
*/
}