import axios from 'axios';

export class SummonerApi {
  /**
   * Get the summoner data by name
   * @param {string} name - The name of the summoner
   */
  static async getSummonerByName(name: string): Promise<Summoner> {
    const response = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.API_KEY}`);
    return response.data;
  }

  /**
   * Get the summoner rank
   * @param {string} id - The id of the summoner
   */
  static async getSummonerRank(id: string): Promise<SummonerLeague[]> {
    const response = await axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.API_KEY}`);
    return response.data;
  }
}
