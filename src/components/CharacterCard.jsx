import React from 'react';
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedId } from '../actions/index';

const CharacterCard = () => {
  const dispatch = useDispatch();

  const {
    characters,
    selectedId,
  } = useSelector((state) => state.character);

  return (
    <LayoutGroup>
      <motion.ul className="container"      >
        { characters.length > 0 ? characters.map((character, index) => (
          <motion.li
            key={ character.id }
            className='card'
            variants={ {
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              }
            } }
             
            layoutId={ character.id }
            onClick={ () => dispatch(setSelectedId(character.id)) }
            initial="hidden"
            animate="visible"
            whileHover={ {
              scale: 0.95,
              duration: 0.3
            } }>
            <motion.img className='image' alt={ character.name } src={ character.image } ></motion.img>
            <motion.div className='title'>{ character.name }</motion.div>
          </motion.li>
        )
        ) : <div>No se encontraron resultados</div> }
      </motion.ul>
      <AnimatePresence>
        { characters.length > 0 && selectedId && (
          <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 0.8 } }
            exit={ { opacity: 0 } }
            transition={ {
              duration: 0.3,
              ease: "easeInOut"
            } }
            key="overlay"
            className='background'
            onClick={ () => dispatch(setSelectedId(null)) }
          />
        ) }
        { selectedId && (
          <motion.div className='cardModal' layoutId={ selectedId } >
            <motion.img className='imageModal' alt={ characters.find(character => character.id === selectedId).name } src={ characters.find(character => character.id === selectedId).image } ></motion.img>
            <motion.div className='titleModal'>
              Nombre: { characters.find(character => character.id === selectedId).name }
              Estado: { characters.find(character => character.id === selectedId).status }
              Especie: { characters.find(character => character.id === selectedId).species }
            </motion.div>
            <motion.button className='btnExit' onClick={ () => dispatch(setSelectedId(null)) }>✖</motion.button>
          </motion.div>
        ) }
      </AnimatePresence>
    </LayoutGroup>
  );
};

export default CharacterCard
