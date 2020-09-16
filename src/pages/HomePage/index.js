import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemonsName, getTypesPokemon } from '../../modules/session/session-actions'
import { categoryFilter } from '../../components/HomePageComponents/categoryFilter/index'
import { PokemonCard } from '../../components/index'
import { Layout, Input, Row, Col, Checkbox, Dropdown, Button, Menu, Pagination } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import './index.scss'

const { Content } = Layout
const { Search } = Input
const { Item } = Menu

const HomePage = () => {
  const { pokemons } = useSelector(state => state.session)
  const [searchNamePokemons, setSearchNamePokemons] = useState('')
  const [itemNumber, setItemNumber] = useState(50)
  const [pokemonsNumberItem = pokemons.slice(0, 50), setPokemonsNumberItem] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemonsName())
  }, [dispatch])

  const pokemonSearch = () => pokemonsNumberItem.filter(i =>
    i.name.toLowerCase().includes(searchNamePokemons.length ? searchNamePokemons.toLowerCase() : '')
  )

  const categorySearch = ind => dispatch(getTypesPokemon(ind))

  const calcItem = num => {
    setPokemonsNumberItem(pokemonSearch().filter((_, ind) => ind < num))
    setItemNumber(num)
  }

  const nums = ['10', '30', '50']

  const menu = (
    <Menu>
      {nums.map(i => <Item onClick={() => calcItem(i)} key={i}>{i}</Item>)}
    </Menu>
  )

const menuDropDowns = (
  <Menu>
    <Item>
      {categoryFilter.map((i, ind) => (
        <Col className='widthCheckbox' key={ind}>
          <Checkbox onClick={() => categorySearch(ind + 1)}>{i}</Checkbox>
        </Col>
      ))}
    </Item>
  </Menu>
)

const onChangePage = page => {
  const from = (page - 1) * itemNumber
  const to = from + itemNumber
  const pokeItem = pokemons.slice(page === 1 ? 0 : from, page === 1 ? itemNumber : to)
  setPokemonsNumberItem(pokeItem)
  window.scrollTo(0, 0)
}

  return (
    <Layout>
      <Layout className='wrapperContentWidth'>
        <Content>
            <Col className='siderBlockNon'>
              <Row className='widthSider'>
                <Col className='widthSiderTypes'>
                  <Dropdown overlay={menuDropDowns}>
                    <p className="ant-dropdown-link" >
                      Tипы <DownOutlined />
                    </p>
                  </Dropdown>
                </Col>
                <Col className='widthDropdown'>
                  <Dropdown overlay={menu}>
                    <Button>
                      {itemNumber} <DownOutlined />
                    </Button>
                  </Dropdown>
                </Col>
                <Col className='widthSearch'>
                  <Search 
                    placeholder='Search Pokemon' 
                    onSearch={value => setSearchNamePokemons(value)} 
                    enterButton
                  />
                </Col>
              </Row>
            </Col>
          <Col className='cardsWidthPokemons'>
            {pokemonSearch().length ? pokemonSearch().map((i, ind) => <PokemonCard {...i} key={ind} />) : <h1>No results</h1>}
          </Col>
          <Row>
            <Col className='widthPagination'>
              <Pagination
                onChange={onChangePage}
                total={(pokemonSearch().length === 50 || pokemonSearch().length === 30 || pokemonSearch().length === 10) ? 10000 / itemNumber : pokemonSearch().length < 10 ? 1 : 10}
                showSizeChanger={false}
              />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  )
}

export default HomePage
