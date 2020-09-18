import React from 'react'
import './index.scss'
import { Progress, Tag } from 'antd'
import DefaultImgPokemon from '../../img/defaultPokemon.png'
import { useHistory } from 'react-router-dom'
import AroowPrew from './AroowPrew'
import AroowNext from './AroowNext'
import male from '../../img/male.png'
import female from '../../img/female.png'
import backArrow from '../../img/back.png'
import nextArroww from '../../img/forward.png'

const colorTypes = {
  normal: '#696969',
  fighting: '#FF7F50',
  flying: '#5F9EA0',
  poison: '#8A2BE2',
  ground: '#F4A460',
  rock: '#808000',
  bug: '#6B8E23',
  ghost: '#483D8B',
  steel: '#2F4F4F',
  fire: '#FF4500',
  water: '#00BFFF',
  grass: '#008000',
  electric: '#FFD700',
  psychic: '#BA55D3',
  ice: '#00FFFF',
  dragon: '#5F9EA0',
  dark: '#696969',
  fairy: '#FFC0CB'
}

const InformationPokemon = ({ pokemon, pokemonIMG, typePokemon, id, nameGenderless, nameMale, nameFemale }) => {
  const history = useHistory()

  const newId = id < 10 ? '00' + id : id < 100 ? '0' + id : id
  const rendomHP = Math.floor(Math.random() * 100) + 20
  const randomAttack = Math.floor(Math.random() * 50) + 10
  const randomSpeed = Math.floor(Math.random() * 70) + 10
  
  const prevPoke = () => history.push(`/pokemon/${+ id -1}`)
  
  const prevNext = () => history.push(`/pokemon/${+ id + 1}`)

  return (
    <div className='contentArrowWidth'>
      {id === 1 ? <AroowPrew prevPoke={prevPoke} /> : id > 1 ? <AroowPrew prevPoke={prevPoke} /> : ''}
      <div className='backBody'>
        <p>
          {pokemon.name}
          <span> #{newId}</span>
        </p>
        <div className='arrowRes'>
          {id === 1 ? <img onClick={prevPoke} className='arrowResLeft' src={backArrow} alt='backArrow' /> : id > 1 ? <img onClick={prevPoke} className='arrowResLeft' src={backArrow} alt='backArrow' /> : ''}
          {id < 10107 && <img onClick={prevNext} className='arrowResRight' src={nextArroww} alt='nextArrow' />}
        </div>
        <div className='flexContentWidth'>
          <div className='blockImgStatus'>
            <div>
              <img 
                className='widthImgPokemon' 
                src={pokemonIMG} 
                alt={pokemon.name} 
                onError={e => e.target.src = DefaultImgPokemon}
              />
            </div>
            <div className='widthStatusPokemon'>
              <p>Status</p>
              <div>
                <Progress width={100} percent={rendomHP} status='active' format={percent => 'HP ' + percent} />
                <Progress percent={pokemon.base_experience} status='active' format={percent => 'Base experience ' + percent} />
                <Progress percent={pokemon.stats[0].base_stat} status='active' format={percent => 'Base stat ' + percent} />
                <Progress percent={randomAttack} format={percent => 'Attack ' + percent} />
                <Progress percent={randomSpeed} format={percent => 'Speed ' + percent} status='active'/>
              </div>
            </div>
          </div>
          <div className='widthContentPokemon'>
            <div className='pokemonCharacteristics'>
              <div className='pokemonCharacteristicsWidthContent'>
                <div className='colorCharacteristicsTitle'>Height</div>
                <div className='colorCharacteristics'>{pokemon.height}</div>
                <div className='colorCharacteristicsTitle'>Weight</div>
                <div className='colorCharacteristics'>{pokemon.weight}</div>
                <div className='colorCharacteristicsTitle'>Gender</div>
                <div className='genderWidth'>
                  {nameMale() ? <img className='genderMale' src={male} alt='male' /> : ''}
                  {nameFemale() ? <img className='genderFemale' src={female} alt='female' /> : ''}
                  {nameGenderless() ? <div>Genderless</div> : ''}
                </div>
              </div>
              <div>
                <div className='colorCharacteristicsTitle'>Category</div>
                <div className='colorCharacteristics Category'>{pokemon.moves ? pokemon.moves[0].move.name : 'Loading...'}</div>
                <div className='colorCharacteristicsTitle'>Abilities</div>
                <div className='colorCharacteristics Ability'>This Pokémon's damaging moves have a 10% chance to make the target flinch with each hit if they do not already cause flinching as a secondary effect.</div>
              </div>
            </div>
            <div className='widthTypePokemon'>
              <div>Type</div>
              <div className='flexContentWidthTypePokemon'>
                {typePokemon.map((i, ind) => <Tag key={ind} color={colorTypes[i.type.name]}>{i.type.name}</Tag>)}
              </div>
            </div>
            <div>
              <div className='WeaknessesTextTitle'>Weaknesses</div>
              <h2 className='WeaknessesText'>{pokemon.abilities.map(i => i.ability.name).join(' ')}</h2>
            </div>
          </div>
        </div>
      </div>
      {id < 10107 && <AroowNext prevNext={prevNext} />}
    </div>
  )
}

export default InformationPokemon

