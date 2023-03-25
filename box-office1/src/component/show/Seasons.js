import React from 'react'
import { SeasonList, SeasonsWrapper } from './Seasons.styled';

const Seasons = ({ seasons }) => {
    return (
      <SeasonsWrapper>
        <p>
          Total Seasons : <span>{seasons.length}</span>
        </p>
        <p>
          Total Episodes :{' '}
          <span>
            {seasons.reduce((acc, season) => acc + season.episodeOrder, 0)}
          </span>
        </p>
        <SeasonList>
          {seasons.map(season => (
            <div key={season.id} className="season-item">
              <div className="left">
                <p>Season {season.number}</p>
                <p>
                  Episodes: <span>{season.episodeOrder}</span>
                </p>
              </div>
              <div className="right">
                Aired On:{' '}
                <span>
                  {season.premiereDate} - {season.endDate}
                </span>
              </div>
            </div>
          ))}
        </SeasonList>
      </SeasonsWrapper>
    );
  };

export default Seasons;