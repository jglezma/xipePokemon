import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import Items from '../components/items';

const HomeScreen = () => {
  const [searchItem, setSearchItem] = useState('');
  const [pokemonList, setpokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=20',
        );
        setpokemonList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemon();
  }, []);

  useEffect(() => {
    const filterPokemonList = () => {
      const filteredList = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchItem.toLowerCase()),
      );
      setFilteredPokemonList(filteredList);
    };

    filterPokemonList();
  }, [searchItem, pokemonList]);

  return (
    <View style={styles.container}>
      <Text>Xapiens</Text>
      <TextInput
        placeholder="Buscar Pokémon"
        value={searchItem}
        onChangeText={setSearchItem}
        style={styles.searchInput}
      />

      <FlatList
        data={filteredPokemonList}
        renderItem={({item}) => (
          <Items
            name={item.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              item.url.split('/')[6]
            }.png`}
          />
        )}
        keyExtractor={item => item.name}
        style={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  listContainer: {
    flex: 1,
    width: '80%',
  },
});

export default HomeScreen;
