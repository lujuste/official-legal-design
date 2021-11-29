import { Flex, Text, Box, useBreakpointValue, Heading } from '@chakra-ui/react'

import Image from 'next/image'

import {
  MotionGrid,
  MotionGridItem,
  animationFlex,
  itemAnimation,
} from '../../shared/styles/animation'

import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'

import { useState } from 'react'

interface CustomerProps {
  description: string
  image: string
}

interface CustomerData {
  customers: CustomerProps[]
}

const dataCustomers = [
  {
    description: 'Consultoria em Legal Design',
    image: '2wenergia',
  },
  {
    description: 'Consultoria em Legal Design',
    image: 'alliance',
  },

  {
    description: 'Curso de Legal Design para uma pessoa do time.',
    image: 'arcelor-mittal',
  },
  {
    description: 'Consultoria de documentos em Legal Design.',
    image: 'background-brasil',
  },

  {
    description: 'Consultoria em Legal Design',
    image: 'banco-sofisa',
  },

  {
    description: 'Curso de Legal Design para 3 pessoas do time.',
    image: 'bndes',
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'brasil-prev',
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'carrefour-banco',
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'carrefour',
  },
  {
    description: 'Curso de Legal Design para 3 pessoas do time.',
    image: 'chesf',
  },
  {
    description: 'Consultoria e treinamento de Legal Design.',
    image: 'cogna',
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'cyrela',
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'dasa',
  },

  {
    description: 'Consultoria em Legal Design.',
    image: 'energisa',
  },
  {
    description:
      'Curso customizado de Legal Design para o departamento jurídico.',
    image: 'equatorial',
  },

  {
    description:
      'Curso customizado de Legal Design para o time da América Latina.',
    image: 'kraft-heinz',
  },
  {
    description: 'Consultoria de documento em Legal Design.',
    image: 'lobby',
  },

  {
    description: 'Curso de Legal Design para grupo de colaboradores.',
    image: 'max-milhas',
  },

  {
    description: 'Treinamento em Legal Design.',
    image: 'mrv',
  },
  {
    description:
      'Treinamento de Legal Design para treinar o departamento jurídico.',
    image: 'saint-gobain',
  },
  {
    description: 'Consultoria de uma série de documentos.',
    image: 'santander',
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'santos-brasil',
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'sercesp',
  },
  {
    description: 'Consultoria de uma série de documentos.',
    image: 'seusdados',
  },
  {
    description: 'Consultoria em Legal Design.',
    image: 'sicredi',
  },
  {
    description: 'Consultoria e treinamento de Legal Design.',
    image: 'smu',
  },

  {
    description: 'Consultoria de uma série de documentos.',
    image: 'spic',
  },
  {
    description: 'Consultoria em Legal Design',
    image: 'tecban',
  },
  {
    description: 'Consultoria em Legal Design',
    image: 'transformacao-digital',
  },
  {
    description: 'Treinamento em Legal Design',
    image: 'veirano',
  },
]

const InitialState =
  'Cada um de nossos clientes contrata um serviço diferente. Clique na logo de um cliente para saber o trabalho que realizamos para eles para que você entenda o que podemos fazer por você!'

export default function Customers() {
  const [descriptionCustomer, setDescriptionCustomer] = useState(InitialState)

  function changeDescription(description) {
    setDescriptionCustomer(description)
  }

  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
    xl: true,
  })

  return (
    <Flex
      h="100%"
      w="100%"
      maxW={1400}
      mx="auto"
      px={['1rem', '5rem']}
      justify="space-around"
      flexDir={['column', 'column', 'column', 'column']}
      py="1rem"
      mt="-1.5rem"
      mb={['2rem', '2.5rem', '2rem', '1rem', '0']}
    >
      <Flex
        mx="auto"
        align="center"
        justify="center"
        flexDir={['column', 'column', 'column', 'row']}
        maxW={['280px', '280px', '1400px']}
      >
        {!isWideVersion ? (
          <>
            <Fade bottom>
              <Heading
                textAlign="center"
                fontFamily="Raleway"
                fontWeight="700"
                mt="2rem"
                fontSize="30px"
              >
                Quem já transformou seus documentos com a{' '}
                <Text as="span" color="pink.900">
                  Bits
                </Text>
              </Heading>
            </Fade>

            <Fade bottom>
              <Text
                mt="2rem"
                maxW={['260px', '360px', '400px']}
                w="100%"
                h="auto"
                textAlign="center"
                fontSize="15px"
                fontWeight="400"
              >
                {descriptionCustomer}
              </Text>
            </Fade>
          </>
        ) : (
          <>
            <Fade bottom>
              <Heading
                mt={['-2rem', '-2rem', '0', '0', '2.5rem']}
                ml={['0', '0', '0', '0', '2.7rem']}
                textAlign={['center', 'center', 'center', 'left', 'left']}
                fontFamily="Raleway"
                mb="2rem"
                flex="1"
                fontSize={['30px', '30px', '38px', '42px', '48px']}
              >
                Quem já transformou seus documentos com a{' '}
                <Text color="pink.900" as="span">
                  Bits
                </Text>
              </Heading>
            </Fade>
            <Fade bottom>
              <Text
                w={['300px', '350px', '400px', '500px', '640px']}
                mx={['0', '0', '0', '1rem']}
                textAlign={['center', 'center', 'center', 'left']}
                fontSize="16px"
                px={['0', '0', '0', '0', '2.5rem']}
              >
                {descriptionCustomer}
              </Text>
            </Fade>
          </>
        )}
      </Flex>

      <Reveal>
        <MotionGrid
          mt="1rem"
          templateColumns={[
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(4, 1fr)',
            'repeat(4, 1fr)',
            'repeat(7, 1fr)',
          ]}
          gap={['0.2rem', '0.2rem', '0rem']}
          initial="hidden"
          animate="visible"
          variants={animationFlex}
        >
          {dataCustomers.map(docs => (
            <MotionGridItem
              variants={itemAnimation}
              initial="hidden"
              animate="visible"
            >
              <Box
                key={docs.image}
                cursor="pointer"
                display="flex"
                alignItems="center"
                alignContent="center"
                justifyContent="center"
                w={['100%', '100%']}
                h="100px"
                onClick={() => changeDescription(docs.description)}
              >
                <Image
                  alt={docs.description}
                  width="100px"
                  height="100px"
                  src={`/images/${docs.image}.svg`}
                />
              </Box>
            </MotionGridItem>
          ))}
        </MotionGrid>
      </Reveal>
    </Flex>
  )
}
